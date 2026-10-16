import React from 'react';
import { 
  Stethoscope, 
  UserPlus, 
  Wallet, 
  CalendarRange, 
  Award, 
  Plane, 
  QrCode, 
  ShieldCheck, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

interface NurseSectionProps {
  onOpenNurseModal: () => void;
}

export const NurseSection: React.FC<NurseSectionProps> = ({ onOpenNurseModal }) => {
  const nursePerks = [
    {
      title: 'Full Shift Sovereignty',
      desc: 'Work on your schedule. Choose morning, afternoon, night, or weekend reliever shifts around your family, masteral studies, or primary hospital rotation.',
      icon: CalendarRange,
      tag: 'Zero Burnout',
    },
    {
      title: 'Competitive, Guaranteed Pay',
      desc: 'Transparent per-shift compensation visible before you accept. Clear terms with direct digital wallet payouts.',
      icon: Wallet,
      tag: 'Fast Payouts',
    },
    {
      title: 'Digital Credential Passport',
      desc: 'Your verified PRC license, BLS, ACLS, IV therapy, and bedside hours saved securely in one profile recognized by accredited facilities.',
      icon: ShieldCheck,
      tag: 'PRC Integrated',
    },
    {
      title: 'Tap & Go QR Check-In',
      desc: 'Arrive at the medical center, scan the department QR code, and start your shift. Your hours are recorded with zero paperwork disputes.',
      icon: QrCode,
      tag: 'Digital Timesheet',
    },
    {
      title: 'Earn Badges & Clinical Trust',
      desc: 'Accumulate punctuality streaks, hospital supervisor commendations, and priority match status for premium specialty shifts upon launch.',
      icon: Award,
      tag: 'Prestige & Rating',
    },
    {
      title: 'Stepping Stone to Overseas Careers',
      desc: 'Log certified bedside hours in accredited hospitals to strengthen your documentation for NCLEX, UK NMC, or Middle East credentials.',
      icon: Plane,
      tag: 'Global Mobility',
    },
  ];

  return (
    <section id="nurses" className="py-24 bg-gradient-to-b from-slate-50 via-sky-50/20 to-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
            <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
            <span>For Registered Nurses & Healthcare Professionals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-heading">
            Your Hard-Earned License. Your Rules. Higher Earnings.
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Be part of the pioneer nurse registry being established ahead of hospital deployment. 
            Pre-register your PRC credentials today to unlock priority access to shifts as partner hospitals come online.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {nursePerks.map((perk) => {
            const IconComponent = perk.icon;
            return (
              <div
                key={perk.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {perk.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-2.5">
                    {perk.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-sky-600 group-hover:text-sky-700">
                  <span>Learn how shifts work</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Nurse Partnership Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
              <HeartHandshake className="w-3.5 h-3.5" />
              Direct Nurse Partnership
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Upfront Shift Transparency. Direct Wallet Payouts.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We believe bedside nurses are the heartbeat of healthcare. Every shift clearly displays its ward requirements, schedule, and agreed compensation before you accept—paid directly to your digital wallet upon verified shift completion.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenNurseModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 transition-colors shadow-lg cursor-pointer"
              >
                <UserPlus className="w-4 h-4 text-slate-900" />
                <span>Pre-Register as a Pioneer Nurse</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
