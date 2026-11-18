/**
 * Which posts are listed, and what "Keep reading" suggests. Run with: npm run test:unit
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readPost, type BlogPostMeta } from '@/lib/blogParse'
import { categoriesOf, listedPosts, relatedPosts } from '@/lib/blogQuery'

/** A post as the website reads it from a file. */
function post(slug: string, front: Record<string, string> = {}): BlogPostMeta {
  const fields = { title: slug, description: `About ${slug}`, category: 'Training', date: '2026-01-01', ...front }
  const text = `---\n${Object.entries(fields).map(([key, value]) => `${key}: ${value}`).join('\n')}\n---\nBody`
  const result = readPost(slug, text)
  assert.ok(result.ok, `fixture "${slug}" is valid: ${result.ok ? '' : result.reason}`)
  return result.post
}

describe('listedPosts', () => {
  it('leaves out the posts hidden from the list, and nothing else', () => {
    const all = [post('a'), post('b', { unlisted: 'true' }), post('c', { unlisted: 'false' })]
    assert.deepEqual(listedPosts(all).map((p) => p.slug), ['a', 'c'])
  })
})

describe('categoriesOf', () => {
  it('counts only what it is given, and sorts by name', () => {
    const listed = [post('a', { category: 'Training' }), post('b', { category: 'Belts' }), post('c', { category: 'Training' })]
    assert.deepEqual(categoriesOf(listed), [
      { name: 'Belts', slug: 'belts', count: 1 },
      { name: 'Training', slug: 'training', count: 2 },
    ])
  })
})

describe('relatedPosts', () => {
  const mine = post('mine', { category: 'Training', tags: '[kicks]' })
  const sameCategory = post('same-category', { category: 'Training', date: '2026-02-01' })
  const sharedTag = post('shared-tag', { category: 'Belts', tags: '[kicks]', date: '2026-03-01' })
  const newest = post('newest', { category: 'News', date: '2026-04-01' })
  const oldest = post('oldest', { category: 'News', date: '2025-01-01' })
  const listed = [mine, sameCategory, sharedTag, newest, oldest]

  it('suggests similar posts: same category, then shared tags, then the most recent', () => {
    assert.deepEqual(relatedPosts(mine, listed).map((p) => p.slug), ['same-category', 'shared-tag', 'newest'])
  })

  it('never suggests the post itself', () => {
    assert.ok(!relatedPosts(mine, listed, 10).some((p) => p.slug === 'mine'))
    assert.equal(relatedPosts(mine, listed, 10).length, 4)
  })

  it('puts the posts chosen by hand first, in the order chosen, then fills up with similar ones', () => {
    const chosen = post('chosen', { related: '[oldest, shared-tag]' })
    // (After the two chosen ones come the posts of the same category, newest first.)
    assert.deepEqual(relatedPosts(chosen, [chosen, ...listed]).map((p) => p.slug), ['oldest', 'shared-tag', 'same-category'])
  })

  it('ignores a choice that does not exist, is the post itself, or is not in the list (hidden), and never repeats one', () => {
    const hidden = post('hidden', { unlisted: 'true' })
    for (const choice of ['[chosen, ghost, newest]', '[hidden, ghost, newest]', '[newest, newest, ghost]']) {
      const chosen = post('chosen', { related: choice })
      const suggested = relatedPosts(chosen, listedPosts([chosen, hidden, ...listed])).map((p) => p.slug)
      assert.equal(suggested[0], 'newest', choice)
      assert.ok(!suggested.includes('chosen') && !suggested.includes('ghost') && !suggested.includes('hidden'), choice)
      assert.equal(new Set(suggested).size, suggested.length, choice)
    }
  })

  it('respects the limit, even when more were chosen by hand', () => {
    const chosen = post('chosen', { related: '[a, b, c]' })
    const others = ['a', 'b', 'c', 'd'].map((slug) => post(slug))
    assert.deepEqual(relatedPosts(chosen, [chosen, ...others], 2).map((p) => p.slug), ['a', 'b'])
    assert.deepEqual(relatedPosts(chosen, [chosen, ...others], 0), [])
  })

  it('reads at most 3 posts chosen by hand, and ignores anything that is not text', () => {
    const chosen = post('chosen', { related: '[a, b, c, d, e]' })
    assert.deepEqual(chosen.related, ['a', 'b', 'c'])
    const odd = readPost('odd', '---\ntitle: T\ndescription: D\ncategory: C\ndate: 2026-01-01\nrelated:\n  - a\n  - 5\n  - [x]\n  - a\n  - " b "\n---\n')
    assert.ok(odd.ok)
    assert.deepEqual(odd.post.related, ['a', 'b'])
  })
})

describe('the options of a post', () => {
  it('have safe defaults, so an existing post looks exactly as before', () => {
    const plain = post('plain')
    assert.equal(plain.unlisted, false)
    assert.equal(plain.tableOfContents, 'auto')
    assert.deepEqual(plain.related, [])
    assert.equal(plain.seoTitle, undefined)
    assert.equal(plain.seoDescription, undefined)
    assert.equal(plain.socialImage, undefined)
    assert.equal(plain.cover, undefined)
  })

  it('are read from the front matter', () => {
    const custom = readPost(
      'custom',
      '---\ntitle: T\ndescription: D\ncategory: C\ndate: 2026-01-01\ncover: /uploads/blog/x.jpg\ncoverCaption: Photo by Sophea\nunlisted: true\ntableOfContents: hide\nseoTitle: " A better title "\nseoDescription: A better description\nsocialImage: /uploads/blog/share.jpg\n---\n'
    )
    assert.ok(custom.ok)
    assert.deepEqual(custom.post.cover, { src: '/uploads/blog/x.jpg', alt: 'T', caption: 'Photo by Sophea' })
    assert.equal(custom.post.unlisted, true)
    assert.equal(custom.post.tableOfContents, 'hide')
    assert.equal(custom.post.seoTitle, 'A better title')
    assert.equal(custom.post.seoDescription, 'A better description')
    assert.equal(custom.post.socialImage, '/uploads/blog/share.jpg')
  })

  it('fall back to the default when the value is not one the website knows', () => {
    const odd = readPost('odd', '---\ntitle: T\ndescription: D\ncategory: C\ndate: 2026-01-01\ntableOfContents: sometimes\nunlisted: "yes please"\nseoTitle: 42\n---\n')
    assert.ok(odd.ok)
    assert.equal(odd.post.tableOfContents, 'auto')
    assert.equal(odd.post.unlisted, false, 'only a real true hides a post')
    assert.equal(odd.post.seoTitle, undefined)
  })
})
