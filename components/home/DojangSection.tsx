'use client'

import Link from 'next/link'
import { ArrowRight, Flame } from 'lucide-react'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useLanguage } from '@/context/LanguageContext'

export function DojangSection() {
  const { t } = useLanguage()

  const highlights = [
    { title: t.dojang.poomsaeTitle, description: t.dojang.poomsaeDesc },
    { title: t.dojang.trickingTitle, description: t.dojang.trickingDesc },
  ]

  return (
    <section id="dojang" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24 dark:bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="order-2 md:order-1">
            <SectionHeader
              align="left"
              eyebrow={t.dojang.badge}
              eyebrowIcon={Flame}
              title={t.dojang.title1}
              accent={t.dojang.title2}
              description={t.dojang.desc}
            />

            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-800">
                  <dt className="text-base font-bold text-zinc-900 sm:text-lg dark:text-white">{item.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/academy"
              className="group mt-8 inline-flex min-h-[44px] items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red transition-colors hover:text-zinc-900 touch-press dark:hover:text-white"
            >
              <span>{t.dojang.btn}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="relative order-1 h-[320px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 sm:h-[400px] md:order-2 md:h-[460px] lg:h-[520px] dark:border-zinc-800 dark:bg-zinc-900">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop"
              alt="Infinity Taekwondo students training in the dojang"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              quality={70}
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
