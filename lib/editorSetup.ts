/**
 * Is the content editor ready to run on this server?
 *
 *   on a computer (npm run dev)   yes: it edits the project's files directly and needs nothing
 *   on the live site              it saves to GitHub, so it needs four settings (Vercel > Project > Settings >
 *                                 Environment Variables). docs/editor-setup.md explains how to get them.
 *
 * Until all four are there the editor shows a short "not set up yet" message instead of a login screen, its API
 * answers 503, and the website still builds and runs as normal. (Keystatic itself would stop the build.)
 * Only the NAMES of missing settings are ever shown, never a value.
 */
export const EDITOR_SETTINGS = [
  'KEYSTATIC_GITHUB_CLIENT_ID',
  'KEYSTATIC_GITHUB_CLIENT_SECRET',
  'KEYSTATIC_SECRET',
  'NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG',
] as const

/** The settings that are still missing. Empty when the editor can run. */
export function missingEditorSettings(env: Record<string, string | undefined> = process.env): string[] {
  if (env.NODE_ENV !== 'production') return []
  return EDITOR_SETTINGS.filter((name) => !env[name])
}
