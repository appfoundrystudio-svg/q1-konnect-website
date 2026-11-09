import React from 'react';
import { DeepDiveModalType, InquiryDrawerType } from '../types';
import { ArrowUpRight, Play, Award, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenModal: (modal: DeepDiveModalType) => void;
  onOpenDrawer: (drawer: InquiryDrawerType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onOpenDrawer }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-nav-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <img 
              src="/brand/logo/q1konnect-logo_full-colour.svg" 
              alt="Q1 Konnect" 
              className="h-10 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] text-q1-network-blue font-bold tracking-wider uppercase bg-[#EEF4F3] px-2.5 py-0.5 rounded-full border border-[#D8E3E3] w-fit">
                Healthcare Workforce Network
              </span>
            </div>
          </a>

          {/* Minimalist Navigation Links (Words that open deep dives) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-q1-muted-text">
            <button 
              onClick={() => onOpenModal('hospital')}
              className="hover:text-q1-deep-teal transition-colors cursor-pointer flex items-center gap-1 group"
            >
              <span>For Hospitals</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-q1-muted-text group-hover:text-q1-network-blue transition-colors" />
            </button>
            <button 
              onClick={() => onOpenModal('nurse')}
              className="hover:text-q1-deep-teal transition-colors cursor-pointer flex items-center gap-1 group"
            >
              <span>For Nurses</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-q1-muted-text group-hover:text-q1-network-blue transition-colors" />
            </button>
            <button 
              onClick={() => onOpenModal('roadmap')}
              className="hover:text-q1-deep-teal transition-colors cursor-pointer flex items-center gap-1 group"
            >
              <span>How It Works</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-q1-muted-text group-hover:text-q1-network-blue transition-colors" />
            </button>
            <button 
              onClick={() => onOpenModal('phapi')}
              className="hover:text-q1-deep-teal transition-colors cursor-pointer flex items-center gap-1.5 group text-[#C9452C]"
            >
              <Award className="w-3.5 h-3.5 text-[#EF7158]" />
              <span>PHAPi Exhibit</span>
            </button>
            <button 
              onClick={() => onOpenModal('video')}
              className="hover:text-q1-network-blue transition-colors cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EEF4F3] border border-[#D8E3E3] text-xs font-bold text-q1-deep-teal"
            >
              <Play className="w-3 h-3 text-q1-logo-sky fill-q1-logo-sky" />
              <span>App Demo</span>
            </button>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenDrawer('nurse_registry')}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-q1-deep-teal bg-[#EEF4F3] hover:bg-[#D8E3E3] border border-[#D8E3E3] transition-all cursor-pointer"
            >
              <span>Nurse Pool</span>
            </button>
            <button
              onClick={() => onOpenDrawer('hospital_partner')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-q1-network-blue hover:bg-q1-deep-teal transition-all cursor-pointer shadow-md shadow-sky-900/10 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-q1-logo-sky" />
              <span>Let's Connect</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
