'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, Building2, Calendar, Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import { SafeGrid } from '@/components/SafeGrid'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { buttonStyles } from '@/components/ui/Button'
import { dojangBranches } from '@/data/locations'
import { useLanguage } from '@/context/LanguageContext'

export function BranchesSection() {
  const { t, localizeList } = useLanguage()
  const branches = React.useMemo(() => localizeList(dojangBranches), [localizeList])

  return (
    <section className="border-t border-zinc-200 bg-white py-16 sm:py-20 lg:py-24 dark:border-zinc-900 dark:bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.locations.badge}
          eyebrowIcon={Building2}
          title={t.locations.heroTitle1}
          accent={t.locations.heroTitle2}
          description={t.locations.heroSubtitle}
          className="mb-12 sm:mb-16"
        />

        <SafeGrid className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {branches.map((branch) => (
            <article
              key={branch.id}
              className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/40"
            >
                {/* Cover */}
                <div className="dark relative aspect-[16/9] overflow-hidden bg-zinc-900 sm:aspect-[21/9]">
                  <OptimizedImage
                    src={branch.image}
                    alt={branch.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    quality={65}
                    className="object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute inset-x-4 bottom-4 z-10">
                    <span className="mb-1.5 inline-block rounded-lg bg-brand-red px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                      {branch.isHeadquarters ? t.common.headquarters : t.common.branch02}
                    </span>
                    <h3 className="text-xl font-black uppercase leading-tight tracking-tight text-white sm:text-2xl">
                      {branch.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 truncate text-[13px] text-zinc-300">
                      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {branch.address.district}, {branch.address.city}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between space-y-4 p-5 sm:p-6">
                  <div>
                    <div className="mb-4">
                      <span className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {t.locations.operatingHours}
                      </span>
                      <div className="space-y-2">
                        {branch.scheduleGroups.map((group) => (
                          <div
                            key={group.label}
                            className="rounded-xl border border-zinc-200/80 bg-white p-3 text-xs dark:border-zinc-800 dark:bg-zinc-950"
                          >
                            <div className="mb-1.5 flex items-center justify-between gap-2">
                              <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white sm:text-xs">
                                <Calendar className="h-3 w-3 shrink-0 text-zinc-400" aria-hidden="true" />
                                {group.label}
                              </span>
                              <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                                {group.badge}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {group.slots.map((slot) => (
                                <span
                                  key={slot}
                                  className="rounded-md border border-zinc-200/80 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:text-[11px]"
                                >
                                  {slot}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-200/60 pt-3 text-xs text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-400">
                      <span className="flex items-center gap-1 font-semibold text-zinc-800 dark:text-zinc-200">
                        <Phone className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" /> {branch.phone}
                      </span>
                      <span className="flex items-center gap-1 truncate text-xs text-zinc-500">
                        <Mail className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" /> {branch.email}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 pt-4">
                    <Link href="/locations" className={buttonStyles({ variant: 'outline', size: 'md', className: 'px-3 text-xs' })}>
                      <Navigation className="h-3 w-3" aria-hidden="true" /> {t.common.viewDetails}
                    </Link>
                    <Link
                      href={`/contact?subject=Free%20Trial%20Class%20Booking&branch=${encodeURIComponent(branch.name)}`}
                      className={buttonStyles({ variant: 'primary', size: 'md', className: 'px-3 text-xs' })}
                    >
                      {t.nav.bookTrial} <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
            </article>
          ))}
        </SafeGrid>
      </div>
    </section>
  )
}
