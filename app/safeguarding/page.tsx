import { LegalLayout } from '@/components/LegalLayout'
import type { Metadata } from 'next'
import {
  ShieldCheck,
  Heart,
  Eye,
  FileCheck,
  AlertTriangle,
  Mail,
  MapPin,
  Phone,
  Users,
  CheckCircle2,
  Lock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Safeguarding & Safe Sport Policy | Infinity Taekwondo',
  description:
    'Infinity Taekwondo Safeguarding Policy - Child protection protocols, background check standards, coach conduct rules, and confidential reporting channels across all Phnom Penh dojangs.',
}

export default function SafeguardingPage() {
  const sidebar = (
    <>
      <a href="#summary" className="sidebar-link">
        Executive Summary
      </a>
      <a href="#principles" className="sidebar-link">
        1. Core Safeguarding Principles
      </a>
      <a href="#coach-vetting" className="sidebar-link">
        2. Coach Recruitment &amp; Background Checks
      </a>
      <a href="#code-of-conduct" className="sidebar-link">
        3. Instructor Code of Conduct
      </a>
      <a href="#physical-contact" className="sidebar-link">
        4. Physical Contact &amp; Hands-On Adjustments
      </a>
      <a href="#open-dojang" className="sidebar-link">
        5. Open Dojang &amp; Parental Visibility
      </a>
      <a href="#anti-bullying" className="sidebar-link">
        6. Anti-Bullying &amp; Hazing Zero-Tolerance
      </a>
      <a href="#digital-safety" className="sidebar-link">
        7. Digital Communication &amp; Social Media
      </a>
      <a href="#reporting" className="sidebar-link">
        8. Reporting Incidents &amp; Confidential Desk
      </a>
      <a href="#contacts" className="sidebar-link">
        9. Designated Safeguarding Contacts
      </a>
    </>
  )

  return (
    <LegalLayout
      title="Safeguarding & Safe Sport Policy"
      subtitle="Child Protection & Athlete Welfare"
      lastUpdated="August 2026"
      sidebar={sidebar}
      policyType="safeguarding"
    >
      {/* Executive Summary */}
      <div id="summary" className="p-6 rounded-[14px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red">
          <ShieldCheck className="w-4 h-4" /> At A Glance: Our Safe Sport Commitment
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
          Infinity Taekwondo enforces an uncompromised <strong>Zero-Tolerance Policy</strong> against child abuse, physical aggression outside sanctioned rules, emotional bullying, harassment, neglect, or sexual misconduct. Every cadet, child, and adult athlete trains in a secure, transparent, and respectful environment governed by certified Kukkiwon and World Taekwondo Safe Sport standards.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">100% Vetting</span>
            <strong className="text-xs font-bold text-zinc-900 dark:text-white">Criminal Background Checks</strong>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">Parental Visibility</span>
            <strong className="text-xs font-bold text-zinc-900 dark:text-white">100% Open Glass Dojangs</strong>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">Confidential Hotline</span>
            <strong className="text-xs font-bold text-brand-red">Direct Safeguarding Officer</strong>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <section id="principles" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          1. Core Safeguarding Principles
        </h2>
        <p>
          At Infinity Taekwondo, the physical safety, mental health, and emotional well-being of all practitioners—especially minor children (under 18)—take absolute precedence over athletic performance, medal counts, and belt promotions.
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Universal Right to Safety:</strong> Every athlete has an equal, non-negotiable right to participate in martial arts free from all forms of harm and exploitation.</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Shared Responsibility:</strong> All master instructors, assistant coaches, administrative staff, and volunteer officials share mandatory legal and moral duty to uphold these standards.</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Proactive Empowerment:</strong> Students are taught self-advocacy, bodily autonomy, and how to communicate boundaries without fear of athletic reprisal.</span>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="coach-vetting" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          2. Coach Recruitment &amp; Background Checks
        </h2>
        <p>
          No individual is permitted to instruct or assist in any Infinity Taekwondo class without successfully completing our rigorous 4-tier vetting protocol:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Criminal Background Clearance:</strong> Mandatory national police background certificate verifying zero prior convictions involving minors, physical assault, or moral turpitude.</li>
          <li><strong>Kukkiwon Dan Verification:</strong> Direct credential verification through the Kukkiwon Seoul master instructor database.</li>
          <li><strong>Safe Sport Certification:</strong> Mandatory completion of recognized child safeguarding, sports psychology, and emergency pediatric first aid courses.</li>
          <li><strong>Structured Reference Audits:</strong> Verified professional references from previous martial arts institutions or academic bodies.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="code-of-conduct" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          3. Instructor Code of Conduct
        </h2>
        <p>
          All instructors at Infinity Taekwondo adhere to a strict ethical mandate:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-1">
            <strong className="text-emerald-500 block">Required Standards</strong>
            <p className="text-zinc-600 dark:text-zinc-400 font-light">Praise effort and character; maintain professional distance; address all students with dignity; model the 5 Tenets at all times.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-1">
            <strong className="text-brand-red block">Strictly Prohibited</strong>
            <p className="text-zinc-600 dark:text-zinc-400 font-light">No verbal degradation, physical punishments as humiliation, private unobserved 1-on-1 sessions, or non-educational physical contact.</p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="physical-contact" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          4. Physical Contact &amp; Hands-On Adjustments
        </h2>
        <p>
          Taekwondo is a dynamic physical discipline. Hands-on adjustments (e.g. aligning knee angle for Yop Chagi, guiding chamber rotation) are conducted strictly under the following transparent rules:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Verbal Explanation First:</strong> The instructor must explain the adjustment verbally and demonstrate visually whenever feasible before hands-on guidance.</li>
          <li><strong>Consent &amp; Professional Boundaries:</strong> Hands-on adjustments are limited solely to instructional contact points (e.g. foot, ankle, shoulder, elbow, upper back) and never in private anatomical zones.</li>
          <li><strong>Right to Refuse:</strong> Any student may request non-contact verbal instruction without hesitation or penalty.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="open-dojang" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          5. Open Dojang &amp; Parental Visibility
        </h2>
        <p>
          Infinity Taekwondo enforces an open-door policy across all branches (The Factory Phnom Penh HQ &amp; BKK1 Elite Center):
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Unobstructed Viewing Windows:</strong> Parents and guardians are invited to observe all classes through full-glass viewing galleries or designated ringside seating.</li>
          <li><strong>No Closed-Door Training:</strong> Training sessions behind locked, frosted, or unmonitored doors are strictly prohibited under academy bylaws.</li>
          <li><strong>CCTV Monitoring:</strong> Common dojang training mats and hallway zones are continuously monitored with security cameras for safety documentation.</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section id="anti-bullying" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          6. Anti-Bullying &amp; Hazing Zero-Tolerance
        </h2>
        <p>
          Bullying, peer intimidation, verbal mockery, deliberate excessive striking in sparring, or traditional "hazing" rituals are strictly forbidden. Any student found engaging in bullying will face progressive disciplinary action, including suspension or permanent expulsion from the academy.
        </p>
      </section>

      {/* Section 7 */}
      <section id="digital-safety" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          7. Digital Communication &amp; Social Media
        </h2>
        <p>
          To protect student privacy and ensure healthy boundaries:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Instructors and coaches may NOT maintain private direct-message (DM) communications with minor students on personal social media accounts.</li>
          <li>All official academy communications regarding class schedules, tournament itineraries, and grading results must be channeled through official verified academy accounts and parent/guardian email or phone contacts.</li>
          <li>Media photographs of students are shared on academy channels only with written parental consent obtained upon enrollment.</li>
        </ul>
      </section>

      {/* Section 8 */}
      <section id="reporting" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          8. Reporting Incidents &amp; Confidential Desk
        </h2>
        <p>
          If a student, parent, coach, or observer witnesses or suspects any safeguarding infraction, they are urged to report it immediately without fear of retaliation:
        </p>
        <div className="p-5 rounded-xl bg-brand-red/5 border-l-4 border-brand-red space-y-2 text-xs">
          <strong className="text-zinc-900 dark:text-white font-bold block text-sm">
            Confidential Reporting Protocol
          </strong>
          <p>
            Reports are investigated by our independent Designated Safeguarding Lead within 24 hours. The identity of the reporting party remains confidential unless disclosure is legally required by law enforcement authorities.
          </p>
        </div>
      </section>

      {/* Section 9 */}
      <section id="contacts" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          9. Designated Safeguarding Contacts
        </h2>
        <div className="p-6 rounded-[14px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs space-y-3">
          <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white text-sm">
            <Mail className="w-4 h-4 text-brand-red" /> Infinity TKD Safeguarding &amp; Welfare Desk
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-zinc-600 dark:text-zinc-400 font-mono">
            <div>
              <span className="text-[10px] text-zinc-400 block">Direct Welfare Email:</span>
              <a href="mailto:safeguarding@infinitytkd.com" className="text-brand-red font-bold hover:underline">
                safeguarding@infinitytkd.com
              </a>
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 block">Emergency Welfare Hotline:</span>
              <a href="tel:+85512345678" className="text-zinc-900 dark:text-white font-bold hover:text-brand-red">
                +855 (0) 12 345 678
              </a>
            </div>
          </div>
          <div className="text-[11px] text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            Mailing Address: Factory Phnom Penh, Urban Village, National Road 2, Chak Angre Leu, Mean Chey, Phnom Penh, Cambodia.
          </div>
        </div>
      </section>
    </LegalLayout>
  )
}
