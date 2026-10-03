import { LegalLayout } from '@/components/LegalLayout'
import type { Metadata } from 'next'
import { Shield, Lock, Eye, FileCheck, AlertCircle, Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Infinity Taekwondo',
  description:
    'Infinity Taekwondo Privacy Policy - How we handle student records, emergency medical disclosures, Kukkiwon Dan registry, and media likeness rights across our Phnom Penh branches.',
}

export default function PrivacyPage() {
  const sidebar = (
    <>
      <a href="#summary" className="sidebar-link">
        Executive Summary
      </a>
      <a href="#information" className="sidebar-link">
        1. Information We Collect
      </a>
      <a href="#usage" className="sidebar-link">
        2. How We Use Student Data
      </a>
      <a href="#kukkiwon" className="sidebar-link">
        3. Kukkiwon Dan Registry
      </a>
      <a href="#medical" className="sidebar-link">
        4. Medical &amp; Emergency Safety
      </a>
      <a href="#media-rights" className="sidebar-link">
        5. Photography &amp; Video Likeness
      </a>
      <a href="#sharing" className="sidebar-link">
        6. Third-Party Sharing &amp; Non-Disclosure
      </a>
      <a href="#security" className="sidebar-link">
        7. Data Security &amp; Retention
      </a>
      <a href="#rights" className="sidebar-link">
        8. Parent &amp; Student Privacy Rights
      </a>
      <a href="#contact" className="sidebar-link">
        9. Privacy Officer Contact
      </a>
    </>
  )

  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Data Protection & Student Privacy"
      lastUpdated="August 2026"
      sidebar={sidebar}
      policyType="privacy"
    >
      {/* Executive Summary Callout Grid */}
      <div id="summary" className="p-6 rounded-[14px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red">
          <Shield className="w-4 h-4" /> At A Glance: Student Data Protection Commitment
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
          At <strong>Infinity Taekwondo</strong> (태권도 INFINITY), we treat student and youth privacy with the utmost discipline. We do not sell, rent, or monetize personal records. Below is our clear, transparent data protection framework.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs">
            <span className="font-bold text-zinc-900 dark:text-white block mb-0.5">
              🛡️ Zero Data Brokering
            </span>
            <span className="text-zinc-500 font-light">Student and parent records are never sold to external advertisers.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs">
            <span className="font-bold text-zinc-900 dark:text-white block mb-0.5">
              🏥 Medical Confidentiality
            </span>
            <span className="text-zinc-500 font-light">Allergy and injury records accessible only by certified head instructors.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs">
            <span className="font-bold text-zinc-900 dark:text-white block mb-0.5">
              🥋 Kukkiwon Dan Verification
            </span>
            <span className="text-zinc-500 font-light">Official examination metrics transmitted securely to Seoul, South Korea.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs">
            <span className="font-bold text-zinc-900 dark:text-white block mb-0.5">
              📸 Media Opt-Out Rights
            </span>
            <span className="text-zinc-500 font-light">Parents can opt-out of promotional photography via front desk form.</span>
          </div>
        </div>
      </div>

      <p>
        This Privacy Policy applies to all students, athletes, parents, guardians, and visitors across our Phnom Penh dojang branches (The Factory Phnom Penh Headquarters and BKK1 Elite Training Center) and digital platforms.
      </p>

      {/* SECTION 1 */}
      <h2 id="information">1. Information We Collect</h2>
      <p>
        To deliver safe, personalized martial arts instruction, track syllabus progression, and administer official rank certifications, we collect the following categories of information:
      </p>
      <ul>
        <li>
          <strong>Student &amp; Guardian Identity:</strong> Full legal name, preferred name, date of birth, gender, home address, emergency telephone numbers, and national identification/passport numbers (required specifically for international Kukkiwon Black Belt Dan registration).
        </li>
        <li>
          <strong>Medical &amp; Physical Safety Disclosures:</strong> Known allergies, respiratory conditions (e.g. asthma), cardiovascular history, prior musculoskeletal or joint injuries, and emergency physician contact info. This information is vital to prevent sparring injuries and calibrate cardiovascular loads.
        </li>
        <li>
          <strong>Attendance &amp; Syllabus Analytics:</strong> Mat check-ins, Poomsae accuracy scores, quarterly belt examination histories, competition records, and physical skill assessment metrics.
        </li>
        <li>
          <strong>Financial &amp; Billing Records:</strong> Tuition payment transaction references, payment dates, and enrolled membership plans. Note: We do not store raw credit card numbers on our local servers; payments are processed through PCI-compliant gateways.
        </li>
      </ul>

      {/* SECTION 2 */}
      <h2 id="usage">2. How We Use Student Data</h2>
      <p>Your information is used strictly for legitimate dojang operational and instructional purposes:</p>
      <ul>
        <li>
          <strong>Class &amp; Safety Management:</strong> Informing instructors of student physical limitations or injury recovery requirements before high-impact sparring or tricking drills.
        </li>
        <li>
          <strong>Curriculum &amp; Promotion Tracking:</strong> Verifying that minimum training hours and Poomsae requirements are completed before issuing formal belt promotion invitations.
        </li>
        <li>
          <strong>Competition Sanctioning:</strong> Registering competitive athletes with official tournament bodies such as the Cambodia Taekwondo Federation (CTF) and Asian Taekwondo Union (ATU).
        </li>
        <li>
          <strong>Parent &amp; Student Communications:</strong> Providing quarterly student progress reports, belt ceremony announcements, schedule updates, and membership renewal notifications.
        </li>
      </ul>

      {/* SECTION 3 */}
      <h2 id="kukkiwon">3. Kukkiwon Dan Registry &amp; Certification</h2>
      <p>
        Infinity Taekwondo is an officially accredited World Taekwondo Dan testing dojang. When an athlete tests for a 1st through 5th Dan/Poom Black Belt:
      </p>
      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 space-y-2">
        <p>
          • The candidate’s official English name, date of birth, nationality, passport number, and examination score sheet are securely submitted to <strong>Kukkiwon World Taekwondo Headquarters</strong> (Seoul, South Korea).
        </p>
        <p>
          • This information enters the permanent, globally recognized Kukkiwon international database, verifying that the student&rsquo;s Dan rank is recognized across 210+ member countries worldwide.
        </p>
      </div>

      {/* SECTION 4 */}
      <h2 id="medical">4. Medical &amp; Emergency Safety</h2>
      <p>
        In the rare event of a severe physical injury or acute medical condition occurring during training:
      </p>
      <ul>
        <li>
          Infinity Taekwondo certified first-aid staff will administer immediate emergency stabilization.
        </li>
        <li>
          Relevant medical history (allergies, pre-existing conditions) will be shared directly with licensed emergency medical personnel (paramedics, hospital emergency doctors) to facilitate prompt, life-saving treatment.
        </li>
        <li>
          Emergency contacts listed on the student&rsquo;s profile will be notified immediately.
        </li>
      </ul>

      {/* SECTION 5 */}
      <h2 id="media-rights">5. Photography &amp; Video Likeness</h2>
      <p>
        As part of our mission to celebrate martial arts excellence, Infinity Taekwondo regularly captures high-resolution photography, 240 FPS kinetic video, and editorial footage during regular classes, belt promotion ceremonies, and tournament competitions.
      </p>
      <ul>
        <li>
          <strong>Promotional &amp; Instructional Use:</strong> Footage may be used across our official website, social channels (YouTube, Instagram, Facebook), print banners, and instructional archives.
        </li>
        <li>
          <strong>Opt-Out Protocol:</strong> If a student or parent/guardian prefers not to have their likeness published in public media, they may submit a written Media Opt-Out Request at the front desk of either branch at any time. We will respect your choice and adjust our media documentation accordingly.
        </li>
      </ul>

      {/* SECTION 6 */}
      <h2 id="sharing">6. Third-Party Sharing &amp; Non-Disclosure</h2>
      <p>
        Infinity Taekwondo does <strong>NOT</strong> sell, trade, or commercialize student data. We only share information under strict operational necessity:
      </p>
      <ul>
        <li><strong>Authorized Sporters &amp; Federations:</strong> World Taekwondo, Kukkiwon, and official tournament governing boards for accreditation.</li>
        <li><strong>Secure Cloud Infrastructure:</strong> Encrypted cloud hosting and database systems adhering to industry security benchmarks (SOC 2, ISO 27001).</li>
        <li><strong>Legal Mandates:</strong> Where required by Cambodian law or lawful court subpoena.</li>
      </ul>

      {/* SECTION 7 */}
      <h2 id="security">7. Data Security &amp; Retention</h2>
      <p>
        We employ robust technical and organizational security measures to protect student records against unauthorized access, loss, or alteration:
      </p>
      <ul>
        <li>All digital records are encrypted in transit via SSL/TLS (HTTPS) and encrypted at rest.</li>
        <li>Access to confidential medical disclosures is restricted solely to authorized Master Instructors and operations managers.</li>
        <li>Student records are retained for the duration of active enrollment plus 5 years to maintain belt verification and graduation histories.</li>
      </ul>

      {/* SECTION 8 */}
      <h2 id="rights">8. Parent &amp; Student Privacy Rights</h2>
      <p>Under our privacy governance, you have the right to:</p>
      <ul>
        <li><strong>Access &amp; Review:</strong> Inspect the personal information we maintain regarding you or your child.</li>
        <li><strong>Rectification:</strong> Request prompt correction of inaccurate contact or medical details.</li>
        <li><strong>Data Portability:</strong> Request an official transcript of training attendance and belt history.</li>
        <li><strong>Erasure:</strong> Request deletion of non-essential records upon formal departure from the academy (excluding permanent Kukkiwon Dan archives).</li>
      </ul>

      {/* SECTION 9 */}
      <h2 id="contact">9. Privacy Officer Contact</h2>
      <p>
        If you have any questions, requests, or privacy concerns, please contact our Data Protection &amp; Operations Team:
      </p>
      <div className="p-5 rounded-[14px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs space-y-2">
        <p className="font-bold text-zinc-900 dark:text-white">Infinity Taekwondo Operations Directorate</p>
        <p className="text-zinc-500">📍 The Factory Phnom Penh HQ &bull; National Road 2, Chak Angre Leu, Phnom Penh</p>
        <p className="text-zinc-500">📍 BKK1 Elite Training Center &bull; St 310, Boeung Keng Kang 1, Phnom Penh</p>
        <p className="text-zinc-500">📧 Email: <a href="mailto:privacy@infinity-tkd.com" className="text-brand-red hover:underline font-bold">privacy@infinity-tkd.com</a></p>
        <p className="text-zinc-500">📞 Phone: +855 12 345 678 (Mon–Sat 9:00 AM – 7:00 PM ICT)</p>
      </div>
    </LegalLayout>
  )
}
