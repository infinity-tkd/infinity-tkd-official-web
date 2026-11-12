import { LegalLayout } from '@/components/LegalLayout'
import type { Metadata } from 'next'
import { Shield, Award, AlertTriangle, CreditCard, Scale, CheckCircle2, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Infinity Taekwondo Terms of Service - Academy membership rules, liability and training waivers, dojang code of conduct, and Kukkiwon grading policies.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | Infinity Taekwondo',
    description:
      'Infinity Taekwondo Terms of Service - Academy membership rules, liability and training waivers, dojang code of conduct, and Kukkiwon grading policies.',
    url: '/terms',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Infinity Taekwondo Terms of Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Infinity Taekwondo',
    description:
      'Infinity Taekwondo Terms of Service - Academy membership rules, training waivers, and Kukkiwon standards.',
    images: ['/twitter-image'],
  },
}

export default function TermsPage() {
  const sidebar = (
    <>
      <a href="#summary" className="sidebar-link">
        Executive Summary
      </a>
      <a href="#acceptance" className="sidebar-link">
        1. Acceptance of Agreement
      </a>
      <a href="#etiquette" className="sidebar-link">
        2. Dojang Code of Conduct
      </a>
      <a href="#liability" className="sidebar-link">
        3. Physical Liability &amp; Training Waiver
      </a>
      <a href="#gradings" className="sidebar-link">
        4. Belt Promotions &amp; Standards
      </a>
      <a href="#memberships" className="sidebar-link">
        5. Membership Dues &amp; Billing
      </a>
      <a href="#cancellations" className="sidebar-link">
        6. Cancellations &amp; Pause Policy
      </a>
      <a href="#media" className="sidebar-link">
        7. Media &amp; Photography Rights
      </a>
      <a href="#facilities" className="sidebar-link">
        8. Facility Safety &amp; Belongings
      </a>
      <a href="#ip" className="sidebar-link">
        9. Intellectual Property
      </a>
      <a href="#contact" className="sidebar-link">
        10. Contact &amp; Governance
      </a>
    </>
  )

  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Martial Rules & Legal Agreement"
      lastUpdated="August 2026"
      sidebar={sidebar}
      policyType="terms"
    >
      {/* Executive Summary Callout Grid */}
      <div id="summary" className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red">
          <Scale className="w-4 h-4" /> At A Glance: Key Membership &amp; Dojang Terms
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
          Welcome to <strong>Infinity Taekwondo</strong> (태권도 INFINITY). By training at our academy, taking part in demonstrations or events, or enrolling a student, you agree to these legal conditions and martial standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs">
            <span className="font-bold text-zinc-900 dark:text-white block mb-0.5">
              🥋 Dojang Code of Conduct
            </span>
            <span className="text-zinc-500">Respect masters, peers, and embody the 5 Tenets of Taekwondo at all times.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs">
            <span className="font-bold text-zinc-900 dark:text-white block mb-0.5">
              ⚠️ Inherent Risk &amp; Safety Gear
            </span>
            <span className="text-zinc-500">Protective equipment is mandatory for contact drills, Hosinsul practice and board breaking.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs">
            <span className="font-bold text-zinc-900 dark:text-white block mb-0.5">
              🏆 Merit-Based Belt Advancement
            </span>
            <span className="text-zinc-500">Promotions are earned through demonstrated proficiency and moral character.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs">
            <span className="font-bold text-zinc-900 dark:text-white block mb-0.5">
              ⏸️ 60-Day Pause &amp; 30-Day Notice
            </span>
            <span className="text-zinc-500">Members may freeze memberships up to 60 days/year with advance notice.</span>
          </div>
        </div>
      </div>

      <p>
        These Terms of Service govern enrollment, participation, and access to all training facilities, programs, and digital curriculum provided by Infinity Taekwondo across our Phnom Penh branches (Olympic Branch and Kouk Khleang Branch).
      </p>

      {/* SECTION 1 */}
      <h2 id="acceptance">1. Acceptance of Agreement</h2>
      <p>
        By registering as a student, enrolling a minor dependent as a parent/legal guardian, purchasing a membership package, or attending a trial session, you enter into a legally binding agreement with Infinity Taekwondo and agree to strictly comply with all terms herein.
      </p>

      {/* SECTION 2 */}
      <h2 id="etiquette">2. Dojang Code of Conduct &amp; Martial Etiquette</h2>
      <p>
        Taekwondo is a traditional martial art demanding reverence, discipline, and mutual respect. All practitioners, parents, and visitors must embody the 5 Tenets: <em>Courtesy (예의)</em>, <em>Integrity (염치)</em>, <em>Perseverance (인내)</em>, <em>Self-Control (극기)</em>, and <em>Indomitable Spirit (백절불굴)</em>.
      </p>
      <ul>
        <li>
          <strong>Bowing Protocol:</strong> Students and instructors must bow upon entering or exiting the training mat (Dojang), acknowledging the masters, national flags, and fellow peers.
        </li>
        <li>
          <strong>Uniform (Dobok) Standard:</strong> An official, clean Infinity Taekwondo Dobok with the student&rsquo;s current belt rank must be worn at all regular classes. Jewelry, watches, and outdoor footwear must be removed prior to stepping onto the mats.
        </li>
        <li>
          <strong>Zero Tolerance for Bullying &amp; Aggression:</strong> Taekwondo techniques must never be used outside the Dojang for aggression. Malicious behavior, reckless conduct, or unsportsmanlike attitude will result in immediate expulsion without refund.
        </li>
      </ul>

      {/* SECTION 3 */}
      <h2 id="liability">3. Physical Liability &amp; Training Waiver</h2>
      <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 space-y-2 mb-4">
        <div className="flex items-center gap-2 font-black uppercase text-brand-red tracking-wider">
          <AlertTriangle className="w-4 h-4" /> Assumption of Inherent Martial Arts Risk
        </div>
        <p className="leading-relaxed">
          Martial arts training, partner self-defense (Hosinsul) drills, high-altitude acrobatic tricking, board breaking (Kyukpa), and physical conditioning involve inherent risks of injury (including sprains, fractures, concussions, and muscular strain).
        </p>
      </div>

      <p>
        By participating in training at Infinity Taekwondo:
      </p>
      <ul>
        <li>
          You explicitly acknowledge these risks and voluntarily assume full responsibility for your participation (or the participation of your minor child).
        </li>
        <li>
          You release and hold harmless Infinity Taekwondo, its Master Instructors, coaches, employees, and facility landlords from any liability, claims, or damages arising from physical injury sustained during training or sanctioned tournaments.
        </li>
        <li>
          <strong>Mandatory Protective Equipment:</strong> Appropriate protective gear (mouthguard, shin/forearm guards and, where instructed, padded body protection) must be worn during contact drills, Hosinsul practice and board breaking.
        </li>
      </ul>

      {/* SECTION 4 */}
      <h2 id="gradings">4. Belt Promotions &amp; Kukkiwon Standards</h2>
      <p>
        Belt progression at Infinity Taekwondo strictly follows World Taekwondo and Kukkiwon standards:
      </p>
      <ul>
        <li>
          <strong>Merit-Based Progression:</strong> Belt promotions are earned through technical precision, required Poomsae forms, demonstration, tricking and Hosinsul skills, board breaking, and demonstrated moral discipline.
        </li>
        <li>
          <strong>Attendance Is Not a Guarantee:</strong> Meeting minimum class attendance hours is a prerequisite to qualify for testing, but does <em>not</em> guarantee automatic promotion.
        </li>
        <li>
          <strong>International Kukkiwon Dan Certification:</strong> Black Belt candidates testing for official Kukkiwon Dan ranks incur separate international registration fees payable to Kukkiwon Headquarters in South Korea. These fees are non-refundable once the Dan application is processed.
        </li>
      </ul>

      {/* SECTION 5 */}
      <h2 id="memberships">5. Membership Dues &amp; Billing</h2>
      <ul>
        <li>
          <strong>Tuition Billing:</strong> Membership dues are billed on a recurring monthly or annual basis at the beginning of each billing cycle.
        </li>
        <li>
          <strong>Access Rights:</strong> Tuition guarantees class access according to the enrolled tier regardless of the student&rsquo;s individual attendance rate. Missed classes cannot be carried over as monetary deductions.
        </li>
      </ul>

      {/* SECTION 6 */}
      <h2 id="cancellations">6. Cancellations &amp; Pause Policy</h2>
      <ul>
        <li>
          <strong>Membership Pause (Freeze):</strong> Members in good standing may pause their active membership for up to <strong>60 consecutive days</strong> per calendar year for medical reasons, injury recovery, or international travel by submitting a 14-day written advance notice.
        </li>
        <li>
          <strong>Monthly Membership Cancellation:</strong> Month-to-month memberships may be cancelled at any time with a <strong>30-day written notice</strong> prior to the next scheduled billing date.
        </li>
        <li>
          <strong>Prepaid Annual Plans:</strong> Discounted prepaid annual memberships are non-refundable once activated.
        </li>
      </ul>

      {/* SECTION 7 */}
      <h2 id="media">7. Media Likeness &amp; Photography Rights</h2>
      <p>
        Infinity Taekwondo regularly documents training sessions, belt ceremonies, and tournament competitions for educational and promotional media. By training with us, you grant Infinity Taekwondo permission to capture and broadcast your likeness. If you wish to opt out, you may submit an official Media Opt-Out Request at our front desk at any time.
      </p>

      {/* SECTION 8 */}
      <h2 id="facilities">8. Facility Safety &amp; Personal Belongings</h2>
      <ul>
        <li>
          Students and visitors are responsible for their personal valuables. Infinity Taekwondo is not liable for lost, stolen, or damaged personal belongings left in locker rooms or waiting lounges.
        </li>
        <li>
          All students must follow the safety instructions of the Head Master and coaching staff at all times.
        </li>
      </ul>

      {/* SECTION 9 */}
      <h2 id="ip">9. Intellectual Property &amp; Branding</h2>
      <p>
        The &ldquo;Infinity Taekwondo&rdquo; trademark, eternal knot brandmark, training curriculum, and proprietary syllabus materials are the exclusive intellectual property of Infinity Taekwondo. Commercial reproduction or distribution without written consent is strictly prohibited.
      </p>

      {/* SECTION 10 */}
      <h2 id="contact">10. Contact &amp; Governance</h2>
      <p>
        These Terms of Service are governed by the laws of the Kingdom of Cambodia. For any legal inquiries or membership administration:
      </p>
      <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs space-y-2">
        <p className="font-bold text-zinc-900 dark:text-white">Infinity Taekwondo Administration Directorate</p>
        <p className="text-zinc-500">📍 Olympic Branch (HQ) &bull; National Olympic Stadium Complex, Charles de Gaulle Blvd, Phnom Penh</p>
        <p className="text-zinc-500">📍 Kouk Khleang Branch &bull; Kouk Khleang, Sen Sok, Phnom Penh</p>
        <p className="text-zinc-500">📧 Operations: <a href="mailto:infinity.tkd.kh@gmail.com" className="text-brand-red hover:underline font-bold">infinity.tkd.kh@gmail.com</a></p>
        <p className="text-zinc-500">📞 Phone: 012 220 124 (Available during training hours ICT)</p>
      </div>
    </LegalLayout>
  )
}
