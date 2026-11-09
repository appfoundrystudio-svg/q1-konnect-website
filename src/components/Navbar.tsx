import React, { useState, useEffect } from 'react';
import { Audience } from '../types/landing';
import { 
  Building2, 
  Stethoscope, 
  Calendar, 
  UserPlus, 
  Menu, 
  X, 
  ShieldCheck, 
  Play,
  Award
} from 'lucide-react';

interface NavbarProps {
  currentAudience: Audience;
  onAudienceChange: (audience: Audience) => void;
  onOpenScheduleModal: () => void;
  onOpenNurseModal: () => void;
  onOpenAdminDrawer: () => void;
  leadCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentAudience,
  onAudienceChange,
  onOpenScheduleModal,
  onOpenNurseModal,
  onOpenAdminDrawer,
  leadCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Convention Announcement Bar */}
      <div className="bg-[#123A4A] text-white text-[11px] font-medium py-1.5 px-4 text-center border-b border-white/10 z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#EF7158] animate-pulse" />
          <span>
            <strong className="text-white font-bold">Industry Showcase:</strong> Official Exhibitor at the 
            <strong> Private Hospitals Association of the Philippines (PHAPi)</strong> Annual Convention — November 2026.
          </span>
          <a href="#phapi-exhibit" className="underline text-sky-300 hover:text-white ml-1 hidden sm:inline">
            Visit our booth →
          </a>
        </div>
      </div>

      <header 
        className={`fixed top-7 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav-light py-2 shadow-sm' 
            : 'bg-white/80 backdrop-blur-sm py-3.5 border-b border-[#D8E3E3]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Prominent Official Brand Logo */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center gap-3 group">
                <img 
                  src="/brand/logo/q1konnect-logo_full-colour.svg" 
                  alt="Q1 Konnect" 
                  className="h-10 sm:h-12 w-auto object-contain transition-transform" 
                />
                <div className="hidden sm:flex flex-col">
                  <span className="text-[10px] font-bold tracking-wider text-[#0F6B8A] bg-[#EEF4F3] px-2.5 py-0.5 rounded-full border border-[#D8E3E3] w-fit">
                    Healthcare Workforce Network
                  </span>
                </div>
              </a>
            </div>

            {/* Audience Segment Switcher in Nav */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#EEF4F3] p-1.5 rounded-full border border-[#D8E3E3]">
              <button
                onClick={() => onAudienceChange('hospital')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currentAudience === 'hospital'
                    ? 'bg-[#123A4A] text-white shadow-sm'
                    : 'text-[#56717C] hover:text-[#123A4A] hover:bg-white'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                For Hospitals
              </button>
              <button
                onClick={() => onAudienceChange('nurse')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currentAudience === 'nurse'
                    ? 'bg-[#0F6B8A] text-white shadow-sm'
                    : 'text-[#56717C] hover:text-[#123A4A] hover:bg-white'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                For Nurses
              </button>
            </nav>

            {/* Navigation Anchors */}
            <div className="hidden xl:flex items-center gap-5 text-xs font-semibold text-[#56717C]">
              <a href="#how-it-works" className="hover:text-[#0F6B8A] transition-colors">How It Works</a>
              <a href="#video-explainer" className="hover:text-[#0F6B8A] transition-colors flex items-center gap-1">
                <Play className="w-3 h-3 text-[#0F6B8A]" />
                App Demo
              </a>
              <a href="#phapi-exhibit" className="hover:text-[#0F6B8A] transition-colors flex items-center gap-1">
                <Award className="w-3 h-3 text-[#EF7158]" />
                PHAPi Booth
              </a>
              <a href="#faq" className="hover:text-[#0F6B8A] transition-colors">FAQ</a>
            </div>

            {/* Quick Action CTAs */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={onOpenNurseModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#123A4A] bg-[#EEF4F3] hover:bg-[#D8E3E3] border border-[#D8E3E3] transition-all cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5 text-[#0F6B8A]" />
                <span>Pre-register nurse pool</span>
              </button>

              <button
                onClick={onOpenScheduleModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#0F6B8A] hover:bg-[#123A4A] shadow-sm transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-sky-200" />
                <span>Hospital partner inquiry</span>
              </button>

              {leadCount > 0 && (
                <button
                  onClick={onOpenAdminDrawer}
                  title="View captured submissions"
                  className="relative p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-sky-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {leadCount}
                  </span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex items-center gap-2 p-1 bg-[#EEF4F3] rounded-full border border-[#D8E3E3]">
              <button
                onClick={() => {
                  onAudienceChange('hospital');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-2 rounded-full text-xs font-bold text-center transition-all ${
                  currentAudience === 'hospital'
                    ? 'bg-[#123A4A] text-white shadow-sm'
                    : 'text-[#56717C]'
                }`}
              >
                For Hospitals
              </button>
              <button
                onClick={() => {
                  onAudienceChange('nurse');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-2 rounded-full text-xs font-bold text-center transition-all ${
                  currentAudience === 'nurse'
                    ? 'bg-[#0F6B8A] text-white shadow-sm'
                    : 'text-[#56717C]'
                }`}
              >
                For Nurses
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-2 border-t border-slate-100">
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                How It Works
              </a>
              <a 
                href="#video-explainer" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                App Demo
              </a>
              <a 
                href="#phapi-exhibit" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50 text-[#0F6B8A] font-bold"
              >
                PHAPi Booth
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                FAQ
              </a>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenScheduleModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-white bg-[#0F6B8A] hover:bg-[#123A4A] shadow-sm"
              >
                <Calendar className="w-4 h-4 text-sky-200" />
                Hospital partner inquiry
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNurseModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-[#123A4A] bg-[#EEF4F3] border border-[#D8E3E3] hover:bg-[#D8E3E3]"
              >
                <UserPlus className="w-4 h-4 text-[#0F6B8A]" />
                Pre-register for nurse pool
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
