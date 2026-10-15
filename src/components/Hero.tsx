import React from 'react';
import { DeepDiveModalType, InquiryDrawerType } from '../types';
import { ArrowRight, Play, ShieldCheck, QrCode, Sparkles, Building2, Stethoscope, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenModal: (modal: DeepDiveModalType) => void;
  onOpenDrawer: (drawer: InquiryDrawerType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal, onOpenDrawer }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden subtle-grid">
      
      {/* Ambient Lighting & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] pointer-events-none spotlight-glow opacity-80" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Stage Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-sky-300 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>Industry Showcase: PHAPi Annual National Convention • November 2026</span>
          <button 
            onClick={() => onOpenModal('phapi')}
            className="text-white hover:text-sky-300 underline font-bold cursor-pointer ml-1"
          >
            Details →
          </button>
        </div>

        {/* Large Confident Editorial Typography (Apple / Heron Style) */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
            Clinical Staffing,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-white">
              Orchestrated.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Eliminating 35–40% agency markups with verified PRC credentials, instant shift dispatch, 
            and zero-commission nurse payouts. Built from the ground up for Philippine healthcare.
          </p>
        </div>

        {/* Primary Interactive CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onOpenDrawer('hospital_partner')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all cursor-pointer shadow-xl shadow-sky-500/20 transform hover:-translate-y-0.5"
          >
            <Building2 className="w-4 h-4 text-slate-950" />
            <span>Hospital: Pioneer Partner Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onOpenDrawer('nurse_registry')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer border border-slate-700 hover:border-slate-500 transform hover:-translate-y-0.5"
          >
            <Stethoscope className="w-4 h-4 text-sky-400" />
            <span>Nurse: Pre-Register in Talent Pool</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onOpenModal('video')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-all cursor-pointer border border-white/10"
          >
            <Play className="w-4 h-4 text-sky-400 fill-sky-400" />
            <span>Watch Explainer</span>
          </button>
        </div>

        {/* Subtle Trust Badges */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% PRC License Pre-Verification</span>
          </div>
          <div className="flex items-center gap-1.5">
            <QrCode className="w-4 h-4 text-sky-400" />
            <span>Geofenced QR Timekeeping</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Zero Nurse Commission Cuts</span>
          </div>
        </div>

        {/* Floating Minimal Hardware / App Teaser (Clickable Gateway) */}
        <div className="pt-8 max-w-4xl mx-auto">
          <div 
            onClick={() => onOpenModal('hospital')}
            className="group cursor-pointer rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 p-6 md:p-8 text-left transition-all duration-300 shadow-2xl relative overflow-hidden transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">q1-konnect://command-portal</span>
              </div>
              <span className="text-xs font-bold text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Click to explore full prototype specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Teaser Preview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">
                  Live Shift Dispatch
                </span>
                <p className="text-sm font-bold text-white">ICU Staff Nurse (Night Shift)</p>
                <p className="text-xs text-slate-400">11:00 PM – 7:00 AM • Floor 4, Critical Care</p>
                <p className="text-sm font-extrabold text-sky-400 pt-1">₱2,800 direct rate</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                  Credential Verification
                </span>
                <p className="text-sm font-bold text-white">PRC License #087321</p>
                <p className="text-xs text-slate-400">Database Active • BLS / ACLS Verified</p>
                <p className="text-xs text-emerald-400 font-semibold pt-1">✓ Automated Clinical Check</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  Attendance & Payout
                </span>
                <p className="text-sm font-bold text-white">Tamper-Proof Station QR</p>
                <p className="text-xs text-slate-400">GPS Geofence Match • 0 paper logs</p>
                <p className="text-xs text-sky-300 font-semibold pt-1">Reconciled to Digital Wallet</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
