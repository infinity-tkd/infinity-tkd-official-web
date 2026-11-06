import type { Metadata } from 'next'
import { BeltJourneyPreview } from '@/components/home/BeltJourneyPreview'
import { ProgramPathfinder } from '@/components/ProgramPathfinder'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { HeroSection } from '@/components/home/HeroSection'
import { StatsBanner } from '@/components/home/StatsBanner'
import { DojangSection } from '@/components/home/DojangSection'
import { PillarsSection } from '@/components/home/PillarsSection'
import { BranchesSection } from '@/components/home/BranchesSection'
import { RecordsSection } from '@/components/home/RecordsSection'
import { LatestJournal } from '@/components/home/LatestJournal'

// Server component: owns the homepage's own canonical URL and renders the blog teaser from
// Markdown at build time. Interactive sections below are client components.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-zinc-900 selection:bg-brand-red selection:text-white transition-colors duration-500 dark:bg-black dark:text-white">
      <HeroSection />
      <StatsBanner />
      <DojangSection />

      {/* All eight ranks at a glance; the full interactive guide lives at /belt-journey. */}
      <BeltJourneyPreview />

      <PillarsSection />
      <BranchesSection />

      <section className="py-16 sm:py-20 lg:py-24 bg-white transition-colors duration-500 dark:bg-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <ProgramPathfinder />
          </ScrollReveal>
        </div>
      </section>

      <RecordsSection />
      <LatestJournal />

      <ScrollReveal direction="up">
        <TestimonialsSection />
      </ScrollReveal>
    </div>
  )
}
