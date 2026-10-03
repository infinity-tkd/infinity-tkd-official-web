'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Navigation,
  MessageCircle,
} from 'lucide-react'
import { dojangBranches, type DojangBranch } from '@/data/locations'
import { useLanguage } from '@/context/LanguageContext'
import { SafeGrid } from '@/components/SafeGrid'
import { SafeImage } from '@/components/SafeImage'
import { Card3D } from '@/components/ui/Card3D'

export default function LocationsPage() {
  const { t, localizeList } = useLanguage()
  const localizedBranches = React.useMemo(() => localizeList(dojangBranches), [localizeList])
  const [activeBranchId, setActiveBranchId] = React.useState<string>(dojangBranches[0].id)

  const activeBranch = React.useMemo(() => {
    return localizedBranches.find((b) => b.id === activeBranchId) || localizedBranches[0]
  }, [localizedBranches, activeBranchId])

  return (
    <div className="bg-white dark:bg-black text-zinc-900 dark:text-white min-h-screen pt-20 sm:pt-24 pb-20 font-sans selection:bg-brand-red selection:text-white transition-colors duration-500">
      {/* Hero Header */}
      <section className="relative pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[450px] bg-gradient-to-b from-brand-red/10 via-transparent to-transparent blur-3xl rounded-full opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5" /> {t.locations.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4 sm:mb-6 leading-none text-zinc-900 dark:text-white break-words">
            {t.locations.heroTitle1} <span className="text-brand-red">{t.locations.heroTitle2}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed px-2">
            {t.locations.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Branch Selector Tabs (14px radius) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 max-w-5xl">
        <SafeGrid
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          isEmpty={!localizedBranches || localizedBranches.length === 0}
          emptyTitle="No Branches Available"
          emptyMessage="Branch locations are currently updating. Please check back shortly."
        >
          {localizedBranches.map((branch) => {
            const isSelected = activeBranch?.id === branch.id
            return (
              <Card3D key={branch.id} maxTilt={4} scale={1.01} className="h-full">
                <button
                  onClick={() => setActiveBranchId(branch.id)}
                  className={`w-full h-full p-5 sm:p-6 rounded-[14px] border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer touch-press ${
                    isSelected
                      ? 'border-brand-red bg-zinc-50 dark:bg-zinc-900/90 shadow-xl ring-2 ring-brand-red/20'
                      : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 hover:border-zinc-400 dark:hover:border-zinc-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                          branch.isHeadquarters
                            ? 'bg-brand-red text-white'
                            : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
                        {branch.isHeadquarters ? t.common.headquarters : t.common.branch02}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mt-1">
                      {branch.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-light">
                      {branch.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" /> {branch.address.district}
                    </span>
                    <span className="font-bold text-brand-red uppercase text-[10px]">
                      {isSelected ? 'Viewing' : 'Select Branch'}
                    </span>
                  </div>
                </button>
              </Card3D>
            )
          })}
        </SafeGrid>
      </section>

      {/* Selected Branch Detail Hero (14px radius) */}
      {activeBranch && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl animate-fade-in">
        <div className="rounded-[14px] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 shadow-xl">
          {/* Cover Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-zinc-950 overflow-hidden">
            <SafeImage
              src={activeBranch.image}
              alt={activeBranch.name}
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-brand-red text-white inline-block mb-2 shadow-md">
                  {activeBranch.isHeadquarters ? t.common.headquarters : t.common.branch02}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                  {activeBranch.name}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 flex items-center gap-1.5 font-light">
                  <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" /> {activeBranch.address.street}, {activeBranch.address.district}
                </p>
              </div>

              <a
                href={activeBranch.mapEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-brand-red hover:text-white transition-all shadow-lg flex items-center gap-2 touch-press"
              >
                <Navigation className="w-3.5 h-3.5" /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Details Content Grid */}
          <div className="p-6 sm:p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Col: Hours, Contact, Instructors */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              {/* Operating Hours */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3 sm:mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {t.locations.operatingHours}
                </h4>
                <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between items-center text-zinc-700 dark:text-zinc-300">
                    <span className="font-semibold">Monday – Friday:</span>
                    <span>{activeBranch.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-700 dark:text-zinc-300">
                    <span className="font-semibold">Saturday:</span>
                    <span>{activeBranch.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-700 dark:text-zinc-300">
                    <span className="font-semibold">Sunday:</span>
                    <span>{activeBranch.hours.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Direct Contacts */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3 sm:mb-4 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {t.locations.directContact}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800">
                    <span className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">
                      Desk Phone
                    </span>
                    <a
                      href={`tel:${activeBranch.phone}`}
                      className="font-bold text-zinc-900 dark:text-white hover:text-brand-red text-sm"
                    >
                      {activeBranch.phone}
                    </a>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800">
                    <span className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">
                      Email Admissions
                    </span>
                    <a
                      href={`mailto:${activeBranch.email}`}
                      className="font-bold text-zinc-900 dark:text-white hover:text-brand-red text-xs truncate block"
                    >
                      {activeBranch.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Lead Instructors */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">
                  {t.locations.leadInstructors}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeBranch.leadInstructors.map((inst) => (
                    <span
                      key={inst}
                      className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300"
                    >
                      {inst}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Highlights & Booking Action */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3 sm:mb-4">
                  {t.locations.facilityHighlights}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeBranch.features.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card3D maxTilt={5} scale={1.01} className="w-full">
                <div className="p-6 sm:p-8 rounded-xl bg-zinc-900 text-white border border-brand-red/30 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block mb-1">
                      Free Trial Booking
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                      Train At {activeBranch.name.split(' (')[0]}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light mt-1">
                      Experience our martial arts training, meet the Master faculty, and tour the facility.
                    </p>
                  </div>

                  <Link
                    href={`/contact?subject=Trial%20Booking%20at%20${encodeURIComponent(activeBranch.name)}`}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-brand-red text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all shadow-brand-glow flex items-center justify-center gap-2 touch-press"
                  >
                    {t.locations.bookTrialAtBranch} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  )
}
