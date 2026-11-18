/**
 * The Content-Security-Policy and the content editor's access rules. Run with: npm run test:unit
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { NextRequest } from 'next/server.js'
import nextConfig from '../../next.config.mjs'
import { UPLOADS_CONTENT_SECURITY_POLICY } from '../../config/uploadsPolicy.mjs'
import { proxy } from '@/proxy'
import { buildCspHeader, editorContentSecurityPolicy } from '@/config/siteSettings'
import { isEditorPath } from '@/lib/editorPath'
import { EDITOR_SETTINGS, missingEditorSettings } from '@/lib/editorSetup'

/** "default-src 'self'; img-src 'self' https:" -> { 'default-src': ["'self'"], 'img-src': ["'self'", 'https:'] } */
function directives(header: string): Record<string, string[]> {
  return Object.fromEntries(
    header.split(';').map((part) => {
      const [name, ...values] = part.trim().split(/\s+/)
      return [name, values]
    })
  )
}

describe('public pages: Content-Security-Policy', () => {
  const csp = directives(buildCspHeader(false))

  it('lets pictures come from any https address (editors paste links from Drive, Dropbox, Imgur...)', () => {
    assert.deepEqual(csp['img-src'], ["'self'", 'data:', 'blob:', 'https:'])
  })

  it('keeps everything else closed: no other host for scripts, fetches, frames, forms or plugins', () => {
    assert.ok(csp['script-src'].every((source) => !source.startsWith('http') && source !== 'https:'), 'script-src has a remote host')
    assert.deepEqual(csp['connect-src'], ["'self'", 'https://cdn.jsdelivr.net'])
    assert.deepEqual(csp['frame-ancestors'], ["'none'"])
    assert.deepEqual(csp['form-action'], ["'self'"])
    assert.deepEqual(csp['object-src'], ["'none'"])
    assert.deepEqual(csp['base-uri'], ["'self'"])
    assert.ok(!csp['connect-src'].includes('https:'))
  })

  it('does not give the public site what only the editor needs', () => {
    const header = buildCspHeader(false)
    for (const source of [...editorContentSecurityPolicy.connectSrc, ...editorContentSecurityPolicy.styleSrc, ...editorContentSecurityPolicy.fontSrc]) {
      assert.ok(!header.includes(source), `${source} must not be on public pages`)
    }
  })

  it('is the same policy next.config.mjs sends for static files (the two lists must not drift apart)', async () => {
    const rules = await nextConfig.headers()
    const siteWide = rules.find((rule) => rule.source === '/(.*)')
    const sent = siteWide?.headers.find((header) => header.key === 'Content-Security-Policy')
    assert.ok(sent, 'next.config.mjs sets no site-wide Content-Security-Policy')
    assert.deepEqual(directives(sent.value), csp)
  })
})

describe('pictures saved through the editor (/uploads): opened directly, they may run nothing', () => {
  const csp = directives(UPLOADS_CONTENT_SECURITY_POLICY)

  it('has a policy that forbids scripts, frames and requests, and sandboxes the page', () => {
    assert.deepEqual(csp['default-src'], ["'none'"])
    assert.deepEqual(csp.sandbox, [], 'sandbox must list nothing: any allow-... would loosen it')
    assert.ok(!UPLOADS_CONTENT_SECURITY_POLICY.includes('allow-'))
    assert.ok(!UPLOADS_CONTENT_SECURITY_POLICY.includes('script-src'))
  })

  it('is sent by next.config.mjs after the site-wide policy, so that it is the one that applies', async () => {
    const rules = await nextConfig.headers()
    const index = rules.findIndex((rule) => rule.source === '/uploads/:path*')
    assert.ok(index > rules.findIndex((rule) => rule.source === '/(.*)'), 'the /uploads rule must come after the site-wide rule')
    assert.deepEqual(rules[index].headers, [{ key: 'Content-Security-Policy', value: UPLOADS_CONTENT_SECURITY_POLICY }])
  })

  it('is also sent by the proxy, which sees the file types the server does not hand out itself (.html, .avif...)', () => {
    for (const file of ['/uploads/blog/x.html', '/uploads/x.avif', '/uploads/a/b/c.svg', '/uploads/blog/x.png']) {
      const response = proxy(new NextRequest(`http://localhost${file}`))
      assert.equal(response.headers.get('content-security-policy'), UPLOADS_CONTENT_SECURITY_POLICY, file)
    }
  })

  it('does not weaken any page: the proxy still sends the normal policy everywhere else', () => {
    for (const page of ['/', '/blog', '/blog/uploads', '/uploadsx/a.html', '/keystatic']) {
      const header = proxy(new NextRequest(`http://localhost${page}`)).headers.get('content-security-policy') ?? ''
      assert.notEqual(header, UPLOADS_CONTENT_SECURITY_POLICY, page)
      assert.match(header, /script-src 'self'/, page)
    }
  })
})

describe('content editor: Content-Security-Policy', () => {
  const csp = directives(buildCspHeader(false, { editor: true }))

  it('may talk to GitHub, load its own font and preview any picture link', () => {
    assert.ok(csp['connect-src'].includes('https://api.github.com'))
    assert.ok(csp['style-src'].includes('https://fonts.googleapis.com'))
    assert.ok(csp['font-src'].includes('https://fonts.gstatic.com'))
    assert.ok(csp['img-src'].includes('https:'))
  })

  it('is still closed to being framed, and to forms and plugins from elsewhere', () => {
    assert.deepEqual(csp['frame-ancestors'], ["'none'"])
    assert.deepEqual(csp['form-action'], ["'self'"])
    assert.deepEqual(csp['object-src'], ["'none'"])
  })
})

describe('isEditorPath', () => {
  it('is true for the editor screen and its API', () => {
    for (const path of ['/keystatic', '/keystatic/', '/keystatic/collection/posts', '/keystatic/singleton/pricing', '/api/keystatic', '/api/keystatic/github/login', '/api/keystatic/tree']) {
      assert.equal(isEditorPath(path), true, path)
    }
  })

  it('is false for every public page, including look-alikes', () => {
    for (const path of ['/', '/blog', '/pricing', '/keystatic-fan', '/keystaticx/a', '/api/contact', '/api/keystaticx', '/blog/keystatic', '', null, undefined]) {
      assert.equal(isEditorPath(path), false, String(path))
    }
  })
})

describe('missingEditorSettings', () => {
  const all = Object.fromEntries(EDITOR_SETTINGS.map((name) => [name, 'x']))

  it('needs nothing on a computer (npm run dev)', () => {
    assert.deepEqual(missingEditorSettings({ NODE_ENV: 'development' }), [])
    assert.deepEqual(missingEditorSettings({}), [])
  })

  it('on the live site, lists every setting that is missing (names only)', () => {
    assert.deepEqual(missingEditorSettings({ NODE_ENV: 'production' }), [...EDITOR_SETTINGS])
    assert.deepEqual(missingEditorSettings({ NODE_ENV: 'production', ...all, KEYSTATIC_SECRET: '' }), ['KEYSTATIC_SECRET'])
  })

  it('is satisfied when all four are there', () => {
    assert.deepEqual(missingEditorSettings({ NODE_ENV: 'production', ...all }), [])
  })

  it('asks for exactly the settings Keystatic reads', () => {
    assert.deepEqual([...EDITOR_SETTINGS].sort(), ['KEYSTATIC_GITHUB_CLIENT_ID', 'KEYSTATIC_GITHUB_CLIENT_SECRET', 'KEYSTATIC_SECRET', 'NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG'])
  })
})
