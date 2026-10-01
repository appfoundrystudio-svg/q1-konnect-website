import React from 'react';
import { 
  Stethoscope, 
  UserPlus, 
  CheckCircle, 
  Wallet, 
  CalendarRange, 
  Sparkles, 
  Award, 
  Plane, 
  QrCode, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';

interface NurseSectionProps {
  onOpenNurseModal: () => void;
}

export const NurseSection: React.FC<NurseSectionProps> = ({ onOpenNurseModal }) => {
  const nursePerks = [
    {
      title: 'Full Shift Sovereignty',
      desc: 'Work on your schedule. Choose morning, afternoon, night, or weekend reliever shifts around your family, studies, or primary job.',
      icon: CalendarRange,
      tag: 'Zero Burnout',
    },
    {
      title: 'Competitive, Guaranteed Pay',
      desc: 'Transparent per-shift compensation visible before you accept. No delayed salaries or bureaucratic paperwork.',
      icon: Wallet,
      tag: 'Fast Payouts',
    },
    {
      title: 'Digital Credential Passport',
      desc: 'Your verified PRC license, BLS, ACLS, IV therapy, and clinical hours saved securely in one profile recognized by top hospitals.',
      icon: ShieldCheck,
      tag: 'PRC Integrated',
    },
    {
      title: 'Tap & Go QR Check-In',
      desc: 'Arrive at the hospital, scan the department QR code, and start your shift. Your hours are digitally recorded with zero disputes.',
      icon: QrCode,
      tag: 'Digital Timesheet',
    },
    {
      title: 'Earn Badges & Clinical Trust',
      desc: 'Accumulate punctuality streaks, hospital supervisor commendations, and higher match priority for premium-rate shifts.',
      icon: Award,
      tag: 'Prestige & Rating',
    },
    {
      title: 'Stepping Stone to Overseas Careers',
      desc: 'Log certified bedside hours in accredited hospitals to strengthen your credential evaluation for NCLEX, UK NMC, or Middle East licenses.',
      icon: Plane,
      tag: 'Global Mobility',
    },
  ];

  return (
    <section id="nurses" className="py-24 bg-gradient-to-b from-slate-50 via-teal-50/30 to-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-900 border border-sky-200">
            <Stethoscope className="w-3.5 h-3.5 text-sky-700" />
            <span>For Registered Nurses & Healthcare Professionals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Your Hard-Earned License. Your Rules. Higher Earnings.
          </h2>

          <p className="text-lg text-slate-600">
            Join the modern nurse community. Gain access to premium per-diem and reliever shifts 
            at accredited hospitals, earn on your terms, and take pride in your clinical impact.
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
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
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

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-sky-700 group-hover:text-sky-800">
                  <span>Explore opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Free for Nurses Banner */}
        <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-sky-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
              <HeartHandshake className="w-3.5 h-3.5" />
              100% Free For All Healthcare Professionals
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              No Registration Fees. No Deductions from Your Shift Earnings.
            </h3>
            <p className="text-sm sm:text-base text-teal-100 leading-relaxed">
              We believe nurses are the foundation of healthcare. When a hospital posts a ₱2,800 shift, 
              that entire rate belongs to you. No hidden surprise cuts.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenNurseModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-teal-900 bg-white hover:bg-slate-100 transition-colors shadow-lg cursor-pointer"
              >
                <UserPlus className="w-4 h-4 text-teal-700" />
                <span>Join Nurse Talent Pool Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
