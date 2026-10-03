/**
 * ==============================================================================
 * CURRICULUM LIBRARY - MASTER BARREL EXPORT & COMBINER
 * ==============================================================================
 * Seamlessly merges all modular discipline datasets:
 *   - poomsae.ts
 *   - kickingFundamentals.ts
 *   - kickingAdvanced.ts
 *   - handTechniques.ts
 *   - stances.ts
 *   - trickingAcrobatics.ts
 *   - history.ts
 *   - competitionRules.ts
 *   - hosinsul.ts
 * ==============================================================================
 */

export * from './types'
export * from './categories'
export * from './poomsae'
export * from './kickingFundamentals'
export * from './kickingAdvanced'
export * from './handTechniques'
export * from './stances'
export * from './trickingAcrobatics'
export * from './history'
export * from './competitionRules'
export * from './hosinsul'
export * from './hosinsulCurriculum'

import { poomsaeItems } from './poomsae'
import { kickingFundamentalsItems } from './kickingFundamentals'
import { kickingAdvancedItems } from './kickingAdvanced'
import { handTechniquesItems } from './handTechniques'
import { stancesItems } from './stances'
import { trickingAcrobaticsItems } from './trickingAcrobatics'
import { historyItems } from './history'
import { competitionRulesItems } from './competitionRules'
import { hosinsulItems } from './hosinsul'
import type { LibraryItem } from './types'

export const libraryItems: LibraryItem[] = [
  ...poomsaeItems,
  ...kickingFundamentalsItems,
  ...kickingAdvancedItems,
  ...handTechniquesItems,
  ...stancesItems,
  ...trickingAcrobaticsItems,
  ...historyItems,
  ...competitionRulesItems,
  ...hosinsulItems,
]
