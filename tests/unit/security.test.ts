/**
 * The Content-Security-Policy and the content editor's access rules. Run with: npm run test:unit
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { NextRequest } from 'next/server.js'
import nextConfig from '../../next.config.mjs'
import { UPLOADS_CONTENT_SECURITY_POLICY } from '../../config/uploadsPolicy.mjs'
import { proxy } from '@/proxy'
import { buildCspHeader, editorContentSecurityPolicy } from '@/config/siteSettings'
import { isEditorPath } from '@/lib/editorPath'
import { EDITOR_SETTINGS, MIN_SECRET_LENGTH, editorSettingProblems, missingEditorSettings } from '@/lib/editorSetup'

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

  it('may read the project files from raw.githubusercontent.com (Keystatic does that while the GitHub project is public)', () => {
    assert.ok(csp['connect-src'].includes('https://raw.githubusercontent.com'), 'without it every editor page that opens a file says "Failed to fetch"')
  })

  it("allows every address Keystatic's own browser code fetches from (a list kept by hand went wrong once: raw.githubusercontent.com was missing)", () => {
    const file = path.join(process.cwd(), 'node_modules', '@keystatic', 'core', 'dist', 'keystatic-core-ui.js')
    const hosts = new Set<string>()
    for (const line of readFileSync(file, 'utf8').split('\n')) {
      if (!/\bfetch\(|\burl:/.test(line)) continue
      for (const match of line.matchAll(/https:\/\/([a-z0-9.-]+)/gi)) hosts.add(match[1])
    }
    assert.ok(
      hosts.has('raw.githubusercontent.com') && hosts.has('api.github.com'),
      `the scan of Keystatic's code no longer finds the addresses it knew (found: ${[...hosts].join(', ') || 'none'}): check how Keystatic reads files now and update this test`
    )
    for (const host of hosts) {
      assert.ok(csp['connect-src'].includes(`https://${host}`), `Keystatic's editor fetches from ${host}, but connect-src does not allow it: editor pages would say "Failed to fetch"`)
    }
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

describe('editorSettingProblems', () => {
  // Made-up values in the shapes GitHub really uses. The real ones are secret and never belong in a test.
  const right = {
    NODE_ENV: 'production',
    KEYSTATIC_GITHUB_CLIENT_ID: 'Iv23liFAKEFAKEFAKE00',
    KEYSTATIC_GITHUB_CLIENT_SECRET: '0123456789abcdef0123456789abcdef01234567',
    KEYSTATIC_SECRET: '0123456789abcdef'.repeat(4),
    NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: 'infinitytkd-web-editor',
  }
  const problemsFor = (change: Record<string, string>) => editorSettingProblems({ ...right, ...change })
  const namesFor = (change: Record<string, string>) => problemsFor(change).map((problem) => problem.name)

  it('checks nothing on a computer (npm run dev)', () => {
    assert.deepEqual(editorSettingProblems({ NODE_ENV: 'development', KEYSTATIC_GITHUB_CLIENT_ID: '5812995', KEYSTATIC_SECRET: 'short' }), [])
    assert.deepEqual(editorSettingProblems({}), [])
  })

  it('has nothing to say about a correct setup, in either of the Client ID shapes GitHub has used', () => {
    assert.deepEqual(editorSettingProblems(right), [])
    assert.deepEqual(problemsFor({ KEYSTATIC_GITHUB_CLIENT_ID: 'Iv1.8a61f9b3a7aba766' }), [])
  })

  it('catches the App ID pasted where the Client ID goes (it ends in a GitHub 404 page after "Log in with GitHub")', () => {
    const [problem, ...others] = problemsFor({ KEYSTATIC_GITHUB_CLIENT_ID: '5812995' })
    assert.equal(problem.name, 'KEYSTATIC_GITHUB_CLIENT_ID')
    assert.match(problem.hint, /App ID/)
    assert.match(problem.hint, /Client ID/)
    assert.deepEqual(others, [])
  })

  it('catches a Client ID pasted with a space, a quote mark, a line break or the setting name', () => {
    for (const id of ['Iv23liFAKEFAKEFAKE00 ', ' Iv23liFAKEFAKEFAKE00', '"Iv23liFAKEFAKEFAKE00"', "'Iv23liFAKEFAKEFAKE00'", 'Iv23liFAKEFAKEFAKE00\n', 'KEYSTATIC_GITHUB_CLIENT_ID=Iv23liFAKEFAKEFAKE00']) {
      assert.deepEqual(namesFor({ KEYSTATIC_GITHUB_CLIENT_ID: id }), ['KEYSTATIC_GITHUB_CLIENT_ID'], JSON.stringify(id))
    }
  })

  it('catches the Client ID in the place of the client secret, and a client secret pasted with a space or quote mark', () => {
    assert.deepEqual(namesFor({ KEYSTATIC_GITHUB_CLIENT_SECRET: 'Iv23liFAKEFAKEFAKE00' }), ['KEYSTATIC_GITHUB_CLIENT_SECRET'])
    for (const secret of [`${right.KEYSTATIC_GITHUB_CLIENT_SECRET} `, `"${right.KEYSTATIC_GITHUB_CLIENT_SECRET}"`, `${right.KEYSTATIC_GITHUB_CLIENT_SECRET}\n`]) {
      assert.deepEqual(namesFor({ KEYSTATIC_GITHUB_CLIENT_SECRET: secret }), ['KEYSTATIC_GITHUB_CLIENT_SECRET'], JSON.stringify(secret))
    }
  })

  it("catches an App short name that is the App's name, has capitals or spaces, or is a whole address", () => {
    for (const slug of ['InfinityTKD_Web_Editor', 'InfinityTKD Web Editor', 'infinitytkd web editor', 'Infinitytkd-web-editor', 'https://github.com/apps/infinitytkd-web-editor', 'github.com/apps/infinitytkd-web-editor', '/infinitytkd-web-editor', '-infinitytkd']) {
      assert.deepEqual(namesFor({ NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: slug }), ['NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG'], slug)
    }
    // GitHub may keep an underscore, so a lowercase one is not flagged: only values that can never work are.
    for (const slug of ['infinitytkd-web-editor', 'a', 'my-app-2', 'infinity_tkd']) {
      assert.deepEqual(namesFor({ NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: slug }), [], slug)
    }
  })

  it('catches a KEYSTATIC_SECRET under 32 characters and accepts exactly 32', () => {
    assert.deepEqual(namesFor({ KEYSTATIC_SECRET: 'x'.repeat(MIN_SECRET_LENGTH - 1) }), ['KEYSTATIC_SECRET'])
    assert.deepEqual(namesFor({ KEYSTATIC_SECRET: 'x'.repeat(MIN_SECRET_LENGTH) }), [])
    assert.deepEqual(namesFor({ KEYSTATIC_SECRET: 'password' }), ['KEYSTATIC_SECRET'])
  })

  it('reports each wrong setting once, in the order of EDITOR_SETTINGS, and never one that is missing', () => {
    const wrong = editorSettingProblems({
      NODE_ENV: 'production',
      KEYSTATIC_GITHUB_CLIENT_ID: '5812995',
      KEYSTATIC_GITHUB_CLIENT_SECRET: 'Iv23liFAKEFAKEFAKE00',
      KEYSTATIC_SECRET: 'short',
      NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: 'InfinityTKD_Web_Editor',
    })
    assert.deepEqual(wrong.map((problem) => problem.name), [...EDITOR_SETTINGS])
    assert.deepEqual(editorSettingProblems({ NODE_ENV: 'production' }), [], 'a missing setting is not a wrong one')
    assert.deepEqual(editorSettingProblems({ NODE_ENV: 'production', KEYSTATIC_GITHUB_CLIENT_ID: '', KEYSTATIC_SECRET: '' }), [])
  })

  it('never repeats a value in what it says (the editor page is public)', () => {
    const wrong = {
      KEYSTATIC_GITHUB_CLIENT_ID: '5812995',
      KEYSTATIC_GITHUB_CLIENT_SECRET: 'Iv23liSECRETLOOKINGVALUE',
      KEYSTATIC_SECRET: 'hunter2hunter2',
      NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: 'InfinityTKD_Web_Editor',
    }
    const said = JSON.stringify(editorSettingProblems({ NODE_ENV: 'production', ...wrong }))
    assert.equal(JSON.parse(said).length, 4, 'every one of the four should have been flagged for this test to mean anything')
    for (const value of Object.values(wrong)) assert.ok(!said.includes(value), `a value was repeated: ${value.slice(0, 4)}...`)
  })

  it('asks for the same minimum as Keystatic, which stops with "must be at least N characters long"', () => {
    const dist = path.join(process.cwd(), 'node_modules', '@keystatic', 'core', 'dist')
    const limits = readdirSync(dist)
      .filter((file) => /^keystatic-core-api-generic.*\.js$/.test(file))
      .flatMap((file) => [...readFileSync(path.join(dist, file), 'utf8').matchAll(/KEYSTATIC_SECRET must be at least (\d+) characters long/g)].map((match) => Number(match[1])))
    assert.ok(limits.length > 0, "Keystatic's minimum for KEYSTATIC_SECRET was not found in its files: check what it says now and update MIN_SECRET_LENGTH and this test")
    assert.ok(limits.every((limit) => limit === MIN_SECRET_LENGTH), `Keystatic now wants ${[...new Set(limits)].join(' or ')} characters, lib/editorSetup.ts says ${MIN_SECRET_LENGTH}`)
  })
})
