/**
 * Lets plain Node (22.6+, with --experimental-strip-types) import the project's TypeScript
 * data files: resolves the "@/..." alias from tsconfig and extension-less relative imports
 * ("./types" -> "./types.ts", "./library" -> "./library/index.ts").
 *
 * Used by `npm run check:data`.
 */
import { register } from 'node:module'

register('./resolve-ts-hooks.mjs', import.meta.url)
