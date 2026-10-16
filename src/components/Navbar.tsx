import React from 'react';
import { DeepDiveModalType, InquiryDrawerType } from '../types';
import { ArrowUpRight, Play, Award, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenModal: (modal: DeepDiveModalType) => void;
  onOpenDrawer: (drawer: InquiryDrawerType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onOpenDrawer }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-white/95 rounded-2xl p-2 shadow-sm border border-white/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0" style={{ height: '60px' }}>
              <img 
                src="/assets/logo/Q1_Official_Logo.png" 
                alt="Q1 Konnect Official Logo" 
                className="h-12 sm:h-14 w-auto object-contain"
                style={{ maxHeight: '48px', width: 'auto' }}
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold text-white tracking-wide uppercase">
                Q1 Konnect
              </span>
              <span className="text-[10px] text-sky-400 font-mono tracking-wider">
                Health Workforce Network
              </span>
            </div>
          </a>

          {/* Minimalist Navigation Links (Words that open deep dives) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button 
              onClick={() => onOpenModal('hospital')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
            >
              <span>For Hospitals</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </button>
            <button 
              onClick={() => onOpenModal('nurse')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
            >
              <span>For Nurses</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </button>
            <button 
              onClick={() => onOpenModal('roadmap')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
            >
              <span>Strategy Roadmap</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </button>
            <button 
              onClick={() => onOpenModal('phapi')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group text-amber-300/90"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>PHAPi Exhibit</span>
            </button>
            <button 
              onClick={() => onOpenModal('video')}
              className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold"
            >
              <Play className="w-3 h-3 text-sky-400 fill-sky-400" />
              <span>Watch Demo</span>
            </button>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenDrawer('hospital_partner')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all cursor-pointer shadow-lg shadow-sky-500/20 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Connect With Us</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
