/**
 * What the browser may do with a file from /uploads (pictures saved through the content editor).
 *
 * Those files are only ever shown inside <img>, where a browser never runs anything in them. This policy covers the
 * other way to reach one: opening its address directly. `sandbox` turns the page into an isolated one and
 * `default-src 'none'` forbids every script, frame and request, so even an SVG or HTML file that someone committed to
 * the repository by hand cannot run code on the website's address.
 *
 * Sent by next.config.mjs (for files the server hands out itself) and by proxy.ts (for the file types it also sees);
 * tests/unit/security.test.ts checks both. A plain .mjs file so next.config.mjs can import it.
 */
export const UPLOADS_CONTENT_SECURITY_POLICY = "default-src 'none'; style-src 'unsafe-inline'; sandbox"
