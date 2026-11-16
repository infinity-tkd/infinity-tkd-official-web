import { makeRouteHandler } from '@keystatic/next/route-handler'
import { missingEditorSettings } from '@/lib/editorSetup'
import config from '../../../../keystatic.config'

const missing = missingEditorSettings()

const notSetUp = () =>
  Response.json({ error: 'The content editor is not set up yet.', missing }, { status: 503, headers: { 'Cache-Control': 'no-store' } })

// Keystatic stops the whole build when its GitHub settings are missing, so its handler is only created once they
// are there. Until then the website builds and runs as normal and this answers "not set up" (see lib/editorSetup.ts).
export const { GET, POST } = missing.length > 0 ? { GET: notSetUp, POST: notSetUp } : makeRouteHandler({ config })
