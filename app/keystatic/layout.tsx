import type { Metadata } from 'next'
import { editorSettingProblems, missingEditorSettings } from '@/lib/editorSetup'
import KeystaticApp from './keystatic'
import { SettingsNotice } from './SettingsNotice'

// The content editor is for the team only: keep it out of search results and link previews.
export const metadata: Metadata = {
  title: { absolute: 'Content editor' },
  description: 'Edit the Infinity Taekwondo website content.',
  robots: { index: false, follow: false },
}

export default function Layout() {
  const missing = missingEditorSettings()
  const problems = editorSettingProblems()
  // On the live site the editor only starts when all four settings are there and none of them looks wrong.
  if (missing.length > 0 || problems.length > 0) return <SettingsNotice missing={missing} problems={problems} />
  return <KeystaticApp />
}
