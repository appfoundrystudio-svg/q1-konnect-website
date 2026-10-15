import React, { useState } from 'react';
import { DeepDiveModalType, InquiryDrawerType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatTicker } from './components/StatTicker';
import { BentoGateways } from './components/BentoGateways';
import { VideoTeaser } from './components/VideoTeaser';
import { DetailModal } from './components/DetailModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { Footer } from './components/Footer';
import { Building2, Stethoscope, ArrowRight, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<DeepDiveModalType>(null);
  const [activeDrawer, setActiveDrawer] = useState<InquiryDrawerType>(null);

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 flex flex-col font-sans selection:bg-[#00A3FF] selection:text-white">
      
      {/* Top Glass Navigation */}
      <Navbar
        onOpenModal={setActiveModal}
        onOpenDrawer={setActiveDrawer}
      />

      {/* Main Experience */}
      <main className="flex-1">
        
        {/* Editorial Hero */}
        <Hero
          onOpenModal={setActiveModal}
          onOpenDrawer={setActiveDrawer}
        />

        {/* Minimal Metric Ticker */}
        <StatTicker />

        {/* Interactive Bento Gateways (Links via words & images) */}
        <BentoGateways
          onOpenModal={setActiveModal}
          onOpenDrawer={setActiveDrawer}
        />

        {/* Cinematic Video Teaser */}
        <VideoTeaser
          onOpenModal={setActiveModal}
        />

        {/* Final Minimalist Callout */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-black text-center relative border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inaugural Healthcare Network</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
              Shaping Bedside Healthcare in the Philippines.
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Join forward-thinking hospital executives and licensed nurses preparing for our November showcase.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setActiveDrawer('hospital_partner')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all cursor-pointer shadow-xl shadow-sky-500/20 transform hover:-translate-y-0.5"
              >
                <Building2 className="w-4 h-4 text-slate-950" />
                <span>Hospital: Pioneer Partner Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveDrawer('nurse_registry')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer border border-slate-700 transform hover:-translate-y-0.5"
              >
                <Stethoscope className="w-4 h-4 text-sky-400" />
                <span>Nurse: Pre-Register in Talent Pool</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

      </main>

      {/* Pitch-Black Minimalist Footer */}
      <Footer
        onOpenModal={setActiveModal}
        onOpenDrawer={setActiveDrawer}
      />

      {/* Universal Detail Modal (Triggered by words or images) */}
      <DetailModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
        onOpenDrawer={(drawer) => {
          setActiveModal(null);
          setActiveDrawer(drawer);
        }}
      />

      {/* Slide-Over Inquiry Drawer */}
      <InquiryDrawer
        type={activeDrawer}
        onClose={() => setActiveDrawer(null)}
      />

    </div>
  );
};
