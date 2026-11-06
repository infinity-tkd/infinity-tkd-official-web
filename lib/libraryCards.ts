import type { LibraryItem } from '@/data/library/types'

/**
 * Reduces a full curriculum record (steps, terminology, drills, 4-language translations...)
 * to the few fields a link card needs.
 *
 * Server components that hand lists of items to client components must use this for any
 * list that is only rendered as cards: props are serialised into the page HTML, so passing
 * full records for every sibling technique inflated each technique page to ~325 KB.
 */
export function toLibraryCardStub(item: LibraryItem): LibraryItem {
  const translations = item.translations
    ? (Object.fromEntries(
        Object.entries(item.translations).map(([lang, t]) => [
          lang,
          { name: t?.name, koreanName: t?.koreanName, summary: t?.summary },
        ])
      ) as LibraryItem['translations'])
    : undefined

  return {
    id: item.id,
    slug: item.slug,
    name: item.name,
    koreanName: item.koreanName,
    romanized: item.romanized,
    category: item.category,
    difficulty: item.difficulty,
    beltLevel: item.beltLevel,
    badgeColor: item.badgeColor,
    summary: item.summary,
    image: item.image,
    steps: [],
    keyDetails: [],
    commonMistakes: [],
    ...(translations ? { translations } : {}),
  }
}
