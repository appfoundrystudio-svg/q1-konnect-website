import React from 'react';
import { DeepDiveModalType, InquiryDrawerType } from '../types';
import { 
  Building2, 
  Stethoscope, 
  Layers, 
  Award, 
  ArrowRight, 
  Sparkles,
  QrCode,
  Wallet,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface BentoGatewaysProps {
  onOpenModal: (modal: DeepDiveModalType) => void;
  onOpenDrawer: (drawer: InquiryDrawerType) => void;
}

export const BentoGateways: React.FC<BentoGatewaysProps> = ({ onOpenModal, onOpenDrawer }) => {
  return (
    <section className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Architecture Gateways</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            Explore Without the Clutter.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Click any gateway to dive deeper into our technology, clinical workflows, and rollout timeline.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Hospital Gateway (7 cols) */}
          <div 
            onClick={() => onOpenModal('hospital')}
            className="md:col-span-7 group cursor-pointer rounded-3xl card-minimal-dark p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">
                  For Hospital Leadership
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                  On-Demand Clinical Workforce Infrastructure.
                </h3>
                <p className="text-sm sm:text-base text-slate-400 mt-2 leading-relaxed max-w-xl">
                  Broadcast urgent or scheduled shifts across ICU, ER, OR, and Hemodialysis units in under 60 seconds. 
                  Directly connect with pre-screened PRC registered nurses with geofenced QR timesheet verification.
                </p>
              </div>

              {/* Minimal Graphics Feature Snippet */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Rapid Dispatch</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">&lt; 20 min emergency fill target</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>PRC Verification</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">100% automated license check</p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-bold text-sky-400 group-hover:underline flex items-center gap-1.5">
                <span>View hospital capabilities & shift workflow</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenDrawer('hospital_partner');
                }}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Inquire Now
              </button>
            </div>
          </div>

          {/* Card 2: Nurse Gateway (5 cols) */}
          <div 
            onClick={() => onOpenModal('nurse')}
            className="md:col-span-5 group cursor-pointer rounded-3xl card-minimal-dark p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-sky-400 border border-blue-500/20 flex items-center justify-center">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">
                  For Registered Nurses
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                  Direct Hospital-to-Nurse Staffing. Transparent Shift Rates.
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Pick shifts on your off-days. Carry a digital credential passport, scan station QR on arrival, 
                  and receive prompt digital wallet payouts (GCash/Maya/Bank) with clear, upfront compensation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-300 font-medium">Shift Earnings:</span>
                </div>
                <span className="font-bold text-sky-400">Upfront Pay Transparency</span>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-bold text-sky-400 group-hover:underline flex items-center gap-1.5">
                <span>View nurse benefits & shift workflow</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenDrawer('nurse_registry');
                }}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold transition-colors"
              >
                Pre-Register
              </button>
            </div>
          </div>

          {/* Card 3: Phased Strategy Roadmap (6 cols) */}
          <div 
            onClick={() => onOpenModal('roadmap')}
            className="md:col-span-6 group cursor-pointer rounded-3xl card-minimal-dark p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/5 text-sky-400 border border-white/10 flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
                  Phase 1 Active Now
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                  Two-Sided Marketplace Seeding.
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Why neither side works alone: Securing Pioneer Hospital Partner MoAs while establishing a vetted nurse talent pool before pilot shifts go live.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
                <span className="text-emerald-400 font-bold">1. Seeding</span>
                <span>→</span>
                <span className="text-sky-400 font-bold">2. PHAPi Exhibit</span>
                <span>→</span>
                <span className="text-slate-400">3. Pilot Shifts</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-sky-400">
              <span className="group-hover:underline flex items-center gap-1.5">
                <span>Explore rollout strategy & timeline</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Card 4: PHAPi Convention Exhibit (6 cols) */}
          <div 
            onClick={() => onOpenModal('phapi')}
            className="md:col-span-6 group cursor-pointer rounded-3xl card-minimal-dark p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border-sky-500/30"
          >
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-amber-300 tracking-wider uppercase">
                  November 2026 Showcase
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                  PHAPi National Convention Exhibit.
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Open walk-in interactive prototype demos for Hospital Owners, Medical Directors, and Chief Nursing Officers. Experience our system live.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>Exhibit Format:</span>
                <span className="font-bold text-amber-300">Open Walk-In Demonstrations</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-amber-400">
              <span className="group-hover:underline flex items-center gap-1.5">
                <span>View booth location & briefing options</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
