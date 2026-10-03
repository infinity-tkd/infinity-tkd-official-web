import { LegalLayout } from '@/components/LegalLayout'
import type { Metadata } from 'next'
import {
  Heart,
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  Mail,
  MapPin,
  Phone,
  Users,
  CheckCircle2,
  Lock,
  Globe,
  Sparkles,
  Accessibility,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Equality, Diversity & Inclusion Policy | Infinity Taekwondo',
  description:
    'Infinity Taekwondo Equality, Diversity & Inclusion Policy - Commitment to equal access, gender equity, anti-discrimination, Para-Taekwondo adaptive training, and cultural mutual respect across all academies.',
}

export default function EqualityPage() {
  const sidebar = (
    <>
      <a href="#summary" className="sidebar-link">
        Executive Summary
      </a>
      <a href="#statement" className="sidebar-link">
        1. Statement of Intent &amp; Values
      </a>
      <a href="#protected-characteristics" className="sidebar-link">
        2. Protected Characteristics &amp; Scope
      </a>
      <a href="#gender-equity" className="sidebar-link">
        3. Gender Equity &amp; Women in Martial Arts
      </a>
      <a href="#para-taekwondo" className="sidebar-link">
        4. Para-Taekwondo &amp; Adaptive Inclusion
      </a>
      <a href="#socioeconomic" className="sidebar-link">
        5. Socioeconomic Access &amp; Scholarships
      </a>
      <a href="#anti-harassment" className="sidebar-link">
        6. Anti-Discrimination &amp; Harassment
      </a>
      <a href="#monitoring" className="sidebar-link">
        7. Continuous Review &amp; Staff Training
      </a>
      <a href="#reporting" className="sidebar-link">
        8. Equal Opportunity Inquiries &amp; Reporting
      </a>
    </>
  )

  return (
    <LegalLayout
      title="Equality, Diversity & Inclusion Policy"
      subtitle="Universal Access, Martial Dignity & Inclusion"
      lastUpdated="August 2026"
      sidebar={sidebar}
      policyType="equality"
    >
      {/* Executive Summary */}
      <div id="summary" className="p-6 rounded-[14px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red">
          <Heart className="w-4 h-4" /> At A Glance: Equal Dignity On &amp; Off the Mats
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
          Infinity Taekwondo believes that martial arts belongs to everyone. We are committed to fostering an inclusive, welcoming, and equitable community where every individual—regardless of gender, nationality, race, religion, age, physical ability, or economic background—is treated with unreserved dignity, respect, and fairness.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">Gender Equality</span>
            <strong className="text-xs font-bold text-zinc-900 dark:text-white">50/50 Leadership Parity</strong>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">Para-Taekwondo</span>
            <strong className="text-xs font-bold text-zinc-900 dark:text-white">Adaptive Training Pathways</strong>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">Zero Discrimination</span>
            <strong className="text-xs font-bold text-brand-red">Strict Non-Harassment Rule</strong>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <section id="statement" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          1. Statement of Intent &amp; Values
        </h2>
        <p>
          Taekwondo is rooted in the philosophical tenet of <em>Yeui</em> (Courtesy / 禮儀) and universal mutual respect. Infinity Taekwondo rejects all forms of prejudice, bigotry, exclusion, and favoritism. We actively build a culture where differences are celebrated, barrier-free participation is championed, and every student is given the opportunity to reach their highest potential.
        </p>
      </section>

      {/* Section 2 */}
      <section id="protected-characteristics" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          2. Protected Characteristics &amp; Scope
        </h2>
        <p>
          This policy protects all students, parents, master instructors, coaches, referees, employees, and volunteers across all Infinity facilities. No individual shall be discriminated against based on:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center font-bold">Gender &amp; Sex</div>
          <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center font-bold">Race &amp; Ethnicity</div>
          <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center font-bold">Nationality &amp; Origin</div>
          <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center font-bold">Religion &amp; Beliefs</div>
          <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center font-bold">Physical Disability</div>
          <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center font-bold">Age &amp; Generation</div>
          <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center font-bold">Socioeconomic Status</div>
          <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center font-bold">Marital Status</div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="gender-equity" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          3. Gender Equity &amp; Women in Martial Arts
        </h2>
        <p>
          Infinity Taekwondo actively promotes female participation, leadership, and athletic excellence:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Equal Mat Time &amp; Division Access:</strong> Female athletes receive equal coaching resources, sparring partner rotations, and tournament sponsorship opportunities as male counterparts.</li>
          <li><strong>Female Leadership Pathway:</strong> We actively train, mentor, and promote female assistant instructors into certified Kukkiwon Masters and International Referees.</li>
          <li><strong>Women’s Self-Defense &amp; Empowerment:</strong> Regular community workshops tailored to physical confidence, spatial awareness, and boundary assertion.</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section id="para-taekwondo" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          4. Para-Taekwondo &amp; Adaptive Inclusion
        </h2>
        <p>
          In accordance with the <strong>World Para-Taekwondo (WT)</strong> charter, we provide adaptive martial arts training for athletes with physical impairments, limb differences, hearing/visual differences, or neurodivergence:
        </p>
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-2 text-xs">
          <strong className="text-brand-red block text-sm">Adaptive Curriculum Modifications</strong>
          <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            Poomsae forms, striking targets, and testing requirements are modified to accommodate physical biomechanics while preserving the authentic discipline, focus, and core principles of Taekwondo.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="socioeconomic" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          5. Socioeconomic Access &amp; Scholarships
        </h2>
        <p>
          Financial hardship should never prevent a dedicated child or teenager from learning martial arts. Through the <em>Infinity Future Champions Endowment</em>, we provide need-based full and partial scholarships covering monthly tuition, official Doboks, protective gear, and grading fees for underprivileged youth.
        </p>
      </section>

      {/* Section 6 */}
      <section id="anti-harassment" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          6. Anti-Discrimination &amp; Harassment
        </h2>
        <p>
          Discriminatory jokes, racial or ethnic slurs, misogynistic remarks, disability mockery, or exclusionary behavior will not be tolerated under any circumstances.
        </p>
        <p>
          Any reported infraction will be promptly investigated by our Compliance Committee, with consequences ranging from formal warnings and sensitivity training to immediate expulsion.
        </p>
      </section>

      {/* Section 7 */}
      <section id="monitoring" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          7. Continuous Review &amp; Staff Training
        </h2>
        <p>
          All instructors and staff undergo annual unconscious bias, inclusive pedagogy, and diversity sensitivity training to ensure our teaching methodologies reflect modern international standards.
        </p>
      </section>

      {/* Section 8 */}
      <section id="reporting" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          8. Equal Opportunity Inquiries &amp; Reporting
        </h2>
        <div className="p-6 rounded-[14px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs space-y-3">
          <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white text-sm">
            <Mail className="w-4 h-4 text-brand-red" /> Infinity TKD Diversity &amp; Inclusion Bureau
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-zinc-600 dark:text-zinc-400 font-mono">
            <div>
              <span className="text-[10px] text-zinc-400 block">General Inclusion Inquiries:</span>
              <a href="mailto:equality@infinitytkd.com" className="text-brand-red font-bold hover:underline">
                equality@infinitytkd.com
              </a>
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 block">Scholarship Inquiries:</span>
              <a href="mailto:scholarships@infinitytkd.com" className="text-zinc-900 dark:text-white font-bold hover:text-brand-red">
                scholarships@infinitytkd.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </LegalLayout>
  )
}
