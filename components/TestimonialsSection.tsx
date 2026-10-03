'use client'

import * as React from 'react'
import { Quote, Star, Award, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SafeImage } from '@/components/SafeImage'
import { SafeGrid } from '@/components/SafeGrid'
import { Card3D } from '@/components/ui/Card3D'

interface Testimonial {
  name: string
  role: string
  rank: string
  quote: string
  avatar: string
  rating: number
}

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
    <section className="py-20 sm:py-24 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900 transition-colors duration-500 overflow-hidden relative font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-red/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" /> {t.testimonials.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
            {t.testimonials.title1} <span className="text-brand-red">{t.testimonials.title2}</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base mt-2 font-light">
            {t.testimonials.subtitle}
          </p>
        </div>

        <SafeGrid isolateItems className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <Card3D key={item.name} maxTilt={6} scale={1.015} className="h-full">
              <div className="h-full p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-brand-glow hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Rating stars & Quote Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-1 text-brand-red">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-red" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-zinc-200 dark:text-zinc-800" />
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-light mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <SafeImage
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-xl object-cover border border-brand-red/30 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </SafeGrid>
      </div>
    </section>
  )
}
