# Infinity Taekwondo Web Platform (Infinity TKD 2.0)

Official website and digital martial-arts encyclopedia for **Infinity Taekwondo** (태권도 INFINITY), Phnom Penh. Built with **Next.js 16 (App Router, Turbopack)**, **React 19**, **TypeScript** and **Tailwind CSS 3**, in four languages (**EN, KM, ZH, KO**) with dark/light themes.

---

## Technology

| Layer | Technology | Notes |
| :--- | :--- | :--- |
| Framework | Next.js 16 (App Router) | 130+ statically pre-rendered routes; three small API routes for forms |
| Language | TypeScript (strict) | Non-English UI dictionaries are type-checked against English |
| Styling | Tailwind CSS 3.4 | Tokens in `tailwind.config.ts` + `app/globals.css` |
| Fonts | `next/font` (self-hosted) | Montserrat + Kantumruy Pro; Pretendard (Korean) loads only when Korean is selected |
| Theme | `next-themes` | System / dark / light, no hydration flash |
| i18n | Client-side dictionaries | English ships with the shell; km/zh/ko are code-split and loaded on demand |
| Blog | Markdown files + `react-markdown` | No database; see [Blog](#blog) |
| Icons | `lucide-react` | |

---

## Quick start

Requires **Node.js 20.9+** (required by Next.js 16).

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npx tsc --noEmit     # typecheck
npm run lint         # ESLint (flat config)
npm run build        # production build (also typechecks)
npm run start        # serve the production build
```

> **Tip:** this project lives inside OneDrive. OneDrive syncing `node_modules` and `.next` can make installs, lint and builds very slow. Prefer keeping the repo outside OneDrive, or exclude those two folders from sync.

---

## Project structure

```
app/                     Routes (App Router)
  page.tsx               Home (server) -> sections in components/home
  blog/                  Blog index, article, category archive, RSS (feed.xml)
  library/               Curriculum encyclopedia (poomsae, kicking, hosinsul, ...)
  api/                   contact, join-team, incubator form endpoints
  sitemap.ts, robots.ts  SEO
components/
  ui/                    Design-system primitives (Button, Card, Badge, PageHero, SectionHeader, CtaBanner ...)
  home/                  Homepage sections
  blog/                  PostCard, MarkdownContent, TableOfContents, ShareButtons ...
  library/               Interactive curriculum explorers
  Navbar.tsx, Footer.tsx, MobileBottomNav.tsx
config/
  navigation.ts          ONE source for the header menus, mobile drawer and footer links
  siteSettings.ts        Brand, SEO, contact details, social links, security headers
content/blog/            Blog posts (Markdown)
context/                 Language + scroll-nav providers
data/                    Page content as typed TypeScript (courses, pricing, locations, coaches, library ...)
  translations/          UI strings: en.ts (source of truth), km.ts, zh.ts, ko.ts
hooks/, lib/             Hooks and server/client utilities
proxy.ts                 Request filtering + security headers (Next.js 16 "proxy", formerly middleware)
```

---

## Design system

The look is defined in three places, and pages should consume them rather than re-typing class strings:

1. **`tailwind.config.ts`**: brand palette (`brand-red` `#EF2F38`, division accents), shadows, animation.
2. **`app/globals.css`**: CSS variables, typography per language, scrollbars, glass surfaces, reduced-motion handling.
3. **`components/ui/*`**: the shared primitives.

Tokens (defined in `tailwind.config.ts`, which overrides Tailwind's defaults so every page follows them):

| Token | Value | Use |
| :--- | :--- | :--- |
| `rounded-2xl` / `rounded-3xl` | 10px | Cards, panels, modals, images, banners |
| `rounded-xl` | 8px | Buttons, inputs, dropdown rows, icon tiles, inner boxes |
| `rounded-lg` / `rounded-md` / `rounded` | 7px | Badges, chips, tags |
| `rounded-sm` | 2px | Micro graphics only (belt stripes, 6px markers) |
| `rounded-full` | circle | Avatars, dots, progress rings |
| `text-9xl` / `8xl` / `7xl` / `6xl` / `5xl` | 80 / 64 / 56 / 48 / 40px | Home hero / page title / section title (desktop) |
| `font-black` | 800 | Headings (bold but not shouty) |
| Section rhythm | `py-16 sm:py-20 lg:py-24` | 64 / 80 / 96px between sections |
| Header / tab bar | 64px / 56px | Fixed glass bars; content clears them with `pt-20+` |

Do not use arbitrary radii (`rounded-[14px]`) or new display sizes; extend the tokens instead.

Small text uses roles from `app/globals.css` instead of hand-picked 9-11px sizes (11px is the floor):

| Class | Spec | Use |
| :--- | :--- | :--- |
| `type-kicker` | 11px, uppercase, semibold, 0.14em | One label above a heading (max one per block) |
| `type-label` | 12px, uppercase, semibold | Tabs, filter pills, small buttons |
| `type-meta` | 12px, sentence case, medium, muted | Counts, dates, belt levels |
| `type-body-sm` | 13px, regular, relaxed | Card descriptions and dense copy |
| `type-hangul` | 12px, regular, no tracking | Korean / romanized subtitles (never monospace) |

Tags and chips are sentence case (`text-xs font-medium`); uppercase is reserved for headings, kickers and status badges.

Conventions used across the shell, home page and blog:

- **Container:** `container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` (navbar, footer and page content share the same edges).
- **Headings:** `font-black uppercase tracking-tight`, with one accent word in `text-brand-red`.
- **Text over photos:** always add a bottom gradient scrim (`from-black via-black/75 to-transparent`).
- **Motion:** 150-400ms, `ease-out-expo`, transform/opacity only; entrance keyframes animate the `translate` property so they never override transform-based positioning. Everything respects `prefers-reduced-motion`.
- **Buttons / links styled as buttons:** `<Button>` or `buttonStyles({ variant, size })` from `components/ui/Button`.
- **Page headers:** `<PageHero>`; section headers: `<SectionHeader>`; closing call-to-action: `<CtaBanner>`.
- **Icon chips:** brand-red tint (no per-item rainbow colours).

---

## Content: where things live and how to change them

| What | Where | How to edit |
| :--- | :--- | :--- |
| Navigation menus + footer links | `config/navigation.ts` | Edit one list; menus and footer update together |
| Brand, SEO defaults, phone/email, social links | `config/siteSettings.ts` | Edit values |
| Courses, pricing, branches, coaches, achievements, schedule | `data/*.ts` | Edit typed records (each file is documented in `data/index.ts`) |
| Curriculum encyclopedia (poomsae, kicks, hosinsul ...) | `data/library/*` | Edit typed records |
| UI text (buttons, headings, labels) | `data/translations/{en,km,zh,ko}.ts` | Add the key to `en.ts` first; the other files fail to compile if a key is missing |
| Blog articles | `content/blog/*.md` | Add/edit a Markdown file |
| Delivery of form submissions | Environment variables | See `.env.example` |

### Blog

Each post is `content/blog/<slug>.md` (the file name is the URL slug: lowercase letters, numbers, hyphens):

```md
---
title: "Your title"                  # quote it if it contains a colon (:)
description: One or two sentences for cards and search results.
date: 2026-11-20                     # YYYY-MM-DD
author: Infinity Taekwondo Coaching Team
category: Training
tags: [poomsae, kids]
cover: /blog/my-photo.jpg            # optional; put images in public/blog/ or use an https URL
coverAlt: Describe the photo
featured: false                      # true pins it as the lead story on /blog
draft: false                         # true hides it in production (visible in `npm run dev`)
---

Your article in Markdown. Use `##` and `###` headings; they build the table of contents.
```

Posts automatically appear on `/blog`, in their category archive, on the homepage teaser, in `sitemap.xml` and in the RSS feed (`/blog/feed.xml`). A post with invalid front matter is skipped and the reason is printed in the terminal/build log. Publishing = commit + deploy.

`lib/blog.ts` is the only file that knows posts come from Markdown. To move to a CMS or database later, re-implement `loadAllPosts()` there; pages and components do not change.

---

## Forms and delivery

The contact form, coaching application and student-incubator pitch POST to `/api/contact`, `/api/join-team` and `/api/incubator`. Each request is origin-checked, rate-limited (5 per minute per IP, per instance), honeypot-protected, sanitised, then delivered by `lib/notify.ts` to Telegram or a webhook. **Configure at least one channel in production** (see `.env.example`); otherwise visitors are shown a message to contact the academy by WhatsApp/phone.

---

## Performance notes

- Fonts are self-hosted via `next/font`; there are no render-blocking third-party stylesheets.
- Hero and card imagery uses `next/image` (responsive sizes, WebP/AVIF) via `components/ui/OptimizedImage`.
- Only the English dictionary is in the base bundle; other languages are code-split.
- Server components pass client components only what they render (`lib/libraryCards.ts` trims curriculum records to card fields).
- Scroll-driven UI keeps no per-frame React state (`hooks/useScrollNav.ts`).
- Largest remaining cost: `/library` and technique pages import the full curriculum datasets into the client bundle. See "Known limitations".

---

## Security

Headers and the Content-Security-Policy are applied by `proxy.ts` (values from `config/siteSettings.ts`) and, for static assets, `next.config.mjs`. Keep the two lists consistent when you change either. `'unsafe-eval'` is only allowed in development. Form endpoints reject cross-site requests, and `proxy.ts` blocks common scanner paths and user agents.

---

## Known limitations / next steps

- **Language is client-side.** Server HTML is always English and language switching doesn't change the URL, so non-English text isn't indexable. Real SEO per language needs locale routes (`/km/...`) or domain-per-language.
- **Library bundle size.** The curriculum data (several MB of TypeScript, including translations) is imported by client components. Moving the data behind server components or JSON routes would cut `/library` and technique pages substantially.
- **Rate limiting is per server instance.** Use a shared store (e.g. Upstash Redis) if you need a hard global limit.
- **Pages other than the shell, home and blog still inline their Tailwind classes.** They already follow the same radii/spacing conventions; migrate them to the `components/ui` primitives page by page.

---

## License

Copyright © 2026 Infinity Taekwondo. All rights reserved. Official curriculum materials are aligned with **Kukkiwon** and **World Taekwondo (WT)** standards.
