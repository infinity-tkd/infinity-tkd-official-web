import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { expect, test } from '@playwright/test'
import { SettingsNotice } from '@/app/keystatic/SettingsNotice'
import { EDITOR_SETTINGS, editorSettingProblems, missingEditorSettings } from '@/lib/editorSetup'

/**
 * What the owner sees at /keystatic on the live site until the editor's four settings are there and right, rendered
 * on the server (no browser needed). The page is public: it may name a setting and say what is wrong with it, but it
 * must never show a value.
 */
const render = (env: Record<string, string>) => {
  const live = { NODE_ENV: 'production', ...env }
  return renderToStaticMarkup(<SettingsNotice missing={missingEditorSettings(live)} problems={editorSettingProblems(live)} />)
}

// The mistake that was made on the live site (2026-11-18), with made-up values: the App ID where the Client ID goes,
// and the App's name where its short name goes. Both end in a GitHub "404" page.
const MISTAKE = {
  KEYSTATIC_GITHUB_CLIENT_ID: '5812995',
  KEYSTATIC_GITHUB_CLIENT_SECRET: '0123456789abcdef0123456789abcdef01234567',
  KEYSTATIC_SECRET: '0123456789abcdef'.repeat(4),
  NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: 'InfinityTKD_Web_Editor',
}

test.describe('the editor notice', () => {
  test('with nothing set it is the same "not set up yet" page as before, and lists the four names', () => {
    const markup = render({})
    expect(markup).toContain('The content editor is not set up yet')
    expect(markup).toContain('Still missing on this server:')
    for (const name of EDITOR_SETTINGS) expect(markup).toContain(name)
    expect(markup).not.toContain('look wrong')
  })

  test('with settings that look wrong it says which ones and what to change, and shows no value', () => {
    const markup = render(MISTAKE)
    expect(markup).toContain('A content editor setting looks wrong')
    expect(markup).not.toContain('Still missing')
    expect(markup).toContain('<code>KEYSTATIC_GITHUB_CLIENT_ID</code> looks like the App ID')
    expect(markup).toContain('<code>NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG</code> is not the App')
    expect(markup).toContain('Use existing Build Cache')
    for (const value of Object.values(MISTAKE)) expect(markup, `the page repeats a value (${value.slice(0, 4)}...)`).not.toContain(value)
  })

  test('a missing setting and a wrong one are both reported', () => {
    const markup = render({ KEYSTATIC_GITHUB_CLIENT_ID: '5812995' })
    expect(markup).toContain('The content editor is not set up yet')
    expect(markup).toContain('Still missing on this server: <code>KEYSTATIC_GITHUB_CLIENT_SECRET, KEYSTATIC_SECRET, NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG</code>')
    expect(markup).toContain('<code>KEYSTATIC_GITHUB_CLIENT_ID</code> looks like the App ID')
  })
})
