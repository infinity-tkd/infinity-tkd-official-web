import type { EditorSettingProblem } from '@/lib/editorSetup'
import { BrandMark } from '@/lib/keystatic/BrandMark'

/**
 * Shown on the live site instead of the editor until the one-time setup in docs/editor-setup.md is done: while a
 * setting is missing, and while one is there but looks wrong (for example the App ID pasted where the Client ID
 * goes, which would send people to a GitHub "404" page when they click "Log in with GitHub").
 * Only the NAMES of settings and a hint are shown, never a value.
 */
export function SettingsNotice({ missing, problems }: { missing: string[]; problems: EditorSettingProblem[] }) {
  const notSetUp = missing.length > 0
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-4 px-6 py-16 text-zinc-900 dark:text-zinc-100">
      <BrandMark size={48} />
      <h1 className="text-2xl font-bold">{notSetUp ? 'The content editor is not set up yet' : 'A content editor setting looks wrong'}</h1>
      <p>
        The website owner needs to {notSetUp ? 'finish a one-time setup' : 'fix a setting'} before the team can edit the website here. The steps are in the file{' '}
        <code>docs/editor-setup.md</code> in the website&apos;s GitHub project.
      </p>
      {notSetUp && (
        <p>
          Still missing on this server: <code>{missing.join(', ')}</code>
        </p>
      )}
      {problems.length > 0 && (
        <>
          <p>Settings that are there but look wrong:</p>
          <ul className="list-disc space-y-2 pl-6">
            {problems.map((problem) => (
              <li key={problem.name}>
                <code>{problem.name}</code> {problem.hint}
              </li>
            ))}
          </ul>
          <p>
            Fix {problems.length === 1 ? 'it' : 'them'} in Vercel (the project&apos;s Settings, then Environment Variables), then redeploy once with &quot;Use existing Build Cache&quot; unticked.
          </p>
        </>
      )}
      <p>
        Editing on your own computer needs no setup: run <code>npm run dev</code> and open <code>http://localhost:3000/keystatic</code>.
      </p>
    </main>
  )
}
