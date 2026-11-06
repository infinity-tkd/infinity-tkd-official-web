import { beltProgression } from '@/data/belts'
import { poomsaeItems } from '@/data/library/poomsae/poomsae'
import { POOMSAE_WALKTHROUGHS } from '@/data/library/poomsae/poomsaeWalkthroughs'

/** A form named in the belt structure, linked to its library page. */
export interface BeltFormLink {
  id: string
  /** Short name, e.g. "Taegeuk 1" or "Koryo". */
  name: string
  href: string
  /** True when the form has an animated floor-pattern walkthrough. */
  hasWalkthrough: boolean
}

const shortName = (name: string) => name.replace(/\s*\(.*\)$/, '').replace(/ Poomsae$/, '')

/**
 * Library links for every form in data/belts.ts, keyed by poomsae id.
 * Call it from server components only: it reads the full poomsae dataset, which should never be
 * shipped to the browser. Pass the (small) result to client components as a prop.
 */
export function getBeltFormLinks(): Record<string, BeltFormLink> {
  const ids = new Set(beltProgression.flatMap((belt) => belt.forms))
  return Object.fromEntries(
    poomsaeItems
      .filter((item) => ids.has(item.id))
      .map((item) => [
        item.id,
        {
          id: item.id,
          name: shortName(item.name),
          href: `/library/${item.category}/${item.slug}`,
          hasWalkthrough: item.id in POOMSAE_WALKTHROUGHS,
        },
      ])
  )
}
