/**
 * The content editor (Keystatic): its screen lives at /keystatic and it saves through /api/keystatic.
 * Kept in a file of its own, with no imports, so the browser bundle, the proxy and the tests can all use it.
 */
const SCREEN = '/keystatic'
const API = '/api/keystatic'

/** True for the editor screen and the API behind it, false for every public page. */
export function isEditorPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false
  return pathname === SCREEN || pathname.startsWith(`${SCREEN}/`) || pathname === API || pathname.startsWith(`${API}/`)
}
