import { LegalLayout } from '@/components/LegalLayout'
import type { Metadata } from 'next'
import {
  Zap,
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Lock,
  Activity,
  HeartPulse,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anti-Doping & Clean Sport Policy | Infinity Taekwondo',
  description:
    'Infinity Taekwondo Anti-Doping Policy - Full adherence to WADA, World Taekwondo (WT), and Southeast Asian Anti-Doping Organization (SEARADO) protocols, prohibited substances list, TUE exemptions, and clean athlete education.',
}

export default function AntiDopingPage() {
  const sidebar = (
    <>
      <a href="#summary" className="sidebar-link">
        Executive Summary
      </a>
      <a href="#compliance" className="sidebar-link">
        1. WADA &amp; World Taekwondo Compliance
      </a>
      <a href="#prohibited-list" className="sidebar-link">
        2. Prohibited Substances &amp; Methods
      </a>
      <a href="#athlete-responsibility" className="sidebar-link">
        3. Strict Liability Principle
      </a>
      <a href="#tue" className="sidebar-link">
        4. Therapeutic Use Exemptions (TUE)
      </a>
      <a href="#supplements" className="sidebar-link">
        5. Nutritional Supplements &amp; Contamination Risks
      </a>
      <a href="#education" className="sidebar-link">
        6. Mandatory Athlete Education
      </a>
      <a href="#sanctions" className="sidebar-link">
        7. Violations, Sanctions &amp; Testing
      </a>
      <a href="#reporting" className="sidebar-link">
        8. Integrity Hotline &amp; Clean Sport Desk
      </a>
    </>
  )

  return (
    <LegalLayout
      title="Anti-Doping & Clean Sport Policy"
      subtitle="Fair Play, Athletic Integrity & Health Protection"
      lastUpdated="August 2026"
      sidebar={sidebar}
      policyType="anti-doping"
    >
      {/* Executive Summary */}
      <div id="summary" className="p-6 rounded-[14px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red">
          <Zap className="w-4 h-4" /> At A Glance: Clean Sport &amp; Fair Play
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
          Infinity Taekwondo upholds the fundamental spirit of fair play, ethical martial conduct, and physical health protection. We strictly prohibit the use of performance-enhancing drugs (PEDs), prohibited masking agents, and illicit methods in full accordance with the <strong>World Anti-Doping Code (WADA)</strong> and <strong>World Taekwondo (WT) Anti-Doping Rules</strong>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">Global Standard</span>
            <strong className="text-xs font-bold text-zinc-900 dark:text-white">100% WADA Code Alignment</strong>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">Legal Doctrine</span>
            <strong className="text-xs font-bold text-zinc-900 dark:text-white">Strict Liability Rule</strong>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">Testing Authorization</span>
            <strong className="text-xs font-bold text-brand-red">In- &amp; Out-of-Competition</strong>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <section id="compliance" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          1. WADA &amp; World Taekwondo Compliance
        </h2>
        <p>
          Infinity Taekwondo aligns with the World Anti-Doping Agency (WADA), the International Testing Agency (ITA), the World Taekwondo Anti-Doping Department, and regional bodies such as the Southeast Asian Regional Anti-Doping Organization (SEARADO).
        </p>
        <p>
          These rules apply unconditionally to all athletes representing Infinity Taekwondo in cadet, junior, senior, and master divisions at local, national, and international sanctioned competitions.
        </p>
      </section>

      {/* Section 2 */}
      <section id="prohibited-list" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          2. Prohibited Substances &amp; Methods
        </h2>
        <p>
          Infinity Taekwondo enforces the official annual <em>WADA Prohibited List</em>. Substances and methods are banned under three universal criteria: (1) it enhances sports performance, (2) it poses an actual or potential health risk to the athlete, and (3) it violates the spirit of sport.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-1">
            <strong className="text-brand-red block">Banned at All Times (In &amp; Out of Competition)</strong>
            <ul className="list-disc pl-4 space-y-1 text-zinc-600 dark:text-zinc-400 font-light">
              <li>Anabolic androgenic steroids (AAS)</li>
              <li>Peptide hormones &amp; growth factors (EPO, hGH)</li>
              <li>Beta-2 agonists &amp; hormone modulators</li>
              <li>Diuretics &amp; rapid weight-cutting masking agents</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-1">
            <strong className="text-amber-500 block">Banned In-Competition</strong>
            <ul className="list-disc pl-4 space-y-1 text-zinc-600 dark:text-zinc-400 font-light">
              <li>Central nervous system stimulants (Amphetamines)</li>
              <li>Narcotics &amp; opioid analgesics</li>
              <li>Cannabinoids (natural &amp; synthetic)</li>
              <li>Systemic glucocorticoids</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="athlete-responsibility" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          3. Strict Liability Principle
        </h2>
        <p>
          Under international sports law, the <strong>Strict Liability Principle</strong> applies: an athlete is strictly and personally responsible for any substance found in their body specimen, regardless of whether the ingestion was intentional, negligent, or accidental.
        </p>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-zinc-800 dark:text-zinc-200">
          <strong>Key Rule for Athletes:</strong> "You are solely responsible for what goes into your body. Claiming a supplement was contaminated or recommended by a third party does not prevent sanction."
        </div>
      </section>

      {/* Section 4 */}
      <section id="tue" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          4. Therapeutic Use Exemptions (TUE)
        </h2>
        <p>
          Athletes who have a documented legitimate medical condition requiring the use of a prohibited substance (e.g. insulin for diabetes, inhalers for chronic asthma) must apply for a <strong>Therapeutic Use Exemption (TUE)</strong> before competing.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>TUE applications must be submitted with comprehensive medical diagnostic reports from licensed physicians.</li>
          <li>Athletes competing in international WT events must secure approval from the World Taekwondo TUE Committee at least 30 days prior to the tournament.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="supplements" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          5. Nutritional Supplements &amp; Contamination Risks
        </h2>
        <p>
          Over-the-counter dietary supplements, pre-workouts, and fat-burners frequently contain unlisted stimulants or steroid precursors due to poor factory quality control.
        </p>
        <p>
          Infinity Taekwondo enforces a <strong>"Food First" Philosophy</strong>. Athletes are strongly discouraged from consuming uncertified supplements. Any required supplementation must be third-party tested and batch-certified by recognized testing bodies (such as <em>Informed Sport</em> or <em>NSF Certified for Sport</em>).
        </p>
      </section>

      {/* Section 6 */}
      <section id="education" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          6. Mandatory Athlete Education
        </h2>
        <p>
          All competitive team athletes, parents of minor competitors, and instructional staff must complete annual clean sport training modules via WADA's official Anti-Doping Education and Learning platform (ADEL) or regional federation seminars.
        </p>
      </section>

      {/* Section 7 */}
      <section id="sanctions" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          7. Violations, Sanctions &amp; Testing
        </h2>
        <p>
          Anti-Doping Rule Violations (ADRV) include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Presence of a prohibited substance or its metabolites in a biological sample</li>
          <li>Refusing, evading, or failing to submit to sample collection without compelling justification</li>
          <li>Tampering or attempting to tamper with any part of doping control</li>
          <li>Trafficking, administering, or assisting in the administration of prohibited substances</li>
        </ul>
        <p className="pt-2">
          Confirmed violations result in official disqualification of tournament results, forfeiture of medals, mandatory multi-year suspensions from all sport participation, and permanent expulsion from Infinity Taekwondo.
        </p>
      </section>

      {/* Section 8 */}
      <section id="reporting" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
          8. Integrity Hotline &amp; Clean Sport Desk
        </h2>
        <div className="p-6 rounded-[14px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs space-y-3">
          <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white text-sm">
            <Mail className="w-4 h-4 text-brand-red" /> Infinity TKD Anti-Doping Compliance Bureau
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-zinc-600 dark:text-zinc-400 font-mono">
            <div>
              <span className="text-[10px] text-zinc-400 block">Clean Sport Inquiries &amp; TUEs:</span>
              <a href="mailto:antidoping@infinitytkd.com" className="text-brand-red font-bold hover:underline">
                antidoping@infinitytkd.com
              </a>
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 block">Confidential Whistleblower Desk:</span>
              <a href="mailto:integrity@infinitytkd.com" className="text-zinc-900 dark:text-white font-bold hover:text-brand-red">
                integrity@infinitytkd.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </LegalLayout>
  )
}
