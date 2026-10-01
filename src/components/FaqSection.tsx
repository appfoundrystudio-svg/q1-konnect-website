import React, { useState } from 'react';
import { ChevronDown, Building2, Stethoscope, HelpCircle } from 'lucide-react';
import { Audience } from '../types/landing';

export const FaqSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Audience>('hospital');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const hospitalFaqs = [
    {
      q: 'How does Q1 Konnect verify nurse licenses and clinical credentials?',
      a: 'Every registered nurse must submit their official Professional Regulation Commission (PRC) license number, which undergoes real-time validation. We also verify secondary certifications (BLS, ACLS, IV Therapy, NCLEX) and NBI background clearances before any nurse is permitted to accept hospital shifts.',
    },
    {
      q: 'How fast can an emergency shift vacancy be filled?',
      a: 'For urgent call-outs, our automated matching engine broadcasts the vacancy immediately to qualified nurses within your facility’s target radius. On average, urgent shifts are confirmed and accepted in under 20 to 30 minutes.',
    },
    {
      q: 'How does attendance tracking and timesheet reconciliation work?',
      a: 'We eliminate disputed paper timecards. When a nurse arrives on-site, they scan a unique department QR code verified against your hospital’s geofenced GPS coordinates. When the shift concludes, the supervisor digitally signs off, and an itemized invoice is automatically updated.',
    },
    {
      q: 'Are we locked into expensive long-term retainer contracts?',
      a: 'No. Unlike traditional staffing agencies that demand rigid monthly retainers and 35-50% markups, Q1 Konnect operates with transparent, pay-as-you-use platform pricing. You only pay a modest tech fee when shifts are successfully completed.',
    },
    {
      q: 'Can we manage our internal hospital float pool on Q1 Konnect?',
      a: 'Yes! Q1 Konnect supports a hybrid workforce model. You can first broadcast vacancies to your internal staff float pool. If the shift remains open after a designated window, it can automatically cascade to the verified external nurse network.',
    },
  ];

  const nurseFaqs = [
    {
      q: 'Does it cost anything for nurses to join or accept shifts?',
      a: 'No. Q1 Konnect is 100% free for nurses and healthcare professionals. We never charge registration fees, subscription costs, or take deductions from your advertised shift compensation.',
    },
    {
      q: 'How quickly do I receive my shift earnings?',
      a: 'Once your shift supervisor signs off on your completed hours via QR, your earnings are credited to your in-app digital wallet. You can withdraw directly to GCash, Maya, or your Philippine bank account.',
    },
    {
      q: 'Can I accept reliever shifts if I already work a full-time hospital job?',
      a: 'Absolutely. Many nurses on Q1 Konnect maintain full-time appointments and utilize our platform to pick up flexible reliever shifts during their off days or scheduled leaves to boost their income.',
    },
    {
      q: 'What certifications and documents do I need to register?',
      a: 'You will need an active PRC Registered Nurse license, valid government ID, and your nursing diploma. Relevant specialty certificates (such as BLS, ACLS, IV therapy, or hospital employment certificates) will qualify you for higher-tier shifts.',
    },
    {
      q: 'Will my shifts count toward international clinical experience requirements?',
      a: 'Yes. All completed shifts are logged in your verified digital credential passport with hospital name, ward, and supervised hours, providing a documented clinical audit trail valuable for foreign credential assessments (e.g. CGFNS, NCLEX, UK NMC).',
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
            Learn more about our verification protocols, operational logistics, and terms.
          </p>

          {/* Toggle */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <button
                onClick={() => {
                  setActiveTab('hospital');
                  setOpenIndex(0);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'hospital'
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>For Hospitals</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('nurse');
                  setOpenIndex(0);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'nurse'
                    ? 'bg-sky-600 text-white shadow-md'
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
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-slate-900 hover:text-teal-700 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-600' : ''
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
