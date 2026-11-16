import { collection, fields } from '@keystatic/core'
import { postBlocks } from './blocks'
import { optionalText, picture, requiredText } from './fields'
import { insertedPictureName } from './prepareUpload'

/**
 * content/blog/<slug>.md: the blog posts. Same file format the site has always used (front matter + Markdown),
 * read by lib/blogParse.ts, so existing posts open in the editor as they are. Every field below is also listed in
 * BLOG_FIELDS (lib/blogParse.ts); tests/e2e/blog-schema.logic.spec.ts keeps the two equal.
 *
 * The form is in this order: what the post is, how it looks, how it is found, and then the text itself.
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
    coverCaption: optionalText('Cover picture caption (optional)', { description: 'A short line under the cover picture, such as who took the photo.' }),
    featured: fields.checkbox({ label: 'Feature this post', description: 'Shows it as the big lead story on the Blog page.' }),
    draft: fields.checkbox({ label: 'Draft', description: 'A draft is saved but not shown on the live website.' }),
    unlisted: fields.checkbox({
      label: 'Hide from the blog list',
      description:
        'The post is left out of the blog list, the categories and the feed, and search engines are asked to skip it. Anyone who has its link can still open it, so never use this for private information.',
    }),
    tableOfContents: fields.select({
      label: 'Table of contents',
      description: 'The "On this page" list made from the headings.',
      options: [
        { label: 'Automatic (when there are 3 headings or more)', value: 'auto' },
        { label: 'Always show', value: 'show' },
        { label: 'Hide', value: 'hide' },
      ],
      defaultValue: 'auto',
    }),
    related: fields.array(fields.relationship({ label: 'Post', collection: 'posts' }), {
      label: 'Read next (optional)',
      description: 'Pick up to 3 posts to suggest at the bottom of this one. Leave empty and the website picks similar posts.',
      itemLabel: (props) => props.value ?? 'Choose a post',
      validation: { length: { max: 3 } },
    }),
    seoTitle: optionalText('Title for Google (optional)', {
      description: 'Leave empty to use the post title. About 50 to 60 characters is shown in full.',
    }),
    seoDescription: optionalText('Description for Google (optional)', {
      description: 'Leave empty to use the short summary. About 150 to 160 characters is shown in full.',
      multiline: true,
    }),
    socialImage: picture('blog', 'Picture for sharing (optional)', {
      description: 'The picture shown when the post is shared on Facebook, Telegram or WhatsApp. Leave empty to use the cover picture.',
    }),
    content: fields.markdoc({
      label: 'Post',
      extension: 'md',
      // The "+" menu and the "/" command offer these blocks besides headings, lists, tables and pictures.
      components: postBlocks,
      options: {
        heading: [2, 3],
        codeBlock: false,
        image: {
          directory: 'public/uploads/blog',
          publicPath: '/uploads/blog/',
          // Safe, never-clashing file names (the editor's Image button would keep the original one).
          transformFilename: (original) => insertedPictureName(original),
          schema: {
            alt: fields.text({ label: 'Picture description', description: 'Says what is in the picture, for people who cannot see it.' }),
            title: fields.text({ label: 'Caption (optional)', description: 'Shown in small text under the picture.' }),
          },
        },
      },
    }),
  },
})
