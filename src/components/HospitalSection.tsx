import React from 'react';
import { 
  Building2, 
  Calendar, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  Users2, 
  BadgePercent, 
  ArrowRight,
  Activity,
  HeartPulse,
  QrCode
} from 'lucide-react';

interface HospitalSectionProps {
  onOpenScheduleModal: () => void;
}

export const HospitalSection: React.FC<HospitalSectionProps> = ({ onOpenScheduleModal }) => {
  const hospitalPillars = [
    {
      title: 'Rapid Shift Broadcasting',
      desc: 'Post emergency relief or planned surge shifts in under 60 seconds with specific ward requirements, skillsets, and hourly rates.',
      icon: Clock,
      badge: '< 20 Min Target',
    },
    {
      title: 'Mandatory PRC Credential Checks',
      desc: 'Automated verification against PRC license registries, clinical background checks, and certificate reviews before any nurse can claim shifts.',
      icon: ShieldCheck,
      badge: 'Zero Compliance Risk',
    },
    {
      title: 'Geofenced QR Time & Attendance',
      desc: 'Nurses clock in on-site using tamper-proof QR scanning verified against hospital geolocation coordinates. Zero disputed paper timecards.',
      icon: QrCode,
      badge: 'Audit-Proof',
    },
    {
      title: 'Transparent Shift Economics',
      desc: 'Bypass opaque agency intermediaries. Hospital administrators set transparent shift rates upfront with direct nurse dispatch and predictable platform infrastructure.',
      icon: BadgePercent,
      badge: 'Direct Economics',
    },
    {
      title: 'Dual Internal & External Pool',
      desc: 'Deploy your internal float nurses first. If vacancies persist, automatically cascade the shift to our verified community pool.',
      icon: Users2,
      badge: 'Operational Agility',
    },
    {
      title: 'Objective Clinical Match Score',
      desc: 'Proprietary clinical scoring assesses bedside tenure, specialty certifications (BLS/ACLS/IV), and historical shift reliability.',
      icon: Activity,
      badge: 'Smart Matching',
    },
  ];

  const specialties = [
    'Intensive Care Unit (ICU / CCU)',
    'Emergency Department (ED / ER)',
    'Operating Room (OR / PACU)',
    'Hemodialysis & Nephrology Units',
    'General Medical-Surgical Ward',
    'Pediatrics & Neonatal ICU (NICU)',
    'Oncology & Chemotherapy Units',
    'Ambulatory & Outpatient Clinics'
  ];

  return (
    <section id="hospitals" className="py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 text-sky-400 border border-slate-800">
            <Building2 className="w-3.5 h-3.5" />
            <span>For Healthcare Facilities & Hospital Executives</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-heading">
            Solve Staffing Bottlenecks With Total Clinical Confidence.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600">
            Engineered specifically for Chief Nursing Officers, Medical Directors, and Hospital HR Leaders 
            collaborating with us ahead of our showcase at the <strong>PHAPi National Convention in November</strong>.
          </p>
        </div>

        {/* Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hospitalPillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-sky-600 group-hover:text-sky-700">
                  <span>Explore feature details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Specialties Supported */}
        <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <HeartPulse className="w-3.5 h-3.5" />
                Comprehensive Specialty Roster
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Qualified Registered Nurses for Every High-Acuity Unit.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need certified ICU practitioners for emergency intubations or experienced 
                renal nurses for hemodialysis rotations, Q1 Konnect validates specialized training 
                before candidates ever enter your ward.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={onOpenScheduleModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 transition-colors shadow-lg cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Connect With Our Team / Hospital Inquiry</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {specialties.map((spec) => (
                <div 
                  key={spec} 
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
