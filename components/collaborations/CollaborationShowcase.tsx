'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  collaborationsData,
  collaborationCategories,
  type CollaborationItem,
} from '@/data/collaborations'
import { useLanguage } from '@/context/LanguageContext'
import { Card3D } from '@/components/ui/Card3D'
import {
  Globe,
  ExternalLink,
  MapPin,
  Calendar,
  CheckCircle2,
  X,
  Search,
  Building2,
  GraduationCap,
  Shield,
  HeartHandshake,
  Award,
  Sparkles,
  ArrowRight,
  Layers,
  Palette,
  Film,
  Zap,
  Info,
  Building,
} from 'lucide-react'
import { pressable, useDialogFocus } from '@/lib/a11y'

const categoryIcons: Record<string, React.ElementType> = {
  all: Layers,
  taekwondo: Shield,
  media: Film,
  design: Palette,
  education: GraduationCap,
}

export function CollaborationShowcase() {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all')
  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const [activeModalPartner, setActiveModalPartner] = React.useState<CollaborationItem | null>(null)
  const partnerDialogRef = React.useRef<HTMLDivElement>(null)
  useDialogFocus(Boolean(activeModalPartner), partnerDialogRef)
  
  // Track broken images for auto-fallback
  const [brokenImages, setBrokenImages] = React.useState<Record<string, boolean>>({})

  const handleImageError = (key: string) => {
    setBrokenImages((prev) => ({ ...prev, [key]: true }))
  }

  // Lock body scroll & Escape key handler for partner modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalPartner(null)
      }
    }
    if (activeModalPartner) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeModalPartner])

  // Filter partners based on category & search query
  const filteredPartners = React.useMemo(() => {
    return collaborationsData.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      if (!query) return matchesCategory

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        (item.koreanName && item.koreanName.toLowerCase().includes(query)) ||
        (item.khmerName && item.khmerName.toLowerCase().includes(query)) ||
        item.partnerType.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.country.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.background.toLowerCase().includes(query) ||
        item.partnershipScope.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="space-y-8">
      {/* -------------------------------------------------------------------- */}
      {/* FILTER & SEARCH TOOLBAR (14px radius) */}
      {/* -------------------------------------------------------------------- */}
      <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Filter Pills (responsive scroll on mobile) */}
        <div className="flex overflow-x-auto sm:flex-wrap items-center gap-1.5 scrollbar-none pb-1 sm:pb-0 snap-x touch-pan-x -mx-2 px-2 sm:mx-0 sm:px-0">
          {collaborationCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id
            const Icon = categoryIcons[cat.id] || Layers
            const label =
              language === 'km'
                ? cat.labelKm
                : language === 'zh'
                ? cat.labelZh
                : language === 'ko'
                ? cat.labelKo
                : cat.label

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-bold uppercase tracking-wider transition-all touch-press cursor-pointer flex items-center gap-1.5 shrink-0 snap-center whitespace-nowrap ${
                  isSelected
                    ? 'bg-brand-red text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{label}</span>
              </button>
            )
          })}
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search partners, scope, country..."
            aria-label="Search institutional partners"
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-base lg:text-sm min-h-[44px] text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-brand-red transition-colors"
          />
        </div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* PARTNER CARDS GRID (14px radius, clean, zero badge clutter) */}
      {/* -------------------------------------------------------------------- */}
      {filteredPartners.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-400 space-y-2">
          <p className="text-sm font-medium">No collaboration partners found matching your filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('all')
              setSearchQuery('')
            }}
            className="text-xs text-brand-red font-bold uppercase hover:underline cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => {
            const partnerName =
              language === 'km' && partner.translations?.km?.name
                ? partner.translations.km.name
                : language === 'zh' && partner.translations?.zh?.name
                ? partner.translations.zh.name
                : language === 'ko' && partner.translations?.ko?.name
                ? partner.translations.ko.name
                : partner.name

            const partnerType =
              language === 'km' && partner.translations?.km?.partnerType
                ? partner.translations.km.partnerType
                : language === 'zh' && partner.translations?.zh?.partnerType
                ? partner.translations.zh.partnerType
                : language === 'ko' && partner.translations?.ko?.partnerType
                ? partner.translations.ko.partnerType
                : partner.partnerType

            const summary =
              language === 'km' && partner.translations?.km?.summary
                ? partner.translations.km.summary
                : language === 'zh' && partner.translations?.zh?.summary
                ? partner.translations.zh.summary
                : language === 'ko' && partner.translations?.ko?.summary
                ? partner.translations.ko.summary
                : partner.summary

            const isLogoBroken = brokenImages[`${partner.id}_logo`]
            const initials = partner.name
              .split(' ')
              .map((w) => w[0])
              .filter(Boolean)
              .slice(0, 3)
              .join('')

            return (
              <Card3D key={partner.id} max={5} depth={4} className="h-full">
                <div
                  {...pressable(() => setActiveModalPartner(partner))}
                  className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:shadow-xl relative overflow-hidden h-full"
                >
                  <div className="space-y-4">
                    {/* Card Header with Logo Preview & Fallback */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm shrink-0 flex items-center justify-center relative p-1.5">
                        {!isLogoBroken ? (
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            fill
                            sizes="56px"
                            onError={() => handleImageError(`${partner.id}_logo`)}
                            className="object-contain p-1 rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        ) : (
                          <div
                            className="w-full h-full rounded-lg flex items-center justify-center bg-zinc-100 font-black text-xs uppercase tracking-wider text-zinc-600 select-none dark:bg-zinc-800 dark:text-zinc-300"
                            aria-label={partner.name}
                          >
                            {initials}
                          </div>
                        )}
                      </div>

                      <div className="text-right min-w-0">
                        <span
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 text-[11px] font-bold uppercase leading-snug tracking-wider text-zinc-700 inline-block max-w-[10rem] sm:max-w-[12rem] text-balance dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {partner.tier}
                        </span>
                        <span className="text-[11px] text-zinc-400 block mt-1 truncate">
                          Est. {partner.establishedYear} &bull; Since {partner.partnershipSince}
                        </span>
                      </div>
                    </div>

                    {/* Title & Category Sub-label */}
                    <div>
                      {partner.koreanName && (
                        <span className="text-xs font-bold text-zinc-400 block mb-0.5">
                          {partner.koreanName}
                        </span>
                      )}
                      <h2 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight group-hover:text-brand-red transition-colors line-clamp-1">
                        {partnerName}
                      </h2>
                      <span className="text-xs text-brand-red font-bold block mt-0.5">
                        {partnerType}
                      </span>
                    </div>

                    {/* Background / Summary */}
                    <p className="text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {summary}
                    </p>
                  </div>

                  {/* Footer Telemetry */}
                  <div className="pt-4 mt-5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs min-w-0">
                    <span className="flex items-center gap-1.5 text-zinc-500 text-xs truncate min-w-0 mr-2" title={`${partner.location}, ${partner.country}`}>
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span className="truncate">{partner.location}, {partner.country}</span>
                    </span>

                    <span className="font-bold text-brand-red group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Card3D>
            )
          })}
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* PARTNER DETAIL MODAL (14px radius, complete required fields) */}
      {/* -------------------------------------------------------------------- */}
      {/* PARTNER DETAIL MODAL (Responsive Sheet on Mobile, Centered on Desktop) */}
      {/* -------------------------------------------------------------------- */}
      {activeModalPartner && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fade-in"
          onClick={() => setActiveModalPartner(null)}
          ref={partnerDialogRef}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          aria-labelledby="collab-modal-title"
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-2xl" />

          <div
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 shadow-2xl rounded-t-2xl sm:rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col z-10 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 bg-zinc-50 dark:bg-zinc-900/60 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <h4 id="collab-modal-title" className="text-xs sm:text-sm font-black uppercase text-zinc-900 dark:text-white tracking-wider truncate">
                  Partnership Dossier &bull; {activeModalPartner.name}
                </h4>
              </div>
              <button
                onClick={() => setActiveModalPartner(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 touch-scroll text-zinc-700 dark:text-zinc-300">
              
              {/* Partner Banner & Identity with Auto-Error Fallback */}
              <div className="relative h-44 sm:h-56 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900">
                {!brokenImages[`${activeModalPartner.id}_banner`] ? (
                  <Image
                    src={activeModalPartner.bannerImage}
                    alt={activeModalPartner.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                    onError={() => handleImageError(`${activeModalPartner.id}_banner`)}
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center p-6 text-center relative">
                    <span className="text-xl sm:text-2xl font-black uppercase tracking-widest text-white/20 select-none">
                      {activeModalPartner.name}
                    </span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />

                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white flex items-end justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Embedded Logo in Banner */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border-2 border-white/60 p-1.5 shadow-lg shrink-0 flex items-center justify-center relative">
                      {!brokenImages[`${activeModalPartner.id}_modal_logo`] ? (
                        <Image
                          src={activeModalPartner.logo}
                          alt={`${activeModalPartner.name} logo`}
                          fill
                          sizes="64px"
                          onError={() => handleImageError(`${activeModalPartner.id}_modal_logo`)}
                          className="object-contain p-1 rounded-lg"
                        />
                      ) : (
                        <span className="font-black text-xs sm:text-sm uppercase text-zinc-600 dark:text-zinc-300">
                          {activeModalPartner.name.slice(0, 3)}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0">
                      {activeModalPartner.koreanName && (
                        <span className="text-xs font-bold text-brand-red block mb-0.5 truncate">
                          {activeModalPartner.koreanName}
                        </span>
                      )}
                      <h3 className="text-base sm:text-2xl font-black uppercase tracking-tight truncate">
                        {activeModalPartner.name}
                      </h3>
                      <span className="text-xs sm:text-xs text-zinc-300 block truncate">
                        {activeModalPartner.partnerType}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold uppercase bg-black/80 text-white backdrop-blur-md border border-white/20 shrink-0 hidden md:inline-block">
                    {activeModalPartner.tier}
                  </span>
                </div>
              </div>

              {/* Comprehensive Telemetry Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 min-w-0">
                  <span className="text-[11px] text-zinc-400 block mb-0.5 truncate">Location</span>
                  <strong className="text-zinc-900 dark:text-white font-bold block truncate" title={activeModalPartner.location}>{activeModalPartner.location}</strong>
                  <span className="text-[11px] text-zinc-500 block truncate" title={activeModalPartner.country}>{activeModalPartner.country}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 min-w-0">
                  <span className="text-[11px] text-zinc-400 block mb-0.5 truncate">Established</span>
                  <strong className="text-zinc-900 dark:text-white font-bold block truncate">Year {activeModalPartner.establishedYear}</strong>
                  <span className="text-[11px] text-zinc-500 block truncate">Founded</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 min-w-0">
                  <span className="text-[11px] text-zinc-400 block mb-0.5 truncate">Partner Since</span>
                  <strong className="text-brand-red font-bold block truncate">Year {activeModalPartner.partnershipSince}</strong>
                  <span className="text-[11px] text-zinc-500 block truncate">Official Alliance</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 min-w-0">
                  <span className="text-[11px] text-zinc-400 block mb-0.5 truncate">Category</span>
                  <strong className="text-zinc-900 dark:text-white font-bold block uppercase truncate">{activeModalPartner.category}</strong>
                  <span className="text-[11px] text-zinc-500 block truncate" title={activeModalPartner.tier}>{activeModalPartner.tier}</span>
                </div>
              </div>

              {/* Background */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-widest text-brand-red flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> Background &amp; Institutional Profile
                </h5>
                <p className="text-[13px] sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {language === 'km' && activeModalPartner.translations?.km?.background
                    ? activeModalPartner.translations.km.background
                    : language === 'zh' && activeModalPartner.translations?.zh?.background
                    ? activeModalPartner.translations.zh.background
                    : language === 'ko' && activeModalPartner.translations?.ko?.background
                    ? activeModalPartner.translations.ko.background
                    : activeModalPartner.background}
                </p>
              </div>

              {/* Partnership Scope & Objectives */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-brand-red" /> Partnership Scope &amp; Objectives
                </h5>
                <p className="text-[13px] sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {language === 'km' && activeModalPartner.translations?.km?.partnershipScope
                    ? activeModalPartner.translations.km.partnershipScope
                    : language === 'zh' && activeModalPartner.translations?.zh?.partnershipScope
                    ? activeModalPartner.translations.zh.partnershipScope
                    : language === 'ko' && activeModalPartner.translations?.ko?.partnershipScope
                    ? activeModalPartner.translations.ko.partnershipScope
                    : activeModalPartner.partnershipScope}
                </p>
              </div>

              {/* Key Strategic Highlights */}
              <div className="space-y-2.5">
                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-zinc-500" /> Key Strategic Highlights
                </h5>
                <div className="space-y-2">
                  {activeModalPartner.keyHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-800 dark:text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Joint Initiatives & Delegations */}
              <div className="space-y-2.5">
                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-zinc-500" /> Active Joint Initiatives &amp; Delegations
                </h5>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  {activeModalPartner.activeInitiatives.map((prog, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2 text-zinc-800 dark:text-zinc-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{prog}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                {activeModalPartner.websiteUrl && (
                  <a
                    href={activeModalPartner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <Globe className="w-4 h-4 text-brand-red" /> Official Portal <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                )}

                <Link
                  href={`/contact?subject=Partnership%20Inquiry%20regarding%20${encodeURIComponent(activeModalPartner.name)}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-black transition-all text-center inline-flex items-center justify-center gap-2 min-h-[44px]"
                >
                  Joint Program Inquiry <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}
