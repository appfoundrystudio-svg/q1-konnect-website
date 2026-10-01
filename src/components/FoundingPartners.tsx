import React from 'react';
import { Building2, Stethoscope, Award, CheckCircle2, Calendar, UserPlus, ArrowRight, Sparkles } from 'lucide-react';

interface FoundingPartnersProps {
  onOpenScheduleModal: () => void;
  onOpenNurseModal: () => void;
}

export const FoundingPartners: React.FC<FoundingPartnersProps> = ({
  onOpenScheduleModal,
  onOpenNurseModal,
}) => {
  return (
    <section className="py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Founding Cohort Program</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Why Early Adopters are Joining Q1 Konnect.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We are collaborating with forward-thinking hospital directors and registered nurses 
            to shape the future of healthcare staffing in the Philippines as we seed our network.
          </p>
        </div>

        {/* Dual Founding Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: For Hospital Early Adopters */}
          <div className="bg-slate-950 rounded-3xl p-8 sm:p-10 border border-slate-800 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  <Building2 className="w-3.5 h-3.5" />
                  For Hospital Leadership
                </span>
                <span className="text-xs font-bold text-slate-400">Pre-Launch Cohort</span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white mb-4">
                Founding Hospital Partner Benefits
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Private medical centers that sign up as Founding Partners prior to our PHAPi exhibit 
                receive exclusive early advantages and direct advisory input.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Onboarding Setup Fees</strong> — Free initial configuration for your nursing service.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Priority Shift Broadcast Allocation</strong> — Guaranteed priority matching from our clinical talent pool.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Custom EMR / Hospital Workflow Alignment</strong> — Tailor shift approval hierarchies to your unit needs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Walk-In or Executive Briefing at PHAPi</strong> — Connect directly with our founding leadership at our booth.</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800">
              <button
                onClick={onOpenScheduleModal}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 transition-colors shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-900" />
                <span>Apply as a Founding Hospital Partner</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: For Nurse Pre-Registrants */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/90 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                  <Stethoscope className="w-3.5 h-3.5" />
                  For Registered Nurses
                </span>
                <span className="text-xs font-bold text-slate-500">Inaugural Pool</span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                Inaugural Nurse Cohort Privileges
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Nurses who pre-register today gain verified status ahead of pilot shift deployment, 
                putting you first in line as partner hospitals begin broadcasting shifts.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Fast-Track PRC Verification</strong> — Priority review by our clinical credentials desk.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>First Access to High-Paying Shifts</strong> — Be notified of ICU, ER, and ward shifts before general release.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Founding Nurse Profile Badge</strong> — Distinguish yourself to hospital supervisors from day one.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Direct Input on Mobile App UX</strong> — Help our engineers build the ultimate nurse-friendly tool.</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-200">
              <button
                onClick={onOpenNurseModal}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-black transition-colors shadow-md cursor-pointer border border-slate-800"
              >
                <UserPlus className="w-4 h-4 text-sky-400" />
                <span>Pre-Register for Inaugural Pool (Free)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
