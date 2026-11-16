import { config } from '@keystatic/core'
import { posts } from '@/lib/keystatic/blog'
import { pricing } from '@/lib/keystatic/pricing'
import { schedule } from '@/lib/keystatic/schedule'

/**
 * The content editor at /keystatic. Every content type is described once in lib/keystatic/<type>.tsx; the files it
 * saves (content/**) are read by the typed modules in data/ and lib/blog.ts, so the pages never change.
 * See docs/editing-guide.md for how to use it and data/README.md for how it fits together.
 */
export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'Infinity Taekwondo' },
    navigation: {
      Writing: ['posts'],
      Website: ['schedule', 'pricing'],
    },
  },
  collections: { posts },
  singletons: { schedule, pricing },
})
