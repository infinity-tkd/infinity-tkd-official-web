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
export * from './poomsae/poomsae'
export * from './kicking/kickingFundamentals'
export * from './kicking/kickingAdvanced'
export * from './techniques/handTechniques'
export * from './techniques/stances'
export * from './techniques/trickingAcrobatics'
export * from './history/history'
export * from './rules/competitionRules'
export * from './hosinsul/hosinsul'
export * from './hosinsul/hosinsulCurriculum'

import { poomsaeItems } from './poomsae/poomsae'
import { kickingFundamentalsItems } from './kicking/kickingFundamentals'
import { kickingAdvancedItems } from './kicking/kickingAdvanced'
import { handTechniquesItems } from './techniques/handTechniques'
import { stancesItems } from './techniques/stances'
import { trickingAcrobaticsItems } from './techniques/trickingAcrobatics'
import { historyItems } from './history/history'
import { competitionRulesItems } from './rules/competitionRules'
import { hosinsulItems } from './hosinsul/hosinsul'
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
