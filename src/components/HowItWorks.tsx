import React, { useState } from 'react';
import { 
  Building2, 
  Stethoscope, 
  FileText, 
  UserCheck, 
  CheckCircle2, 
  Wallet, 
  BellRing, 
  ShieldCheck, 
  CalendarCheck2,
  ArrowRight
} from 'lucide-react';
import { Audience } from '../types/landing';

interface HowItWorksProps {
  onOpenScheduleModal: () => void;
  onOpenNurseModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onOpenScheduleModal,
  onOpenNurseModal
}) => {
  const [activeTab, setActiveTab] = useState<Audience>('hospital');

  const hospitalSteps = [
    {
      step: '01',
      title: 'Broadcast Open Shift in 60s',
      desc: 'Define your vacant shifts (ICU, ER, General Ward, Hemodialysis), specify required certifications (BLS, ACLS), and set your competitive shift compensation.',
      icon: FileText,
      detail: 'Supports urgent relief calls or monthly roster schedules.'
    },
    {
      step: '02',
      title: 'Automated PRC & Credential Matching',
      desc: 'Our clinical matching engine alerts nearby qualified registered nurses with active PRC licenses and verified bedside tenure matching your ward criteria.',
      icon: UserCheck,
      detail: 'View applicant ratings, endorsements, and verification badges in real-time.'
    },
    {
      step: '03',
      title: 'Geofenced QR Attendance & Seamless Billing',
      desc: 'The nurse checks in on-site using the department QR code. When the shift finishes, timesheets are automatically reconciled with zero paperwork.',
      icon: CalendarCheck2,
      detail: 'Consolidated, audit-ready hospital invoices with zero agency markups.'
    },
  ];

  const nurseSteps = [
    {
      step: '01',
      title: 'Pre-Register Your PRC Profile',
      desc: 'Sign up, enter your PRC license number, upload your credentials (BLS, ACLS, certifications), and set your preferred hospital zones and travel radius.',
      icon: ShieldCheck,
      detail: 'Our clinical compliance desk validates credentials upon submission.'
    },
    {
      step: '02',
      title: 'Discover & Accept Reliever Shifts',
      desc: 'Receive immediate push notifications for shifts matching your specialty. Review facility name, ward, hours, and pay rate upfront before accepting.',
      icon: BellRing,
      detail: 'One-click application with full transparency.'
    },
    {
      step: '03',
      title: 'Scan QR at Ward & Receive Direct Pay',
      desc: 'Arrive at the medical facility, scan the ward QR code to clock in, deliver compassionate clinical care, and get paid promptly into your digital wallet.',
      icon: Wallet,
      detail: 'Transfer funds straight to GCash, Maya, or any Philippine bank.'
    },
  ];

  const steps = activeTab === 'hospital' ? hospitalSteps : nurseSteps;

  return (
    <section id="how-it-works" className="py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
            Streamlined Operational Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            How Q1 Konnect Works in 3 Simple Steps.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A friction-free bridge between healthcare facilities and clinical professionals, 
            eliminating endless phone calls, paper logs, and staffing anxiety.
          </p>

          {/* Tab Selector */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setActiveTab('hospital')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'hospital'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-4 h-4 text-sky-400" />
                <span>For Hospital Partners</span>
              </button>
              <button
                onClick={() => setActiveTab('nurse')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'nurse'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Stethoscope className="w-4 h-4" />
                <span>For Registered Nurses</span>
              </button>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.step}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 hover:border-sky-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-300 font-heading group-hover:text-sky-600 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          {activeTab === 'hospital' ? (
            <button
              onClick={onOpenScheduleModal}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-slate-950 hover:bg-black shadow-lg shadow-slate-900/20 transition-all cursor-pointer transform hover:-translate-y-0.5 border border-slate-800"
            >
              <CalendarCheck2 className="w-4 h-4 text-sky-400" />
              <span>Schedule a 20-Min Hospital Walkthrough / PHAPi Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onOpenNurseModal}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Pre-Register for the Nurse Pool</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
