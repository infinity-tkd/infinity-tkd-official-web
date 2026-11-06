# Site content guide

All site content lives in typed TypeScript files in this folder, plus Markdown blog posts in
`content/blog/`. There is no database: editing a file and deploying is how content changes.
TypeScript catches wrong field names and types. `npm run check:data` catches the rest:
duplicate ids, broken file paths, invalid blog front matter and mismatched walkthroughs.

```bash
npm run check:data   # run after every content edit, before deploying
```

## Where each page's content lives

| Page | Data file(s) |
| --- | --- |
| Home | `belts.ts` (Road to Black Belt), `achievements.ts` (records), `locations.ts` (branches), latest posts from `content/blog/` |
| `/academy` | `academy.ts` (programs), `ageDivisions.ts` (age groups and class formats), `schedule.ts` (timetable) |
| `/pricing` | `pricing.ts`, `ageDivisions.ts` |
| `/locations` | `locations.ts` |
| `/achievements` | `achievements.ts` |
| `/community` | `coaches.ts`, `students.ts` |
| `/about` | `team.ts`, `collaborations.ts` |
| `/collaborations` | `collaborations.ts` (partner logos live in `public/Collaboration/`) |
| `/library/...` | `library/` (see below) |
| `/blog/...` | `content/blog/*.md` |
| Navigation, footer | `config/navigation.ts` |
| Brand, contact details, socials, SEO defaults | `config/siteSettings.ts` |
| Buttons, headings and other interface text | `translations/en.ts`, `km.ts`, `zh.ts`, `ko.ts` |

Legal pages (`/privacy`, `/terms`, `/safeguarding`, `/equality`, `/anti-doping`) keep their text in
their own `app/<page>/page.tsx`.

## Curriculum library (`data/library/`)

Grouped by topic. Everything about one topic is in one folder.

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

## Translations: three patterns

1. **Interface text** (buttons, headings, labels) lives in `translations/<language>.ts`, with the same
   keys in every language. `en.ts` is the reference; the check warns when another language is
   missing a key.
2. **Entity content** (a course, coach, branch or library entry) carries its own optional
   `translations: { km: {...}, zh: {...}, ko: {...} }` with only the fields that differ. Any field
   not translated falls back to English automatically (`lib/i18n.ts`). **Use this for all new content.**
3. **Large library explorers** (history, competition rules, hosinsul, kicking, poomsae) use
   `*Translations.ts` files with one full copy of the content per language, returned by
   `getLocalizedX(language)`. **Edit both the English and translated copies** when changing these.

## Images and files

- Local files go in `public/` and are referenced from `/`, e.g. `'/Collaboration/Kukkiwon.png'`
  (paths are case-sensitive on the live server). The check fails if a referenced local file is missing.
- External images must come from a host allowed in `next.config.mjs` → `images.remotePatterns`
  (currently Unsplash and YouTube thumbnails).

## Rules of thumb

- `id`: unique, lowercase-with-dashes, never changed once published (other data and URLs point to it).
- Dates in blog front matter: `YYYY-MM-DD`. Quote any front-matter value that contains `:`.
- Keep content in these files. Move to a hosted CMS (Keystatic, Sanity or Decap) only when
  non-developers need to publish. Use a database only for data that users create: form
  submissions, bookings, memberships, payments.
