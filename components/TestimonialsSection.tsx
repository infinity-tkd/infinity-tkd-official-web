'use client'

import * as React from 'react'
import { Quote, Star } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SafeImage } from '@/components/SafeImage'
import { SafeGrid } from '@/components/SafeGrid'
import { SectionHeader } from '@/components/ui/SectionHeader'

interface Testimonial {
  name: string
  role: string
  rank: string
  quote: string
  avatar: string
  rating: number
}

// Sample testimonials: replace with real, consented quotes and photos before launch.
const testimonials: Testimonial[] = [
  {
    name: 'Sokha Rith',
    role: 'National Poomsae Medalist',
    rank: '2nd Dan Black Belt',
    quote:
      'The biomechanical coaching at Infinity Taekwondo took my Recognized Poomsae accuracy to an international standard. Master Sovan and Master Moni diagnose stance angles down to the millimeter.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Dara Chan',
    role: 'Action Actor & Stunt Performer',
    rank: 'Freestyle Tricker',
    quote:
      'Training in the Acrobatic Spring Pit and collaborating with the Creative Studio opened opportunities for major film productions across Southeast Asia. The energy in this Dojang is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Vannak Heng',
    role: 'Parent of Little Warrior Student',
    rank: 'Junior Blue Belt Parent',
    quote:
      'My 9-year-old son gained tremendous focus, discipline, and confidence within months of joining Infinity TKD. The values of perseverance and respect carry over directly into his schoolwork.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-zinc-200 bg-zinc-50 py-16 sm:py-20 lg:py-24 dark:border-zinc-900 dark:bg-zinc-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.testimonials.badge}
          title={t.testimonials.title1}
          accent={t.testimonials.title2}
          description={t.testimonials.subtitle}
          className="mb-12 sm:mb-16"
        />

        <SafeGrid isolateItems className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 lg:p-8 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-0.5 text-zinc-900 dark:text-white" role="img" aria-label={`${item.rating} out of 5`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-zinc-200 dark:text-zinc-800" aria-hidden="true" />
                </div>

                <blockquote className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">&ldquo;{item.quote}&rdquo;</blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                <SafeImage
                  src={item.avatar}
                  alt=""
                  sizes="44px"
                  className="h-11 w-11 rounded-xl border border-zinc-200 object-cover dark:border-zinc-800"
                />
                <div>
                  <p className="text-sm font-black uppercase leading-none tracking-tight text-zinc-900 dark:text-white">{item.name}</p>
                  <p className="mt-1 text-xs text-zinc-500">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </SafeGrid>
      </div>
    </section>
  )
}
