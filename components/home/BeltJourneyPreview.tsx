import { getBeltFormLinks } from '@/lib/beltForms'
import { BeltJourneyPreviewContent } from './BeltJourneyPreviewContent'

/**
 * Home page belt journey. Server component: form names and links are resolved here so the poomsae
 * dataset never reaches the browser; the section itself renders in the visitor's language.
 */
export function BeltJourneyPreview() {
  return <BeltJourneyPreviewContent forms={getBeltFormLinks()} />
}
