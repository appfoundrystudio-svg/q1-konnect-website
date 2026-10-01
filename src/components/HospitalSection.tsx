import React from 'react';
import { 
  Building2, 
  Calendar, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  Users2, 
  BadgePercent, 
  FileCheck2, 
  ArrowRight,
  Stethoscope,
  Activity,
  HeartPulse,
  Sparkles,
  QrCode
} from 'lucide-react';

interface HospitalSectionProps {
  onOpenScheduleModal: () => void;
}

export const HospitalSection: React.FC<HospitalSectionProps> = ({ onOpenScheduleModal }) => {
  const hospitalPillars = [
    {
      title: 'Rapid Shift Broadcasting',
      desc: 'Post emergency relief or planned surge shifts in under 60 seconds with specific ward, skills, and shift duration.',
      icon: Clock,
      badge: '< 20 Min Match',
    },
    {
      title: '100% Verified PRC Credentials',
      desc: 'Every candidate undergoes automated PRC license validation, clinical background checks, and certificate review before acceptance.',
      icon: ShieldCheck,
      badge: 'Zero Compliance Risk',
    },
    {
      title: 'Geofenced QR Time & Attendance',
      desc: 'Nurses clock in via tamper-proof QR scanning verified against hospital geolocation coordinates. Say goodbye to disputed paper timecards.',
      icon: QrCode,
      badge: 'Audit-Ready',
    },
    {
      title: 'Eliminate 35%+ Agency Markups',
      desc: 'Traditional staffing agencies inflate hourly fees by 30-50%. Q1 Konnect charges a transparent, low platform fee with zero lock-in contracts.',
      icon: BadgePercent,
      badge: '35-40% Cost Savings',
    },
    {
      title: 'Dual Internal & External Pool',
      desc: 'Empower your hospital to deploy internal float staff first, then effortlessly seamlessly backfill remaining vacancies with our vetted community pool.',
      icon: Users2,
      badge: 'Maximum Efficiency',
    },
    {
      title: 'Instant Candidate Matching Score',
      desc: 'Proprietary clinical scoring assesses specialty experience, bedside tenure, hospital endorsements, and historical punctuality.',
      icon: Activity,
      badge: 'AI Smart Match',
    },
  ];

  const specialties = [
    'Intensive Care Unit (ICU / CCU)',
    'Emergency Department (ED / ER)',
    'Operating Room (OR / PACU)',
    'Hemodialysis & Nephrology',
    'General Medical-Surgical Ward',
    'Pediatrics & Neonatal ICU (NICU)',
    'Oncology & Chemo Units',
    'Ambulatory & Outpatient Clinics'
  ];

  return (
    <section id="hospitals" className="py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-900 border border-teal-200">
            <Building2 className="w-3.5 h-3.5 text-teal-700" />
            <span>For Hospitals, Medical Centers & Clinics</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Solve Staffing Bottlenecks With Complete Clinical Confidence.
          </h2>
          
          <p className="text-lg text-slate-600">
            Designed specifically for Chief Nursing Officers, HR Directors, and Hospital Administrators 
            who demand reliable coverage, verified competence, and transparent operational budgeting.
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
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
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

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-teal-700 group-hover:text-teal-800">
                  <span>Learn how this works</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Specialties Supported */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <HeartPulse className="w-3.5 h-3.5" />
                Comprehensive Specialty Roster
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Qualified Registered Nurses for Every High-Acuity Ward.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need certified ICU practitioners for emergency intubations or experienced 
                renal nurses for hemodialysis rotations, Q1 Konnect filters candidates by validated 
                clinical training.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={onOpenScheduleModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors shadow-lg cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Facility Consultation</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {specialties.map((spec) => (
                <div 
                  key={spec} 
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-teal-500/50 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
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
