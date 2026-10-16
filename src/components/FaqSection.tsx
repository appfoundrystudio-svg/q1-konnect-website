import React, { useState } from 'react';
import { ChevronDown, Building2, Stethoscope, HelpCircle } from 'lucide-react';
import { Audience } from '../types/landing';

export const FaqSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Audience>('hospital');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const hospitalFaqs = [
    {
      q: 'Is Q1 Konnect currently live, and what is the rollout timeline?',
      a: 'The full interactive prototype is completed, and the production MVP is actively being engineered. To ensure a thriving marketplace, we are currently seeding both sides: securing Pioneer Hospital Partner agreements to map shift demand, while pre-registering licensed nurses. We will be exhibiting our live prototype at the PHAPi National Convention this November 2026, followed by controlled pilot shift rollouts in designated hospital units.',
    },
    {
      q: 'Do we need to schedule an appointment to see Q1 Konnect at the PHAPi convention?',
      a: 'No prior appointment is needed! All convention delegates are welcome to walk into our exhibit booth anytime during exhibit hours for a live, interactive prototype demo and to meet our founding team. However, if your hospital executive team prefers a dedicated private briefing (online, at your hospital, or at the booth), you may submit a partnership inquiry here.',
    },
    {
      q: 'How does Q1 Konnect verify nurse licenses and clinical credentials?',
      a: 'Every registered nurse must submit their official Professional Regulation Commission (PRC) license number, which undergoes verification against official databases. We also verify secondary certifications (BLS, ACLS, IV Therapy) and clinical tenure before any nurse is permitted to accept shifts once matching goes live.',
    },
    {
      q: 'What are the benefits of joining as a Pioneer Hospital Partner now?',
      a: 'Founding hospital partners receive zero setup fees, direct input into shift workflow and unit specialization features, priority access to our pre-registered nurse talent pool during pilot rollout, and dedicated onboarding support.',
    },
    {
      q: 'How does attendance tracking and timesheet reconciliation work?',
      a: 'We eliminate disputed paper timecards. When a nurse arrives on-site, they scan a unique department QR code verified against your hospital’s geofenced GPS coordinates. When the shift concludes, the supervisor digitally signs off, and an itemized digital shift record is automatically generated with transparent, agreed terms.',
    },
  ];

  const nurseFaqs = [
    {
      q: 'Does it cost anything for nurses to join or accept shifts?',
      a: 'No. Creating a profile and joining our nurse talent pool is completely free for nurses. Shift rates are shown upfront with transparent terms, so you always know exactly what you will earn before accepting a shift.',
    },
    {
      q: 'When will hospital shifts become available for nurses?',
      a: 'For any staffing app to work, partner hospitals must first define shift requirements, and a verified pool of nurses must be ready. We are exhibiting at the PHAPi convention in November 2026 to sign pioneer hospital partnerships. Pre-registering today ensures your PRC credentials are pre-verified so you receive immediate priority access as pilot shifts open.',
    },
    {
      q: 'How does shift pay work once live?',
      a: 'Once your hospital supervisor signs off on your completed hours via QR, your agreed shift earnings are credited directly to your digital wallet. You can transfer funds directly to GCash, Maya, or any Philippine bank account.',
    },
    {
      q: 'Can I accept reliever shifts if I already work a full-time hospital job?',
      a: 'Yes! Q1 Konnect is designed to provide shift autonomy. Many nurses plan to take occasional relief shifts on their scheduled off-days or leaves to earn supplemental income without committing to another rigid contract.',
    },
    {
      q: 'What documents do I need to pre-register today?',
      a: 'You only need an active PRC Registered Nurse license number and contact details to join the inaugural registry. You can also specify your clinical specialties (ICU, ER, OR, Ward, Hemodialysis) so we prioritize matching your skillset.',
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
