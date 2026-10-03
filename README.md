# Infinity Taekwondo Web Platform (Infinity TKD 2.0)

A modern, high-performance web platform and digital martial arts encyclopedia for **Infinity Taekwondo** (태권도 INFINITY). Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and fully compliant with **WCAG 2.2 AA Accessibility** standards across mobile, tablet, and desktop viewports.

---

## Architecture & Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14** (App Router) | Static site generation (SSG) for 111+ pre-rendered routes, Suspense boundaries, metadata API |
| **Language** | **TypeScript 5.7** (Strict Mode) | End-to-end type safety across curriculums, competition rules, and athlete records |
| **Styling** | **Tailwind CSS 3.4** | Utility-first responsive design, custom keyframe animations, dark/light theme variables |
| **Typography** | **Pretendard & Montserrat** | Multi-script typography fallback pipeline (Latin, Khmer Kantumruy Pro, Chinese Noto Sans SC, Korean Hangul) |
| **Theme System** | **`next-themes`** | System/Dark/Light theme toggle with zero hydration mismatch and CSS custom properties |
| **Error Resilience**| **`SafeGrid` Error Boundary** | Container & item-level error boundaries with auto-fallback, retry capabilities, and telemetry logging |
| **Internationalization** | **Multi-Language Engine** | Instant client-side localization across 4 languages (**EN**, **KM**, **ZH**, **KO**) |
| **Component Primitives** | **`@headlessui/react` & Lucide** | Accessible dialogs, drawers, disclosure panels, and high-precision SVG icons |

---

## Core Systems & Curriculum Engines

### 1. Hosinsul (호신술 • Practical Self-Defense) Master Explorer
Located at `/library/hosinsul`, this interactive technical dossier covers the complete 8-pillar self-defense curriculum:
- **Belt-by-Belt Progression**:
  - **White Belt (10th & 9th Geup)**: Reactionary gap maintenance, wrist escapes (*Sonmok Ppaegi*), helmet cover (*Kobu Makgi*), palm heel strike (*Batangson Teok Chigi*).
  - **Yellow Belt (8th & 7th Geup)**: Two-on-one wrist escapes, outside wedge counters, thumb-strip joint locks.
  - **Green Belt (6th & 5th Geup)**: Lapel grab releases (*Otkit Ppaegi*), collar tie neutralization, straight armbar takedown (*Pal-kkeokgi*).
  - **Blue Belt (4th & 3rd Geup)**: Rear choke defense (*Mokjorigi Bang-eo*), shoulder lock framing, hip throws (*O-goshi*).
  - **Red Belt (2nd & 1st Geup)**: Bear hug escapes (*Po-ok Bang-eo*), rotational leg sweeps, guard recovery.
  - **1st Dan Black Belt (Il Dan)**: Bludgeon & stick disarms (*Mongdung-i Bang-eo*), 2-on-1 weapon arm trapping.
  - **2nd Dan Black Belt (I Dan)**: Edged weapon defense (*Kal Bang-eo*), angle-of-attack intercept lines, femoral cut counters.
  - **3rd Dan Black Belt (Sam Dan)**: Multi-attacker crowd navigation, bottleneck zoning, legal defense escalation matrix.
- **Interactive Frameworks**:
  - **Self-Defense Legal Escalation Matrix**: Proportionality, de-escalation, reasonable force justification.
  - **Hard vs. Soft Principle**: Hard counters against soft grabs, circular soft deflections against rigid ballistic attacks.
  - **Vital Points Map (Geupso)**: In-depth anatomical targets (trigeminal nerve, carotid sinus, solar plexus, common peroneal nerve).

### 2. Kukkiwon Official Poomsae Encyclopedia
Located at `/library/poomsae`:
- **Taegeuk 1–8 Jang**: Complete color belt forms with line-by-line choreography, stance transitions, and philosophical trigrams.
- **Yudanja 1–9 Dan**: Full Black Belt master forms:
  1. **Koryo (고려)** — 1st Dan
  2. **Keumgang (금강)** — 2nd Dan
  3. **Taebaek (태백)** — 3rd Dan
  4. **Pyongwon (평원)** — 4th Dan
  5. **Sipjin (십진)** — 5th Dan
  6. **Jitae (지태)** — 6th Dan
  7. **Cheonkwon (천권)** — 7th Dan
  8. **Hansu (한수)** — 8th Dan
  9. **Ilyo (일여)** — 9th Dan
- **WT Competition Scoring Simulator**:
  - Real-time technical score (4.0 base with 0.1 minor and 0.3 major deduction buttons).
  - Presentation score (6.0 base for speed, power, rhythm, balance).
  - WT penalty calculations (Gam-jeom).

### 3. Cognitive Neuroscience & Brain Architecture
Located at `/about` and powered by `components/InfinityBrainAnimation.tsx`:
- Interactive neural faculty mapping (Prefrontal Cortex, Motor Cortex, Cerebellum, Amygdala/Limbic System).
- Millisecond-precision neural reflex benchmark measuring motor response latency under tournament-grade visual cues with false-start detection.

### 4. Resilient `SafeGrid` Component Engine
Located at `components/SafeGrid.tsx`:
- **Item-Level Error Isolation**: Prevents a single malformed data record from unmounting sibling cards or crashing the route.
- **Automatic Fallback UI**: Displays contextual error alerts with live retry buttons and diagnostic error information.
- **Skeleton Shimmer Loading**: Built-in suspense skeleton states while asynchronous data loads.
- **Telemetry Logger**: Automated telemetry hook logging exceptions to monitoring consoles.

---

## Design System & Accessibility (WCAG 2.2 AA)

1. **Contrast Compliance**:
   - Universal light mode contrast guarantees minimum 4.5:1 for body copy (`text-zinc-600` / `#52525B` at 5.74:1) and 3:1 for large display elements.
   - High-contrast brand red accents (`#EF2F38`) paired with legible background surfaces.
2. **Touch Target Size**:
   - Every interactive control (buttons, search inputs, theme toggle, language switcher, modal close buttons) adheres to minimum `44px x 44px` touch bounding boxes (`min-h-[44px]` / `min-w-[44px]`).
3. **iOS Safari Auto-Zoom Prevention**:
   - Form and search inputs use `text-base sm:text-xs` to satisfy Safari's 16px minimum focus threshold, eliminating jarring automatic viewport zooming.
4. **Keyboard & Screen Reader Navigation**:
   - Accessible skip link (`#main-content`) for instant keyboard focus bypass.
   - Full keyboard accessibility (`aria-expanded`, `aria-haspopup`, `onFocus`, `onBlur`) on desktop dropdown navigation menus.
   - Accessible modal dialogs with `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, Escape key dismiss listeners, and background scroll locking.
5. **Safe Area Insets**:
   - Full support for `env(safe-area-inset-bottom)` and `env(safe-area-inset-top)` on modern iPhone home indicators and notch/island displays.

---

## Project Structure

```
├── app/
│   ├── about/             # Dojang history, philosophy & cognitive science
│   ├── academy/           # Training courses, weekly schedule & age divisions
│   ├── achievements/      # Tournament medal records & student competitor wall
│   ├── collaborations/    # School partnerships & university initiatives
│   ├── community/         # Coach faculty profiles & student spotlights
│   ├── contact/           # Trial class booking & location inquiry form
│   ├── incubator/         # Cadet leadership & martial arts research grants
│   ├── join-team/         # Coaching staff application & internship form
│   ├── library/           # 9-discipline martial arts curriculum encyclopedia
│   │   ├── advanced-kicking/
│   │   ├── competition-rules/
│   │   ├── freestyle-poomsae/
│   │   ├── history/
│   │   ├── hosinsul/      # Complete 8-pillar self-defense syllabus
│   │   ├── kicking/
│   │   ├── poomsae/       # Taegeuk 1-8 & Yudanja 1-9 master poomsae
│   │   ├── poomsae-rules/
│   │   └── sparring/
│   ├── locations/         # Branch dojangs, GPS coordinates & facilities
│   ├── pricing/           # Tuition tiers, family plans & private coaching
│   ├── error.tsx          # Root 500 runtime error boundary
│   ├── loading.tsx        # Branded suspense fallback with animated logo
│   ├── not-found.tsx      # Branded 404 page
│   ├── layout.tsx         # Root layout with skip link, navbars, and footer
│   └── page.tsx           # Home landing page with bento grid & counters
├── components/
│   ├── library/           # Discipline-specific interactive explorer components
│   ├── ErrorScreen.tsx    # Multilingual status screen for error codes
│   ├── InfinityLogo.tsx   # Vector symbol, seal, and wordmark brand assets
│   ├── MobileBottomNav.tsx# Native mobile bottom tab navigation bar
│   ├── Navbar.tsx         # Desktop mega-menu & mobile drawer navigation
│   ├── SafeGrid.tsx       # Resilient item-level error boundary container
│   ├── ThemeToggle.tsx    # Dark/Light theme switcher
│   └── ...
├── context/
│   └── LanguageContext.tsx# 4-language i18n translation context provider
├── data/                  # Strongly typed curriculum datasets
├── next.config.mjs        # Production Next.js config & Content-Security-Policy
└── tailwind.config.ts     # Brand palette, border radii (14px), animations
```

---

## Quick Start & Build

### Prerequisites
- **Node.js**: v18.17.0 or higher
- **npm**: v9.0.0 or higher

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Production Compilation & Verification
```bash
# Type check without emitting files
npx tsc --noEmit

# Compile production bundle (111 pre-rendered static routes)
npm run build

# Launch production server
npm run start
```

---

## Security Configuration

- **Content Security Policy (CSP)**:
  - Enforces strict origins for styles, webfonts (`fonts.googleapis.com`, `cdn.jsdelivr.net`), images (`images.unsplash.com`), and media.
- **HTTP Security Headers**:
  - `X-Frame-Options: DENY` (anti-clickjacking)
  - `X-Content-Type-Options: nosniff` (anti-MIME sniffing)
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## License

Copyright © 2026 Infinity Taekwondo. All rights reserved.
Official curriculum materials aligned with **Kukkiwon (World Taekwondo Headquarters)** and **World Taekwondo (WT)** standards.
