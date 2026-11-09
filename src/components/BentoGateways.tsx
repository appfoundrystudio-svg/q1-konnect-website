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
    <section className="py-24 bg-white text-q1-deep-teal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF4F3] text-q1-network-blue border border-[#D8E3E3]">
            <Sparkles className="w-3.5 h-3.5 text-q1-logo-sky" />
            <span>Interactive Architecture Gateways</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-q1-deep-teal">
            Explore without the clutter.
          </h2>
          <p className="text-base sm:text-lg text-q1-muted-text">
            Select any gateway to explore our technology, clinical workflows, and PHAPi rollout.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Hospital Gateway (7 cols - Deep Teal Brand Card) */}
          <div 
            onClick={() => onOpenModal('hospital')}
            className="md:col-span-7 group cursor-pointer rounded-[14px] bg-q1-deep-teal text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border border-white/10 shadow-xl transition-all duration-300 hover:border-q1-logo-sky/40 hover:-translate-y-1"
          >
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-[10px] bg-white/10 text-q1-logo-sky border border-white/15 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-q1-logo-sky tracking-wider uppercase">
                  For Hospital Leadership
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-q1-logo-sky transition-colors">
                  Census surge relief. Zero fixed overhead.
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed max-w-xl">
                  Supplement your permanent clinical team when bed occupancy surges beyond core staff capacity. 
                  Broadcast shifts in under 60 seconds with pre-verified PRC registered nurses and geofenced QR timesheet verification.
                </p>
              </div>

              {/* Minimal Graphics Feature Snippet */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-[10px] bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-q1-logo-sky font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Rapid Dispatch</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">&lt; 20 min emergency fill target</p>
                </div>

                <div className="p-3.5 rounded-[10px] bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>PRC Verification</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">100% automated license validation</p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold text-q1-logo-sky group-hover:underline flex items-center gap-1.5">
                <span>View hospital capabilities & shift workflow</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenDrawer('hospital_partner');
                }}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 hover:bg-white/25 text-white transition-colors"
              >
                Inquire Now
              </button>
            </div>
          </div>

          {/* Card 2: Nurse Gateway (5 cols - White Brand Card with Warm Coral Accent) */}
          <div 
            onClick={() => onOpenModal('nurse')}
            className="md:col-span-5 group cursor-pointer rounded-[14px] bg-white text-q1-deep-teal p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border border-[#D8E3E3] shadow-md transition-all duration-300 hover:border-q1-network-blue hover:-translate-y-1"
          >
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-[10px] bg-[#EEF4F3] text-q1-network-blue border border-[#D8E3E3] flex items-center justify-center">
                  <Stethoscope className="w-6 h-6" />
                </div>
                {/* Brand device: rounded coral bar */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1.5 rounded-full bg-q1-warm-coral" />
                  <span className="text-xs font-mono font-bold text-q1-network-blue tracking-wider uppercase">
                    For Registered Nurses
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-q1-deep-teal group-hover:text-q1-network-blue transition-colors">
                  Professional autonomy. Transparent shift rates.
                </h3>
                <p className="text-sm text-q1-muted-text mt-2 leading-relaxed">
                  Pick shifts on your off-days. Carry a digital credential passport, scan station QR on arrival, 
                  and receive prompt digital wallet payouts (GCash/Maya/Bank) with clear upfront compensation.
                </p>
              </div>

              <div className="p-3.5 rounded-[10px] bg-[#EEF4F3] border border-[#D8E3E3] text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-q1-matched-green" />
                  <span className="text-q1-deep-teal font-medium">Shift Earnings:</span>
                </div>
                <span className="font-bold text-q1-network-blue">Upfront Pay Transparency</span>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#D8E3E3] flex items-center justify-between">
              <span className="text-xs font-bold text-q1-network-blue group-hover:underline flex items-center gap-1.5">
                <span>View nurse benefits & shift workflow</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenDrawer('nurse_registry');
                }}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-q1-network-blue hover:bg-q1-deep-teal text-white transition-colors"
              >
                Pre-Register
              </button>
            </div>
          </div>

          {/* Card 3: How It Works (6 cols - Soft Neutral Brand Card) */}
          <div 
            onClick={() => onOpenModal('roadmap')}
            className="md:col-span-6 group cursor-pointer rounded-[14px] bg-[#EEF4F3] text-q1-deep-teal p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border border-[#D8E3E3] transition-all duration-300 hover:border-q1-network-blue hover:-translate-y-1"
          >
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-[10px] bg-white text-q1-network-blue border border-[#D8E3E3] flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-q1-network-blue tracking-wider uppercase">
                  Simple Operational Flow
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-q1-deep-teal group-hover:text-q1-network-blue transition-colors">
                  How Q1 Konnect works in 3 steps.
                </h3>
                <p className="text-sm text-q1-muted-text mt-2 leading-relaxed">
                  From sudden bedside vacancy to verified shift completion with zero administrative paperwork.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-q1-deep-teal pt-1">
                <span className="text-q1-network-blue font-bold">1. Broadcast in 60s</span>
                <span>→</span>
                <span className="text-q1-matched-green font-bold">2. PRC Match</span>
                <span>→</span>
                <span className="text-q1-deep-teal font-bold">3. QR Check-In</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D8E3E3] flex items-center justify-between text-xs font-bold text-q1-network-blue">
              <span className="group-hover:underline flex items-center gap-1.5">
                <span>Explore the step-by-step workflow</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Card 4: PHAPi Convention Exhibit (6 cols - White Card with Coral Border) */}
          <div 
            onClick={() => onOpenModal('phapi')}
            className="md:col-span-6 group cursor-pointer rounded-[14px] bg-white text-q1-deep-teal p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border border-[#D8E3E3] border-l-4 border-l-[#EF7158] shadow-sm transition-all duration-300 hover:border-q1-network-blue hover:-translate-y-1"
          >
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-[10px] bg-[#EEF4F3] text-[#C9452C] border border-[#D8E3E3] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#C9452C] tracking-wider uppercase">
                  November 2026 Showcase
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-q1-deep-teal group-hover:text-q1-network-blue transition-colors">
                  PHAPi National Convention Exhibit.
                </h3>
                <p className="text-sm text-q1-muted-text mt-2 leading-relaxed">
                  Open walk-in interactive prototype demos for Hospital Owners, Medical Directors, and Chief Nursing Officers. Experience our system live.
                </p>
              </div>

              <div className="p-3.5 rounded-[10px] bg-[#EEF4F3] border border-[#D8E3E3] text-xs text-q1-deep-teal flex items-center justify-between">
                <span className="text-q1-muted-text">Exhibit Format:</span>
                <span className="font-bold text-[#C9452C]">Open Walk-In Demonstrations</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D8E3E3] flex items-center justify-between text-xs font-bold text-[#C9452C]">
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
