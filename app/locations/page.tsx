'use client'

import * as React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Clock, CheckCircle2, ArrowRight, Building2, Navigation, MessageCircle, Calendar } from 'lucide-react'
import { dojangBranches } from '@/data/locations'
import { useLanguage } from '@/context/LanguageContext'
import { SafeGrid } from '@/components/SafeGrid'
import { SafeImage } from '@/components/SafeImage'
import { PageHero } from '@/components/ui/PageHero'
import { buttonStyles } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const labelClass =
  'mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 sm:mb-4'
const contactBoxClass = 'rounded-xl border border-zinc-200 p-4 dark:border-zinc-800'
const contactTermClass = 'mb-1 block text-[11px] font-bold uppercase text-zinc-500'
const contactLinkClass =
  'inline-flex min-h-[32px] max-w-full items-center text-sm font-bold text-zinc-900 transition-colors hover:text-brand-red dark:text-white'

export default function LocationsPage() {
  const { t, localizeList } = useLanguage()
  const localizedBranches = React.useMemo(() => localizeList(dojangBranches), [localizeList])
  const [activeBranchId, setActiveBranchId] = React.useState<string>(dojangBranches[0].id)

  const activeBranch = React.useMemo(() => {
    return localizedBranches.find((b) => b.id === activeBranchId) || localizedBranches[0]
  }, [localizedBranches, activeBranchId])

  return (
    <div className="pb-20 sm:pb-28">
      <PageHero
        eyebrow={t.locations.badge}
        eyebrowIcon={Building2}
        title={t.locations.heroTitle1}
        accent={t.locations.heroTitle2}
        description={t.locations.heroSubtitle}
      />

      {/* Branch choice */}
      <section aria-label="Choose a branch" className="container mx-auto mb-10 max-w-5xl px-4 sm:mb-12 sm:px-6 lg:px-8">
        <SafeGrid
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          isEmpty={!localizedBranches || localizedBranches.length === 0}
          emptyTitle="No Branches Available"
          emptyMessage="Branch locations are currently updating. Please check back shortly."
        >
          {localizedBranches.map((branch) => {
            const isSelected = activeBranch?.id === branch.id
            return (
              <button
                key={branch.id}
                type="button"
                onClick={() => setActiveBranchId(branch.id)}
                aria-pressed={isSelected}
                className={cn(
                  'flex h-full w-full cursor-pointer flex-col justify-between rounded-2xl border bg-white p-5 text-left transition-colors duration-300 touch-press sm:p-6 dark:bg-zinc-900/40',
                  isSelected
                    ? 'border-brand-red'
                    : 'border-zinc-200 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600'
                )}
              >
                <span className="block">
                  <span
                    className={cn(
                      'inline-block rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest',
                      branch.isHeadquarters
                        ? 'bg-brand-red text-white'
                        : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                    )}
                  >
                    {branch.isHeadquarters ? t.common.headquarters : t.common.branch02}
                  </span>
                  <span className="mt-3 block text-lg font-black uppercase tracking-tight text-zinc-900 sm:text-xl dark:text-white">
                    {branch.name}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{branch.tagline}</span>
                </span>

                <span className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-200 pt-3 text-xs text-zinc-500 dark:border-zinc-800">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {branch.address.district}
                  </span>
                  <span className={cn('text-[11px] font-bold uppercase tracking-wider', isSelected ? 'text-brand-red' : 'text-zinc-500')}>
                    {isSelected ? 'Viewing Branch' : 'Select Branch'}
                  </span>
                </span>
              </button>
            )
          })}
        </SafeGrid>
      </section>

      {/* The chosen branch */}
      {activeBranch && (
        <section key={activeBranch.id} className="container mx-auto max-w-6xl animate-fade-in px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/40">
            {/* Cover */}
            <div className="dark relative aspect-[16/9] overflow-hidden bg-zinc-900 md:aspect-[21/9]">
              <SafeImage src={activeBranch.image} alt={activeBranch.name} className="h-full w-full object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8 md:flex-row md:items-end">
                <div>
                  <span className="mb-2 inline-block rounded-lg bg-brand-red px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                    {activeBranch.isHeadquarters ? t.common.headquarters : t.common.branch02}
                  </span>
                  <h2 className="text-2xl font-black uppercase leading-none tracking-tight text-white sm:text-3xl md:text-5xl">
                    {activeBranch.name}
                  </h2>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-zinc-300">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {activeBranch.address.street}, {activeBranch.address.district}, {activeBranch.address.city}
                  </p>
                </div>

                <a
                  href={activeBranch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center gap-2 self-start rounded-xl bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-zinc-900 transition-colors hover:bg-zinc-200 touch-press md:self-auto"
                >
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" /> Open in Google Maps
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 md:p-12 lg:grid-cols-12 lg:gap-12">
              {/* Schedule and contacts */}
              <div className="space-y-8 lg:col-span-6">
                <div>
                  <h3 className={labelClass}>
                    <Clock className="h-4 w-4" aria-hidden="true" /> {t.locations.operatingHours}
                  </h3>
                  <div className="space-y-3">
                    {activeBranch.scheduleGroups.map((group, idx) => (
                      <div key={idx} className="rounded-xl border border-zinc-200 p-4 sm:p-5 dark:border-zinc-800">
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <span className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white">
                            <Calendar className="h-4 w-4 shrink-0 text-zinc-400" aria-hidden="true" />
                            {group.label}
                          </span>
                          <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                            {group.badge}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {group.slots.map((slot, sIdx) => (
                            <span
                              key={sIdx}
                              className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                            >
                              {slot}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className={labelClass}>
                    <Phone className="h-4 w-4" aria-hidden="true" /> {t.locations.directContact}
                  </h3>
                  <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className={contactBoxClass}>
                      <dt className={contactTermClass}>Desk Phone</dt>
                      <dd>
                        <a href={`tel:${activeBranch.phone.replace(/\s+/g, '')}`} className={contactLinkClass}>
                          {activeBranch.phone}
                        </a>
                      </dd>
                    </div>
                    <div className={contactBoxClass}>
                      <dt className={contactTermClass}>Admissions Email</dt>
                      <dd className="min-w-0">
                        <a href={`mailto:${activeBranch.email}`} className={cn(contactLinkClass, 'block truncate leading-8')}>
                          {activeBranch.email}
                        </a>
                      </dd>
                    </div>
                    <div className={cn(contactBoxClass, 'sm:col-span-2')}>
                      <dt className={contactTermClass}>WhatsApp Hotline</dt>
                      <dd>
                        <a
                          href={`https://wa.me/${activeBranch.whatsapp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(contactLinkClass, 'gap-1.5')}
                        >
                          <MessageCircle className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
                          {activeBranch.whatsapp}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Highlights, map and booking */}
              <div className="flex flex-col justify-between space-y-8 lg:col-span-6">
                <div>
                  <h3 className={labelClass}>{t.locations.facilityHighlights}</h3>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {activeBranch.features.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 rounded-xl border border-zinc-200 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-3 dark:border-zinc-800 dark:bg-zinc-900/60">
                    <span className="flex min-w-0 items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-zinc-400" aria-hidden="true" />
                      <span className="truncate">{activeBranch.name} Map</span>
                    </span>
                    <a
                      href={activeBranch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[44px] shrink-0 items-center gap-1 whitespace-nowrap pl-3 text-xs font-bold text-brand-red hover:underline"
                    >
                      Full Map <Navigation className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                  <iframe
                    src={activeBranch.mapEmbedUrl}
                    width="100%"
                    height="230"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${activeBranch.name} Google Map`}
                    className="w-full grayscale contrast-125 dark:invert dark:hue-rotate-180"
                  />
                </div>

                <div className="dark space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-white sm:p-8">
                  <div>
                    <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-zinc-400">Free Trial Booking</span>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                      Train At {activeBranch.name.split(' (')[0]}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      Step onto the mat, experience our high-caliber coaching, and tour the facilities firsthand.
                    </p>
                  </div>

                  <Link
                    href={`/contact?subject=Free%20Trial%20Class%20Booking&branch=${encodeURIComponent(activeBranch.name)}`}
                    className={buttonStyles({ variant: 'primary', size: 'lg', className: 'w-full' })}
                  >
                    {t.locations.bookTrialAtBranch} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
