import { makeRouteHandler } from '@keystatic/next/route-handler'
import { editorSettingProblems, missingEditorSettings } from '@/lib/editorSetup'
import config from '../../../../keystatic.config'

const missing = missingEditorSettings()
const problems = editorSettingProblems()

const notReady = () =>
  Response.json(
    { error: missing.length > 0 ? 'The content editor is not set up yet.' : 'A content editor setting looks wrong.', missing, problems },
    { status: 503, headers: { 'Cache-Control': 'no-store' } }
  )

// Keystatic stops the whole build when its GitHub settings are missing, so its handler is only created once they
// are there and none looks wrong. Until then the website builds and runs as normal and this answers "not ready"
// (see lib/editorSetup.ts). Only names and hints are sent, never a value.
export const { GET, POST } = missing.length > 0 || problems.length > 0 ? { GET: notReady, POST: notReady } : makeRouteHandler({ config })
