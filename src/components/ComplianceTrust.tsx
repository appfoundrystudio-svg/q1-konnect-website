import React from 'react';
import { ShieldCheck, Lock, FileCheck, CheckCircle2, Award, Building } from 'lucide-react';

export const ComplianceTrust: React.FC = () => {
  const trustPoints = [
    {
      title: 'PRC License Cross-Check',
      desc: 'All registered nurses must pass automated and manual PRC license verification before gaining access to hospital shift claiming.',
      icon: ShieldCheck,
    },
    {
      title: 'RA 10173 Data Privacy Act Compliant',
      desc: 'Institutional data encryption safeguards nurse personal data and hospital operational schedules in full adherence to Philippine law.',
      icon: Lock,
    },
    {
      title: 'NBI & Background Verification',
      desc: 'Background clearance documentation is archived and available for audit prior to on-site shift deployments.',
      icon: FileCheck,
    },
    {
      title: 'Standardized Clinical Onboarding',
      desc: 'Skills validation across BLS, ACLS, IV therapy, and bedside clinical specialty certifications.',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Trust, Safety & Regulatory Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Enterprise Compliance for Healthcare Leaders.
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            We operate with the rigorous standards required by Philippine hospital boards, 
            clinical accreditors, and health governance bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.title} 
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold shrink-0">
              ✓
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Are you a Hospital Chief Nurse or Medical Director?</h4>
              <p className="text-xs text-slate-500">We offer custom compliance audits and Memorandum of Agreement (MOA) reviews.</p>
            </div>
          </div>
          <a
            href="#schedule-meeting"
            className="text-xs font-bold text-teal-700 hover:text-teal-800 underline underline-offset-4 whitespace-nowrap"
          >
            Review Partnership Guidelines →
          </a>
        </div>

      </div>
    </section>
  );
};
