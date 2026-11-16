import { config, collection, fields } from '@keystatic/core'

// SPIKE: minimal config to prove Keystatic runs on this Next/React version.
export default config({
  storage: { kind: 'local' },
  collections: {
    posts: collection({
      label: 'Blog posts',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.date({ label: 'Date' }),
        category: fields.text({ label: 'Category' }),
        content: fields.markdoc({ label: 'Content', extension: 'md' }),
      },
    }),
  },
})
