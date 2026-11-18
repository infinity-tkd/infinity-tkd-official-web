/**
 * Is the content editor ready to run on this server?
 *
 *   on a computer (npm run dev)   yes: it edits the project's files directly and needs nothing
 *   on the live site              it saves to GitHub, so it needs four settings (Vercel > Project > Settings >
 *                                 Environment Variables). docs/editor-setup.md explains how to get them.
 *
 * Until all four are there, and none of them looks wrong, the editor shows a short message instead of a login
 * screen, its API answers 503, and the website still builds and runs as normal. (Keystatic itself would stop the
 * build.) Only the NAMES of settings and a plain-English hint are ever shown, never a value.
 */
export const EDITOR_SETTINGS = [
  'KEYSTATIC_GITHUB_CLIENT_ID',
  'KEYSTATIC_GITHUB_CLIENT_SECRET',
  'KEYSTATIC_SECRET',
  'NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG',
] as const

export type EditorSettingName = (typeof EDITOR_SETTINGS)[number]

/** The settings that are still missing. Empty when the editor can run. */
export function missingEditorSettings(env: Record<string, string | undefined> = process.env): string[] {
  if (env.NODE_ENV !== 'production') return []
  return EDITOR_SETTINGS.filter((name) => !env[name])
}

/**
 * The least Keystatic accepts for KEYSTATIC_SECRET: below it, it stops with "must be at least 32 characters long"
 * right after someone has logged in. (tests/unit/security.test.ts checks that Keystatic still says 32.)
 */
export const MIN_SECRET_LENGTH = 32

/** A setting that is there but cannot work, with a hint for the owner. The hint never contains the value. */
export interface EditorSettingProblem {
  name: EditorSettingName
  hint: string
}

/** The App ID that GitHub shows above the Client ID: only digits (a GitHub App's Client ID starts with "Iv"). */
const APP_ID = /^\d{1,12}$/
/** What a Client ID is made of ("Iv1.<hex>" and "Iv23li<letters and digits>"): no space, quote, slash or "=". */
const CLIENT_ID_CHARACTERS = /^[A-Za-z0-9._-]+$/
/** A space, a line break or a quote mark that came along when the value was pasted. */
const PASTE_JUNK = /[\s"'`]/
/** An App's short name, the last part of github.com/apps/<short-name>: GitHub lowercases the name and keeps no spaces. */
const SLUG = /^[a-z0-9][a-z0-9_-]*$/

/**
 * Settings that are there but cannot work, found without asking GitHub, so a mistake that would end in a GitHub
 * "404" page or an error after login is explained on the editor page instead. Only values that can never work are
 * flagged (the App ID in the place of the Client ID, a short name that is the App's name, a secret under 32
 * characters, a pasted space or quote mark), so a correct setup is never blocked. A setting that is missing is not
 * reported here (see missingEditorSettings). The list follows the order of EDITOR_SETTINGS.
 */
export function editorSettingProblems(env: Record<string, string | undefined> = process.env): EditorSettingProblem[] {
  if (env.NODE_ENV !== 'production') return []
  const problems: EditorSettingProblem[] = []
  const flag = (name: EditorSettingName, hint: string) => problems.push({ name, hint })

  const clientId = env.KEYSTATIC_GITHUB_CLIENT_ID
  if (clientId) {
    if (APP_ID.test(clientId)) {
      flag('KEYSTATIC_GITHUB_CLIENT_ID', 'looks like the App ID (only digits). Use the Client ID instead: it starts with Iv and is on the same GitHub page.')
    } else if (!CLIENT_ID_CHARACTERS.test(clientId)) {
      flag('KEYSTATIC_GITHUB_CLIENT_ID', 'has a space, a quote mark or another odd character in it. Paste only the Client ID, with nothing around it.')
    }
  }

  const clientSecret = env.KEYSTATIC_GITHUB_CLIENT_SECRET
  if (clientSecret) {
    if (clientSecret.startsWith('Iv')) {
      flag('KEYSTATIC_GITHUB_CLIENT_SECRET', "looks like the Client ID, not the client secret. On the App's GitHub page, generate a new client secret and use that.")
    } else if (PASTE_JUNK.test(clientSecret)) {
      flag('KEYSTATIC_GITHUB_CLIENT_SECRET', 'has a space or a quote mark in it. Paste only the client secret, with nothing around it.')
    }
  }

  const secret = env.KEYSTATIC_SECRET
  if (secret && secret.length < MIN_SECRET_LENGTH) {
    flag('KEYSTATIC_SECRET', `is too short: it must be at least ${MIN_SECRET_LENGTH} characters. Make a longer random one (Step 5 of docs/editor-setup.md).`)
  }

  const slug = env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
  if (slug && !SLUG.test(slug)) {
    flag(
      'NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG',
      "is not the App's short name. Use the last part of the address of the App's public page (github.com/apps/short-name): lowercase letters, digits and hyphens, not the App's name."
    )
  }

  return problems
}
