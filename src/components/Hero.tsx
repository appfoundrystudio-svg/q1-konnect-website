import React from 'react';
import { DeepDiveModalType, InquiryDrawerType } from '../types';
import { ArrowRight, Play, ShieldCheck, QrCode, Sparkles, Building2, Stethoscope, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenModal: (modal: DeepDiveModalType) => void;
  onOpenDrawer: (drawer: InquiryDrawerType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal, onOpenDrawer }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden subtle-grid-light bg-white">
      
      {/* Ambient Lighting & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none bg-radial from-[#EEF4F3] via-white to-white opacity-70" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Stage Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#EEF4F3] border border-[#D8E3E3] text-q1-network-blue backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-q1-logo-sky animate-pulse" />
          <span>Industry Showcase: PHAPi Annual National Convention • November 2026</span>
          <button 
            onClick={() => onOpenModal('phapi')}
            className="text-q1-deep-teal hover:text-q1-network-blue underline font-bold cursor-pointer ml-1"
          >
            Details →
          </button>
        </div>

        {/* Large Confident Editorial Typography */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-q1-deep-teal tracking-tight leading-[1.08] font-display">
            Clinical workforce,{' '}
            <span className="text-q1-network-blue">
              orchestrated.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-q1-muted-text max-w-2xl mx-auto font-normal leading-relaxed">
            On-demand surge relief for bed occupancy peaks and unexpected shift gaps. Direct hospital-to-nurse scheduling with verified PRC credentials and transparent shift rates.
          </p>
        </div>

        {/* Primary Interactive CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onOpenDrawer('hospital_partner')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-q1-network-blue hover:bg-q1-deep-teal transition-all cursor-pointer shadow-lg shadow-sky-900/10 transform hover:-translate-y-0.5"
          >
            <Building2 className="w-4 h-4 text-q1-logo-sky" />
            <span>Hospital: Pioneer Partner Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onOpenDrawer('nurse_registry')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-q1-deep-teal bg-[#EEF4F3] hover:bg-[#D8E3E3] transition-all cursor-pointer border border-[#D8E3E3] transform hover:-translate-y-0.5"
          >
            <Stethoscope className="w-4 h-4 text-q1-network-blue" />
            <span>Nurse: Pre-Register in Talent Pool</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onOpenModal('video')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-q1-deep-teal hover:bg-[#EEF4F3] transition-all cursor-pointer border border-[#D8E3E3]"
          >
            <Play className="w-4 h-4 text-q1-network-blue fill-q1-network-blue" />
            <span>Watch Explainer</span>
          </button>
        </div>

        {/* Subtle Trust Badges */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-q1-muted-text">
          <div className="flex items-center gap-2">
            <img 
              src="/brand/badge/q1-verified-chip_app.svg" 
              alt="Q1 Verified" 
              className="h-5 w-auto object-contain drop-shadow-xs" 
            />
            <span>PRC License Pre-Verification</span>
          </div>
          <div className="flex items-center gap-1.5">
            <QrCode className="w-4 h-4 text-q1-network-blue" />
            <span>Geofenced QR Timekeeping</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-q1-matched-green" />
            <span>Transparent Agreed Shift Pay</span>
          </div>
        </div>

        {/* Floating Minimal Hardware / App Teaser (Deep Teal Command Portal) */}
        <div className="pt-8 max-w-4xl mx-auto">
          <div 
            onClick={() => onOpenModal('hospital')}
            className="group cursor-pointer rounded-[14px] bg-q1-deep-teal text-white p-6 md:p-8 text-left transition-all duration-300 shadow-2xl relative overflow-hidden transform hover:-translate-y-1 border border-white/10"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#EF7158]" />
                <div className="w-3 h-3 rounded-full bg-[#00AEFD]" />
                <div className="w-3 h-3 rounded-full bg-[#1D8A5A]" />
                <span className="text-xs font-mono text-slate-300 ml-2">q1-konnect://command-portal</span>
              </div>
              <span className="text-xs font-bold text-q1-logo-sky flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Interactive Prototype</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Teaser Preview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-[12px] bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] uppercase font-bold text-q1-logo-sky tracking-wider">
                  Live Shift Dispatch
                </span>
                <p className="text-sm font-bold text-white">ICU Staff Nurse (Night Shift)</p>
                <p className="text-xs text-slate-300">11:00 PM – 7:00 AM • Critical Care Unit</p>
                <p className="text-xs text-q1-logo-sky font-semibold pt-1">Direct Upfront Rate • Fast Claim</p>
              </div>

              <div className="p-4 rounded-[12px] bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] uppercase font-bold text-emerald-300 tracking-wider">
                  Credential Verification
                </span>
                <p className="text-sm font-bold text-white">PRC License #087321</p>
                <p className="text-xs text-slate-300">Database Active • BLS / ACLS Verified</p>
                <p className="text-xs text-emerald-300 font-semibold pt-1">✓ Automated Clinical Verification</p>
              </div>

              <div className="p-4 rounded-[12px] bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] uppercase font-bold text-sky-200 tracking-wider">
                  Attendance & Digital Pay
                </span>
                <p className="text-sm font-bold text-white">Tamper-Proof Station QR</p>
                <p className="text-xs text-slate-300">GPS Geofence Match • 0 paper logs</p>
                <p className="text-xs text-sky-200 font-semibold pt-1">Direct to Nurse Digital Wallet</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
