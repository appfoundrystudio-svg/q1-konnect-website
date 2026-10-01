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
      <div className="bg-slate-950 text-white text-[11px] font-medium py-1.5 px-4 text-center border-b border-slate-800 z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>
            <strong className="text-sky-400 font-bold">Industry Showcase:</strong> Official Exhibitor at the 
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
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 border-b border-slate-200/80' 
            : 'bg-transparent py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Prominent Official Brand Logo */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center gap-3 group">
                <img 
                  src="/assets/logo/Q1_Official_Logo.png" 
                  alt="Q1 Konnect Official Logo" 
                  className="h-16 sm:h-18 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-xs" 
                />
                <div className="hidden sm:flex flex-col">
                  <span className="text-[10px] uppercase font-black tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200/80 w-fit">
                    Healthcare Workforce Network
                  </span>
                </div>
              </a>
            </div>

            {/* Audience Segment Switcher in Nav */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80">
              <button
                onClick={() => onAudienceChange('hospital')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currentAudience === 'hospital'
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                For Hospitals
              </button>
              <button
                onClick={() => onAudienceChange('nurse')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currentAudience === 'nurse'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                For Nurses
              </button>
            </nav>

            {/* Navigation Anchors */}
            <div className="hidden xl:flex items-center gap-5 text-xs font-semibold text-slate-600">
              <a href="#network-roadmap" className="hover:text-sky-600 transition-colors">Our Roadmap</a>
              <a href="#video-explainer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                <Play className="w-3 h-3 text-sky-500" />
                App Demo
              </a>
              <a href="#phapi-exhibit" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-500" />
                PHAPi Booth
              </a>
              <a href="#faq" className="hover:text-sky-600 transition-colors">FAQ</a>
            </div>

            {/* Quick Action CTAs */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={onOpenNurseModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5 text-sky-600" />
                <span>Pre-Register Nurse Pool</span>
              </button>

              <button
                onClick={onOpenScheduleModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-black shadow-md transition-all cursor-pointer border border-slate-800"
              >
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>Hospital Partner Inquiry</span>
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
            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl">
              <button
                onClick={() => {
                  onAudienceChange('hospital');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold text-center transition-all ${
                  currentAudience === 'hospital'
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-600'
                }`}
              >
                For Hospitals
              </button>
              <button
                onClick={() => {
                  onAudienceChange('nurse');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold text-center transition-all ${
                  currentAudience === 'nurse'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-600'
                }`}
              >
                For Nurses
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-2 border-t border-slate-100">
              <a 
                href="#network-roadmap" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                Our Roadmap
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
                className="py-2 px-3 rounded-lg hover:bg-slate-50 text-sky-700 font-bold"
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
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-black shadow-md"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                Hospital Partnership Inquiry
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNurseModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 border border-slate-300 hover:bg-slate-200"
              >
                <UserPlus className="w-4 h-4 text-sky-600" />
                Pre-Register for Nurse Pool
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
