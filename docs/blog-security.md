# Blog security review

What was checked in the blog system, what was found, what was fixed, and what to do to keep it safe. Written for the
owners first (the plain-English parts) and for developers second (the file and test names).

## The short version

- **Who can change a post is who can write to the GitHub repository.** The content editor signs in with GitHub, and a
  post is a file in the repository. So the strongest protection is not in the code: it is a short list of people with
  write access, and two-step login on every one of those GitHub accounts. See "What you should do" below.
- Nine problems were found in the way posts are read, shown and served. All nine are fixed and covered by tests.
  None was a way for a visitor to break in. Each was a way for a **bad or careless post file** (or someone who got into
  an editor's GitHub account) to hurt the website or its visitors, so they are worth closing.
- Several other things were checked and are fine as they are (listed below).

## What was found and fixed

| # | Problem | Why it mattered | The fix |
|---|---------|-----------------|---------|
| 1 | A post whose front matter starts with `---js` was **run as a program** when the website was built (the reader, `gray-matter`, evaluates it). | Code from a post file would run on the build machine, which holds the editor's GitHub secrets. | The reader refuses `---js` and `---javascript` and never runs them. Only YAML is read. |
| 2 | A pattern that finds the editor's tables got **slower and slower** when a post had many `{% table %}` lines that were never closed: 96 KB took 0.8 s, a 1 MB file about 90 s. | A broken or hostile post could keep the build busy for minutes (and `npm run dev` with it). | Posts are read one line at a time, so the time grows with the length of the post and no faster. Posts over 300 KB are skipped. |
| 3 | Links written as `//other-site.com` were accepted as if they were paths on this website. | A link that looks like it stays on the site but goes somewhere else is a phishing trick. | New link rules (`lib/safeHref.ts`): only `https://`, `http://`, `mailto:`, `tel:`, a path starting with one `/`, or `#section`. Names or passwords in the address, hidden characters and look-alike tricks are refused. Refused links show as plain text. |
| 4 | A picture in `public/uploads` that is really an SVG or HTML file could **run scripts** if someone opened its address directly, on the website's own address. | Scripts on the website's own address are the dangerous kind. (In an `<img>` a browser never runs anything, so normal pages were never affected.) | Every file under `/uploads` is sent with a policy that forbids scripts and sandboxes the page (`config/uploadsPolicy.mjs`), also for the file types the proxy handles. `check:data` refuses anything in `public/uploads` that is not a picture, and warns about SVG. |
| 5 | The link-preview picture (`og:image`) and the structured data took the cover **exactly as typed**. | A cover that cannot work (a Facebook link, a file on a computer) or a picture embedded in the text would put junk, or a whole file, into every page's `<head>`. | `metadataImageUrl()` gives a direct https address or nothing, and the website's own image is used instead. |
| 6 | One stray control character in a post title (it sneaks in when text is copied from a PDF or Word) made the **RSS feed invalid XML**. | Every feed reader and Google then refuse the whole feed, not just that post. | `lib/xml.ts` removes characters XML cannot hold before escaping. |
| 7 | A heading called "Main content" took the id the skip-link points at. | It breaks the "Skip to content" link for keyboard and screen-reader users, and lets a post take over ids the page relies on. | `headingId()` moves a heading out of the way (`section-main-content`) when its name would clash. |
| 8 | The pattern that reads headings could be slow on a very long line. | Same as 2, on a smaller scale. | A simpler pattern, and heading lines over 400 characters are not read. |
| 9 | Pictures added with the editor's own **Image button** inside a post kept their original file name. | Two photos called `photo.jpg` in two posts would silently **replace** each other. | The file name is made safe and gets a random ending (`insertedPictureName()` in `lib/keystatic/prepareUpload.ts`). |

Two small extras came out of the review: a link like `[Call us](tel:+855...)` in a post never worked (the reader drops
`tel:` links before the page sees them), and now it does; and a picture's **title** (the "Caption" box in the editor's
Image dialog) now shows as a small caption under the picture.

## What was checked and is fine

- **Raw HTML in a post is never shown as HTML.** `<script>`, `<img onerror=...>`, `<iframe>` and the like appear as plain
  text. The reader has no HTML support switched on. (Test: `tests/e2e/blog-security.logic.spec.tsx`.)
- **`javascript:`, `data:`, `vbscript:` and `file:` links** are dropped by the reader and again by our own rules.
- **Pictures** go through `SafeImage`, which accepts only addresses on this website or https addresses it understands;
  a picture from a host that is not on the allow-list is loaded without sending a referrer and never through the image
  optimizer (so the site cannot be used as an open image proxy).
- **Structured data (JSON-LD)** escapes `<`, so a post title can never close the `<script>` tag it sits in.
- **Share buttons** encode the address and title they send out. The page address comes from the site settings, never from
  the visitor's request.
- **A post's address (slug) is never used to build a file path.** Posts are found by listing the folder, and the address
  in the URL is only compared with that list.
- **Drafts** are left out of production builds everywhere: pages, the list, categories, the sitemap, the feed.
- **YAML tricks**: a "billion laughs" file (anchors and aliases that expand without end) is harmless with this reader,
  because it shares the repeated parts instead of copying them. A key named `__proto__` cannot change what other objects
  inherit. A front matter nested far too deep gives an error message, not a crash. (Tests: `tests/unit/blogParse.test.ts`.)
- **External links** open with `rel="noopener noreferrer"`.
- **The editor itself** (`/keystatic`) is closed on the live site until its four GitHub settings exist, cannot be framed
  by another website, and is not in the sitemap or search results. See `docs/editor-setup.md`.

## Blocks and options added after the first review

The same rules were applied to everything the editor can add to a post since:

- **Video.** Only a YouTube link is accepted (`youtubeVideoId()` in `lib/imageUrl.ts`); anything else shows nothing and
  stops the build. The page shows the video's picture, and YouTube's player (from `youtube-nocookie.com`, which the
  page policy already allows) is loaded only when the visitor presses play. Before that, the only request to YouTube is
  for the small picture.
- **Button.** Its address goes through the same link rules as every link in a post (`lib/safeHref.ts`). A button that
  fails them shows its label as plain text, and `npm run check:data` stops the build, so it cannot go live.
- **Callout, pull quote, question and answer.** Their text is Markdown rendered by the same reader as the rest of the
  post (no HTML); their headings, sources and questions are plain text.
- **Reading the blocks** (`lib/blogBlocks.ts`) takes time in proportion to the length of the post however it is
  written: thousands of unclosed tags are a test case. A tag the website does not know, or one that is never closed,
  stays visible as text and stops the build, so a half-written block never reaches visitors.
- **Hide from the blog list** keeps a post out of lists, the feed and the sitemap and asks search engines to skip it,
  but **it is not private**: the file is in the GitHub repository and the page opens for anyone with the link.
- **Title, description and picture for sharing** are read as plain text; the picture goes through `metadataImageUrl()`
  like the cover.

## Accepted trade-offs

- **Pictures may come from any https address.** Editors paste links from Google Drive, Dropbox and Imgur, so the
  page policy allows `https:` pictures. The cost: the website that hosts a picture sees the visitor's address when the
  page loads (no referrer is sent, so it does not learn which page). A host can also swap a picture after publishing.
  Pictures that matter should be uploaded, not linked. (The reasoning is in `config/siteSettings.ts`.)
- **Whoever can write to the repository can still change the website's code**, not only its posts. The editor keeps
  editors inside the content folders, but GitHub does not. That is why the list of people matters.
- **Pictures added with the editor's Image button are not shrunk** (the picture fields are). `npm run check:data`
  warns above 1 MB and stops the build above 3 MB.

## What you should do

1. Give GitHub write access only to people who edit the website, and review the list now and then. Remove people who left.
2. Turn on two-step login (an authenticator app or a security key) for every GitHub account on that list.
3. Do not share one GitHub login between people. Each person signs in to the editor with their own account.
4. Do not paste text from an untrusted website into a post. It is shown safely, but it may contain links you did not mean to publish.
5. If you suspect an account was taken over: remove its access in GitHub, change `KEYSTATIC_SECRET` in Vercel, redeploy,
   and look at the recent commits of `content/` and `public/uploads/`.

## For developers

- Reading one post: `lib/blogParse.ts` (no file access; `lib/blog.ts` only finds the files). `npm run check:data` uses the
  same reader, so "passes the check" means "shows up on the website".
- Showing it: `components/blog/MarkdownContent.tsx`. Never add `rehype-raw`, `dangerouslySetInnerHTML` or a link or picture
  that skips `isSafeHref` / `SafeImage`.
- Serving it: `config/uploadsPolicy.mjs`, `next.config.mjs` and `proxy.ts`.
- A new front matter field: read it as text only (`nonEmptyString`), add it to `BLOG_FIELDS` in `scripts/check-data.ts`
  and to the editor's schema, and never put it into the page as HTML.
- A new block: add it to `BLOCKS` in `lib/blogBlocks.ts` (name, kind, options), to the editor in `lib/keystatic/blocks.tsx`
  and to `components/blog/PostBody.tsx`. `tests/e2e/blog-schema.logic.spec.ts` fails until the editor and the website agree.
  Treat every option as text, check links with `isSafeHref`, and never insert an option as HTML.
- Tests: `npm run test:unit` (`blogParse`, `blogBlocks`, `blogQuery`, `safeHref`, `xml`, `markdocTables`, `imageUrl`,
  `prepareUpload`, `security`) and `npx playwright test tests/e2e/blog-security.logic.spec.tsx tests/e2e/blog-blocks.logic.spec.tsx tests/e2e/blog-schema.logic.spec.ts --project=e2e`.
- Found something? Add a test next to the existing ones, then fix it.
