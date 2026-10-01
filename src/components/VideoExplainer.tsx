import React, { useState } from 'react';
import { Play, Building2, Stethoscope, Sparkles, ExternalLink, Calendar, UserPlus } from 'lucide-react';
import { Audience } from '../types/landing';

interface VideoExplainerProps {
  currentAudience: Audience;
  onOpenScheduleModal: () => void;
  onOpenNurseModal: () => void;
}

export const VideoExplainer: React.FC<VideoExplainerProps> = ({
  currentAudience,
  onOpenScheduleModal,
  onOpenNurseModal,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<Audience>(currentAudience);

  const videos = {
    hospital: {
      title: 'How Q1 Konnect Solves Hospital Staffing Shortages',
      subtitle: 'Watch how healthcare facilities broadcast shifts in 60s, verify credentials, and manage attendance.',
      embedUrl: 'https://drive.google.com/file/d/1gB7YZ1XxMLFuDKviMxfq4PlRSfUGhjAC/preview',
      duration: 'Executive Briefing',
      highlights: [
        'Shift posting and department tagging',
        'Automated PRC license & credentials validation',
        'Geofenced QR-based attendance tracking',
        'Consolidated timesheet and invoice reconciliation'
      ],
      ctaLabel: 'Schedule Private Demo at PHAPi Exhibit',
      onCta: onOpenScheduleModal,
      ctaIcon: Calendar
    },
    nurse: {
      title: 'How Nurses Claim Shifts & Earn on Q1 Konnect',
      subtitle: 'See how registered nurses browse high-paying reliever shifts, check in via QR, and get paid fast.',
      embedUrl: 'https://drive.google.com/file/d/18USOxtiLAMqKC_AyUXdskoS25vpw-5ic/preview',
      duration: 'Nurse Walkthrough',
      highlights: [
        'One-tap shift discovery by location & specialty',
        'Digital credential wallet with verified PRC status',
        'Tap-to-scan QR clock-in on hospital arrival',
        'Direct payout tracking with zero agency cuts'
      ],
      ctaLabel: 'Pre-Register for Founding Nurse Pool',
      onCta: onOpenNurseModal,
      ctaIcon: UserPlus
    },
  };

  const active = videos[selectedVideo];
  const CtaIcon = active.ctaIcon;

  return (
    <section id="video-explainer" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30">
            <Play className="w-3.5 h-3.5 fill-sky-400" />
            <span>Interactive Video Tour</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading text-white">
            See the Q1 Konnect Platform in Action.
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            Watch our official video walkthroughs demonstrating how the platform bridges the gap 
            between healthcare facilities and qualified nursing talent.
          </p>

          {/* Video Switcher Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              <button
                onClick={() => setSelectedVideo('hospital')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  selectedVideo === 'hospital'
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Hospital Partner Explainer</span>
              </button>
              <button
                onClick={() => setSelectedVideo('nurse')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  selectedVideo === 'nurse'
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Stethoscope className="w-4 h-4" />
                <span>Nurse Journey Explainer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Video Player & Context Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Video Screen Frame */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-slate-900 border-2 border-slate-800 p-2 sm:p-3 shadow-2xl relative overflow-hidden group">
              <div className="rounded-2xl overflow-hidden aspect-video bg-black relative">
                <iframe
                  src={active.embedUrl}
                  title={active.title}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-3 py-2 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Official Prototype & MVP Walkthrough
                </span>
                <span className="font-semibold text-sky-400">{active.duration}</span>
              </div>
            </div>
          </div>

          {/* Video Description & Highlights */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                {selectedVideo === 'hospital' ? 'For Hospital Leadership' : 'For Clinical Professionals'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                {active.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                {active.subtitle}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Features Covered:
              </p>
              {active.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={active.onCta}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold text-white bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <CtaIcon className="w-4 h-4" />
                <span>{active.ctaLabel}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
