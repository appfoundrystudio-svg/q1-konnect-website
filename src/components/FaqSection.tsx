import React, { useState } from 'react';
import { ChevronDown, Building2, Stethoscope, HelpCircle } from 'lucide-react';
import { Audience } from '../types/landing';

export const FaqSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Audience>('hospital');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const hospitalFaqs = [
    {
      q: 'When is Q1 Konnect officially launching?',
      a: 'We are officially launching at the Private Hospitals Association of the Philippines (PHAPi) Annual National Convention this November 2026. Healthcare facilities that pre-register now join our Founding Hospital Partner cohort with zero onboarding fees and priority clinical pool allocation.',
    },
    {
      q: 'How does Q1 Konnect verify nurse licenses and clinical credentials?',
      a: 'Every registered nurse must submit their official Professional Regulation Commission (PRC) license number, which undergoes real-time validation. We also verify secondary certifications (BLS, ACLS, IV Therapy, NCLEX) and NBI background clearances before any nurse is permitted to accept hospital shifts.',
    },
    {
      q: 'Can our hospital leadership meet your team in person?',
      a: 'Yes! You can meet our founders and clinical architects in person at our PHAPi exhibit booth this November, or book an executive online consultation with our partnerships team today.',
    },
    {
      q: 'Are we locked into expensive long-term retainer contracts?',
      a: 'No. Unlike traditional staffing agencies that demand rigid monthly retainers and 35-50% markups, Q1 Konnect operates on a transparent, pay-as-you-use platform model. You only pay a modest tech fee when shifts are successfully completed.',
    },
    {
      q: 'How does attendance tracking and timesheet reconciliation work?',
      a: 'We eliminate disputed paper timecards. When a nurse arrives on-site, they scan a unique department QR code verified against your hospital’s geofenced GPS coordinates. When the shift concludes, the supervisor digitally signs off, and an itemized invoice is automatically updated.',
    },
  ];

  const nurseFaqs = [
    {
      q: 'Does it cost anything for nurses to join or accept shifts?',
      a: 'No. Q1 Konnect is 100% free for nurses and healthcare professionals. We never charge registration fees, subscription costs, or take deductions from your advertised shift compensation.',
    },
    {
      q: 'When will shifts become available for pre-registered nurses?',
      a: 'Shift matching officially goes live alongside our launch at the PHAPi convention in November 2026. Pre-registering today ensures your PRC credentials are pre-verified so you receive immediate first-access notifications the moment hospital shifts are posted.',
    },
    {
      q: 'How quickly do I receive my shift earnings?',
      a: 'Once your shift supervisor signs off on your completed hours via QR, your earnings are credited to your in-app digital wallet. You can withdraw directly to GCash, Maya, or your Philippine bank account.',
    },
    {
      q: 'Can I accept reliever shifts if I already work a full-time hospital job?',
      a: 'Absolutely. Many nurses use Q1 Konnect to pick up flexible reliever shifts during their off days or scheduled leaves to boost their income without taking on another rigid full-time commitment.',
    },
    {
      q: 'What certifications and documents do I need to pre-register?',
      a: 'You will need an active PRC Registered Nurse license number and contact details to get started. Relevant specialty certificates (such as BLS, ACLS, IV therapy, or hospital employment records) can be attached to qualify for higher-tier shifts.',
    },
  ];

  const currentFaqs = activeTab === 'hospital' ? hospitalFaqs : nurseFaqs;

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200 text-slate-800 border border-slate-300">
            <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Got Questions? We’ve Got Answers.
          </h2>

          <p className="text-slate-600">
            Learn more about our verification protocols, November PHAPi launch, and operational logistics.
          </p>

          {/* Toggle */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <button
                onClick={() => {
                  setActiveTab('hospital');
                  setOpenIndex(0);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'hospital'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-4 h-4 text-sky-400" />
                <span>For Hospitals</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('nurse');
                  setOpenIndex(0);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'nurse'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Stethoscope className="w-4 h-4" />
                <span>For Nurses</span>
              </button>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {currentFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-slate-900 hover:text-sky-600 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
