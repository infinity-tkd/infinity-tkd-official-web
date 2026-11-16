import type { Metadata } from 'next'
import { missingEditorSettings } from '@/lib/editorSetup'
import { BrandMark } from '@/lib/keystatic/BrandMark'
import KeystaticApp from './keystatic'

// The content editor is for the team only: keep it out of search results and link previews.
export const metadata: Metadata = {
  title: { absolute: 'Content editor' },
  description: 'Edit the Infinity Taekwondo website content.',
  robots: { index: false, follow: false },
}

export default function Layout() {
  const missing = missingEditorSettings()
  if (missing.length > 0) return <NotSetUp missing={missing} />
  return <KeystaticApp />
}

/** Shown on the live site until the one-time setup in docs/editor-setup.md is done. */
function NotSetUp({ missing }: { missing: string[] }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-4 px-6 py-16 text-zinc-900 dark:text-zinc-100">
      <BrandMark size={48} />
      <h1 className="text-2xl font-bold">The content editor is not set up yet</h1>
      <p>
        The website owner needs to finish a one-time setup before the team can edit the website here. The steps are in the file{' '}
        <code>docs/editor-setup.md</code> in the website&apos;s GitHub project.
      </p>
      <p>
        Still missing on this server: <code>{missing.join(', ')}</code>
      </p>
      <p>
        Editing on your own computer needs no setup: run <code>npm run dev</code> and open <code>http://localhost:3000/keystatic</code>.
      </p>
    </main>
  )
}
