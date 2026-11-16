/**
 * Which links in a post become real links. Run with: npm run test:unit
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { isInternalHref, isSafeHref } from '@/lib/safeHref'

describe('isSafeHref: allowed', () => {
  const allowed = [
    'https://example.com',
    'https://example.com/path?x=1&y=2#top',
    'http://example.com/old',
    'HTTPS://EXAMPLE.COM/Caps',
    'https://www.infinitytaekwondo.com/blog',
    'https://en.wikipedia.org/wiki/Taekwondo_(disambiguation',
    'https://xn--80ak6aa92e.example/',
    'mailto:hello@example.com',
    'mailto:hello@example.com?subject=Free%20trial',
    'tel:+85512345678',
    'tel:(855)%2012%20345%20678',
    '/',
    '/blog',
    '/blog/my-post#heading',
    '/pricing?plan=gold',
    '#contents',
    '#',
  ]
  for (const href of allowed) it(href, () => assert.equal(isSafeHref(href), true))
})

describe('isSafeHref: refused', () => {
  const refused: [string, string][] = [
    ['javascript:alert(1)', 'script'],
    ['JavaScript:alert(1)', 'script in other case'],
    ['java\tscript:alert(1)', 'script with a tab inside (browsers delete it)'],
    ['java\nscript:alert(1)', 'script with a line break inside'],
    ['  javascript:alert(1)', 'script after spaces'],
    ['\u0001javascript:alert(1)', 'script after a control character'],
    ['jav&#x61;script:alert(1)', 'script written with an HTML entity'],
    ['data:text/html,<script>alert(1)</script>', 'data page'],
    ['data:image/svg+xml;base64,PHN2Zz48L3N2Zz4=', 'data picture as a link'],
    ['vbscript:msgbox(1)', 'vbscript'],
    ['file:///etc/passwd', 'file'],
    ['ftp://example.com/file', 'ftp'],
    ['blob:https://example.com/uuid', 'blob'],
    ['//evil.example', 'protocol-relative: looks like a path, goes to another website'],
    ['//evil.example/a', 'protocol-relative with a path'],
    ['/\\evil.example', 'slash then backslash: browsers read it as //'],
    ['\\\\evil.example', 'two backslashes'],
    ['/\t/evil.example', 'slash, tab, slash (the tab is deleted by browsers, leaving //)'],
    ['https://user:secret@example.com', 'name and password in the address'],
    ['https://google.com@evil.example', 'address that hides the real host'],
    ['https://', 'no host'],
    ['https:///path', 'empty host'],
    ['https:example.com', 'no slashes'],
    ['https://exa mple.com', 'space in the host'],
    ['https://example.com/a b', 'space in the path'],
    ['https://example.com/‮gpj.exe', 'right-to-left override hides the real ending'],
    ['https://example.com/​x', 'zero-width space'],
    ['example.com', 'no scheme'],
    ['www.example.com', 'no scheme'],
    ['mailto:', 'empty mailto'],
    ['mailto:a@b.c\r\nBcc: x@y.z', 'mailto with a header injected after a line break'],
    ['mailto:<script>@b.c', 'mailto with markup'],
    ['tel:not a number', 'tel with letters'],
    ['tel:javascript:alert(1)', 'tel hiding script'],
    ['', 'nothing'],
    [`https://example.com/${'a'.repeat(3000)}`, 'longer than 2048 characters'],
  ]
  for (const [href, why] of refused) it(`${JSON.stringify(href.length > 60 ? `${href.slice(0, 57)}...` : href)} (${why})`, () => assert.equal(isSafeHref(href), false))
})

describe('isInternalHref', () => {
  it('is true for a path on this website and for a #section', () => {
    for (const href of ['/', '/blog', '/blog/a#b', '#top']) assert.equal(isInternalHref(href), true, href)
  })

  it('is false for everything that leaves the website, including //host', () => {
    for (const href of ['https://example.com', 'mailto:a@b.c', 'tel:+855', '//evil.example', 'blog', '']) assert.equal(isInternalHref(href), false, href)
  })
})
