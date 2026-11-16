import { config } from '@keystatic/core'
import { achievements } from '@/lib/keystatic/achievements'
import { ageGroups } from '@/lib/keystatic/ageGroups'
import { posts } from '@/lib/keystatic/blog'
import { coaches } from '@/lib/keystatic/coaches'
import { pricing } from '@/lib/keystatic/pricing'
import { BrandMark } from '@/lib/keystatic/BrandMark'
import { schedule } from '@/lib/keystatic/schedule'
import { students } from '@/lib/keystatic/students'

/**
 * The content editor at /keystatic. Every content type is described once in lib/keystatic/<type>.tsx; the files it
 * saves (content/**) are read by the typed modules in data/ and lib/blog.ts, so the pages never change.
 * See docs/editing-guide.md for how to use it and docs/editor-setup.md for the one-time setup on Vercel.
 *
 * Where it saves:
 *   on a computer (npm run dev)   straight into the project's files; nothing to log in to
 *   on the live site              to the GitHub repository, as a commit made by the person who is logged in
 *                                 (they need write access to the repository). Vercel then rebuilds the site.
 */
export default config({
  storage:
    process.env.NODE_ENV === 'production'
      ? {
          kind: 'github',
          repo: { owner: 'infinity-tkd', name: 'infinity-tkd-official-web' },
          // Branches made in the editor are listed and created as content/<name>: easy to spot in GitHub and Vercel.
          branchPrefix: 'content/',
        }
      : { kind: 'local' },
  ui: {
    brand: { name: 'Infinity Taekwondo', mark: () => <BrandMark /> },
    navigation: {
      Writing: ['posts'],
      People: ['coaches', 'students', 'achievements'],
      'Memberships and classes': ['pricing', 'ageGroups', 'schedule'],
    },
  },
  collections: { posts },
  singletons: { coaches, students, achievements, schedule, pricing, ageGroups },
})
