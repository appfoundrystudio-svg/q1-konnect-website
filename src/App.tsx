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
    <div className="min-h-screen bg-white text-q1-deep-teal flex flex-col font-sans selection:bg-[#00AEFD] selection:text-white">
      
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

        {/* Final Brand Callout */}
        <section className="py-24 bg-white text-center relative border-t border-[#D8E3E3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EEF4F3] text-q1-network-blue border border-[#D8E3E3]">
              <Sparkles className="w-3.5 h-3.5 text-q1-logo-sky" />
              <span>Inaugural Healthcare Network</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-q1-deep-teal">
              Partners, professionals connected.
            </h2>

            <p className="text-base sm:text-lg text-q1-muted-text max-w-2xl mx-auto">
              Join forward-thinking hospital executives and licensed nurses preparing for our November showcase.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setActiveDrawer('hospital_partner')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-q1-network-blue hover:bg-q1-deep-teal transition-all cursor-pointer shadow-lg shadow-sky-900/10 transform hover:-translate-y-0.5"
              >
                <Building2 className="w-4 h-4 text-q1-logo-sky" />
                <span>Hospital: Pioneer partner inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveDrawer('nurse_registry')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-q1-deep-teal bg-[#EEF4F3] hover:bg-[#D8E3E3] transition-all cursor-pointer border border-[#D8E3E3] transform hover:-translate-y-0.5"
              >
                <Stethoscope className="w-4 h-4 text-q1-network-blue" />
                <span>Nurse: Pre-register in talent pool</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

      </main>

      {/* Deep Teal Brand Footer */}
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
