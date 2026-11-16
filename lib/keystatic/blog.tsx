import { collection, fields } from '@keystatic/core'
import { optionalText, picture, requiredText } from './fields'

/**
 * content/blog/<slug>.md: the blog posts. Same file format the site has always used (front matter + Markdown),
 * read by lib/blog.ts, so existing posts open in the editor as they are.
 */
export const posts = collection({
  label: 'Blog posts',
  slugField: 'title',
  path: 'content/blog/*',
  format: { contentField: 'content' },
  entryLayout: 'content',
  columns: ['category', 'date'],
  schema: {
    title: fields.slug({
      name: { label: 'Title', validation: { isRequired: true } },
      slug: {
        label: 'Web address of the post',
        description: 'Lowercase letters, numbers and dashes. Do not change it after the post is published: its address would change.',
        validation: { pattern: { regex: /^[a-z0-9]+(-[a-z0-9]+)*$/, message: 'Use lowercase letters, numbers and single dashes, like my-first-post' } },
      },
    }),
    description: fields.text({
      label: 'Short summary',
      description: 'One or two sentences shown in the list of posts and in Google. Aim for under 160 characters.',
      multiline: true,
      validation: { isRequired: true, length: { max: 300 } },
    }),
    date: fields.date({ label: 'Publish date', defaultValue: { kind: 'today' }, validation: { isRequired: true } }),
    updated: fields.date({ label: 'Last updated (optional)', description: 'Fill in when you change a post that is already published.' }),
    author: optionalText('Author', { description: 'Leave empty to show "Infinity Taekwondo Coaching Team".' }),
    category: requiredText('Category', { description: 'For example Getting Started. Posts with the same category are listed together.' }),
    tags: fields.array(fields.text({ label: 'Tag' }), {
      label: 'Tags (optional)',
      itemLabel: (props) => props.value || 'Tag',
    }),
    cover: picture('blog', 'Cover picture', { description: 'The big picture at the top of the post and on its card.' }),
    coverAlt: optionalText('Cover picture description', { description: 'Says what is in the picture, for people who cannot see it. Leave empty to use the title.' }),
    featured: fields.checkbox({ label: 'Feature this post', description: 'Shows it as the big lead story on the Blog page.' }),
    draft: fields.checkbox({ label: 'Draft', description: 'A draft is saved but not shown on the live website.' }),
    content: fields.markdoc({
      label: 'Post',
      extension: 'md',
      options: {
        heading: [2, 3],
        codeBlock: false,
        image: { directory: 'public/uploads/blog', publicPath: '/uploads/blog/' },
      },
    }),
  },
})
