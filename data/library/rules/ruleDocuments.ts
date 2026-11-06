/**
 * Official rulebooks shown by the library's competition-rules readers.
 *
 * This is the single source for every rulebook PDF on the site: the rules readers and the
 * competition-rules library entries all read from here.
 *
 * `file` is a path inside `public/`, e.g. '/docs/world-taekwondo-kyorugi-rules-2026.pdf'.
 * Leave it undefined until the PDF has actually been added to `public/docs/`. While it is
 * undefined, the "Read PDF" and "Download PDF" buttons are hidden instead of opening a viewer
 * that shows a 404 page. `npm run check:data` fails if a listed file is missing.
 */

export type RuleDocumentId = 'kyorugi' | 'poomsae' | 'hanmadang'

export interface RuleDocument {
  id: RuleDocumentId
  title: string
  koreanTitle: string
  edition: string
  inForceDate: string
  pages: number
  /** Path inside public/ once the PDF is added there; undefined hides the PDF actions. */
  file?: string
}

export const ruleDocuments: Record<RuleDocumentId, RuleDocument> = {
  kyorugi: {
    id: 'kyorugi',
    title: 'World Taekwondo Kyorugi Competition Rules & Interpretation (2026 Edition)',
    koreanTitle: '세계태권도연맹 공인 겨루기 경기 규칙집',
    edition: 'Official WT 2026 Edition',
    inForceDate: 'In Force as of January 1, 2026',
    pages: 48,
    file: undefined, // e.g. '/docs/world-taekwondo-kyorugi-rules-2026.pdf'
  },
  poomsae: {
    id: 'poomsae',
    title: 'World Taekwondo Poomsae Competition Rules & Operational Regulations (2024 Edition)',
    koreanTitle: '세계태권도연맹 공인 품새 경기 규칙 및 운영 규정집',
    edition: 'Official WT 2024 Edition',
    inForceDate: 'In Force as of September 30, 2024',
    pages: 42,
    file: undefined, // e.g. '/docs/world-taekwondo-poomsae-rules-2024.pdf'
  },
  hanmadang: {
    id: 'hanmadang',
    title: 'World Taekwondo Hanmadang International Regulations & Breaking Standards',
    koreanTitle: '세계태권도한마당 경기 규정집',
    edition: 'Kukkiwon Hanmadang Edition',
    inForceDate: 'Annual Festival Standards',
    pages: 36,
    file: undefined, // e.g. '/docs/kukkiwon-hanmadang-regulations.pdf'
  },
}

/** File name offered when downloading, e.g. "world-taekwondo-kyorugi-rules-2026.pdf". */
export function ruleDocumentFileName(document: RuleDocument): string | undefined {
  return document.file?.split('/').pop()
}
