# Site content guide

Site content lives in three places. There is no database: changing content means changing files and deploying.

| Kind | Where | Edited with |
| --- | --- | --- |
| **Content the team edits** (blog, coaches, students, achievements, schedule, pricing, age groups and class types) | `content/` (JSON and Markdown), read by small typed modules in this folder | The content editor at `/keystatic` (see [`docs/editing-guide.md`](../docs/editing-guide.md)), or by hand |
| **Curriculum library** (poomsae, kicks, hosinsul, history, rules) | `data/library/`, typed TypeScript | Code |
| **Everything else** (courses, locations, belts, team, collaborations, navigation, interface text) | `data/*.ts`, `config/`, `data/translations/` | Code |

TypeScript catches wrong field names and types. `npm run check:data` catches the rest: duplicate ids,
broken file paths, invalid values in `content/`, picture links that cannot work, blog front matter and
mismatched walkthroughs. **`npm run build` runs it first**, so a bad content edit stops the build and
Vercel keeps the previous deployment online.

```bash
npm run check:data   # content checks (also the first step of `npm run build`)
npm run typecheck    # TypeScript (`next build` runs it too)
npm run test:unit    # fast tests: picture links, upload helpers, Markdown tables, security headers
```

## Where each page's content lives

| Page | Content |
| --- | --- |
| Home | `belts.ts` (Road to Black Belt), `content/achievements.json` (records), `locations.ts` (branches), latest posts from `content/blog/` |
| `/academy` | `academy.ts` (programs), `content/ageDivisions.json` (age groups and class formats, via `ageDivisions.ts`), `content/schedule.json` (timetable) |
| `/pricing` (the "Memberships" page) | `content/pricing.json`, `content/ageDivisions.json` |
| `/locations` | `locations.ts` |
| `/achievements` | `content/achievements.json` |
| `/community` | `content/coaches.json`, `content/students.json` |
| `/about` | `team.ts`, `collaborations.ts` |
| `/collaborations` | `collaborations.ts` (partner logos live in `public/Collaboration/`) |
| `/library/...` | `library/` (see below) |
| `/blog/...` | `content/blog/*.md` |
| Navigation, footer | `config/navigation.ts` |
| Brand, contact details, socials, SEO defaults | `config/siteSettings.ts` |
| Buttons, headings and other interface text | `translations/en.ts`, `km.ts`, `zh.ts`, `ko.ts` |

Legal pages (`/privacy`, `/terms`, `/safeguarding`, `/equality`, `/anti-doping`) keep their text in
their own `app/<page>/page.tsx`.

## How an editable content type works

Each type has four parts. Pages import the typed module exactly as they always did.

```
content/coaches.json          the data, saved by the content editor (2-space JSON, one file per type)
data/coaches.ts               typed module: reads and checks the JSON, exports `coachFaculty` and `CoachProfile`
lib/keystatic/coaches.tsx     the editor form: fields, dropdowns, labels, plain-English help
keystatic.config.tsx          lists every type in the editor's menu
```

- **Reading and checking** use `lib/content/validate.ts`: `file('content/x.json', raw).get('items').items().map(...)`.
  A wrong value stops the build with a message like
  `content/schedule.json > classes[0].day: "Funday" is not one of: Monday, Tuesday, ...`.
- **Fixed choices** (days, programmes, medals, belt colours) are listed once in `lib/content/options.ts`. The editor shows
  them as dropdowns and the module checks the saved value against the same list.
- **Ids.** A name field made with `namedItem()` also stores an ID (`{ "name": "...", "slug": "..." }`), used as `id`.
  Never change an ID once published. Lists whose ids are only React keys (schedule classes, promotions, awards)
  get ids from their position.
- **Keep to plain TypeScript types** in `data/` and `lib/content/`: `check:data` runs them with Node's type
  stripping, which rejects `enum`, `namespace` and constructor parameter properties.

**Add a field to an existing type:** add it to the interface in `data/<type>.ts`, read it in the module, add it to the
form in `lib/keystatic/<type>.tsx`, then add it to `content/<type>.json` (the editor writes it when someone saves).
**Add a whole new type:** copy a small one (`schedule`), add the JSON file, the module, the form, and one line each in
`keystatic.config.tsx`. Update the module list in `scripts/check-data.ts` only if it needs a special check.

**Static, not live.** The files are bundled into the pages at build time. A saved change appears after the site is rebuilt
(a few minutes on Vercel, one `npm run build` locally).

## Translations: three patterns

1. **Interface text** (buttons, headings, labels) lives in `translations/<language>.ts`, with the same
   keys in every language. `en.ts` is the reference; the check warns when another language is
   missing a key.
2. **Entity content** (a course, coach, branch or library entry) carries its own optional
   `translations: { km: {...}, zh: {...}, ko: {...} }` with only the fields that differ. Any field
   not translated falls back to English automatically (`lib/i18n.ts`). **Use this for all new content.**
   In `content/*.json` the editor saves translations as a list, `[{ "language": "km", "name": "..." }]`;
   the typed module turns that into the object above and leaves out blank fields, so blank means English.
3. **Large library explorers** (history, competition rules, hosinsul, kicking, poomsae) use
   `*Translations.ts` files with one full copy of the content per language, returned by
   `getLocalizedX(language)`. **Edit both the English and translated copies** when changing these.

## Curriculum library (`data/library/`)

Grouped by topic. Everything about one topic is in one folder. It stays in code: it is large, tightly linked
(walkthroughs, belts, translations) and rarely changes.

```
library/
  index.ts        combines every topic into `libraryItems` (the list behind /library pages)
  types.ts        the LibraryItem shape: required and optional fields, with comments
  categories.ts   the 9 library categories (title, Korean title, description, colours)
  poomsae/        poomsae.ts (the forms) · poomsaeTranslations.ts · poomsaeDetailedTranslations.ts
                  · poomsaeWalkthroughs.ts (animated floor-pattern geometry)
  kicking/        kickingFundamentals.ts · kickingAdvanced.ts · their translation files
  techniques/     handTechniques.ts · stances.ts · trickingAcrobatics.ts
  hosinsul/       hosinsul.ts · hosinsulCurriculum.ts (belt-by-belt syllabus) · translations
  history/        history.ts (articles) · historyTimeline.ts · *Translations.ts for the history explorer
  rules/          competitionRules.ts (entries) · competitionRulesData.ts (scoring tables)
                  · ruleDocuments.ts (rulebook PDFs) · translation files
```

**Add a library entry:** copy an existing entry in the right topic file (e.g. `techniques/stances.ts`)
and change it. `id` must be unique and `slug` lowercase-with-dashes; the page appears at
`/library/<category>/<slug>` and is added to the sitemap automatically.

**Add a rulebook PDF:** put the file in `public/docs/` and set its `file` in `rules/ruleDocuments.ts`.
Until then the PDF buttons stay hidden instead of showing a broken viewer.

**Add a poomsae walkthrough:** add an entry to `poomsae/poomsaeWalkthroughs.ts` with the same number
of steps as the form's step texts, and keep `verified: false` until a coach has checked it.

## Images and files

An image can be a file in `public/` or a link. **Editors paste whatever link they have**, and
`lib/imageUrl.ts` (used by `components/SafeImage.tsx` and `components/ui/OptimizedImage.tsx`) works out
the picture:

- **Files on this site**: `public/` paths start with `/`, e.g. `'/Collaboration/Kukkiwon.png'` (case-sensitive on
  the live server). Pictures uploaded in the editor go to `public/uploads/<area>/`, shrunk to under 1 MB.
  The check fails if a referenced local file is missing, and warns about uploads nothing uses.
- **Share links** become the picture itself: Google Drive (`file/d/<id>/view`, `open?id=`, `uc?id=`), Dropbox
  (`?dl=0`), Imgur pages, OneDrive, YouTube video links (their thumbnail). Facebook, Instagram, folders, albums and web
  pages cannot work: the editor says so, and `check:data` fails the build if one is saved.
- **Where it is served from**: hosts in `config/imageHosts.mjs` (Unsplash, YouTube thumbnails, Google Drive and
  Photos, Dropbox, Imgur, OneDrive) go through Vercel's image optimizer: fetched once, resized and cached for a week.
  That list is also `images.remotePatterns`. **Never add a wildcard host**: it would make the site an open image proxy.
  Any other `https` host is shown straight from its own host with no referrer.
- **Google Drive** files must be shared as "Anyone with the link". If one address fails, SafeImage tries the next
  (resized copy, then the picture's own host), and finally the fallback photo.
- **Content-Security-Policy**: `img-src` allows any `https` address (see the comment in `config/siteSettings.ts` for the
  trade-off); scripts and `connect-src` stay closed to other hosts.

## Rules of thumb

- `id`: unique, lowercase-with-dashes, never changed once published (other data and URLs point to it).
- Dates in blog front matter: `YYYY-MM-DD`. Quote any front-matter value that contains `:`.
- Blog files saved by the editor use the same front matter (fields in `lib/keystatic/blog.tsx`, listed in `BLOG_FIELDS`
  in `lib/blogParse.ts`); the editor refuses a post with a field it does not know. Tables it saves are Markdoc tags,
  which `lib/markdocTables.ts` turns back into Markdown tables. The other blocks it can insert (callout, YouTube video,
  button, pull quote, question and answer) are Markdoc tags too, read by `lib/blogBlocks.ts` and shown by
  `components/blog/PostBody.tsx`. `npm run check:data` stops the build for a block that cannot work.
- Blog security (JavaScript front matter refused, link rules, the `/uploads` policy...): `docs/blog-security.md`.
- Every person shown on the site (students, promotions, award winners) needs `permissionToPublish` ticked in the editor
  (a parent's or guardian's for a child). The build stops on an entry without it.
- Use a database only for data that users create: form submissions, bookings, memberships, payments.
