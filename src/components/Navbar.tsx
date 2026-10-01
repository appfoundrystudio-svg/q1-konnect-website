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
  ChevronRight,
  Sparkles
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
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/80' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tag */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-teal-700 to-teal-900 p-2 flex items-center justify-center shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 494.843 401.573" className="w-full h-full text-white">
                  <path 
                    transform="translate(-36.00 -205.53)"
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="38" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M283.302,215.778c-98.3,0-178,79.7-178,178s79.7,178,178,178c35.4,0,68.4-10.4,96-28.3l62.2,62.2l20.2-20.2l-61.1-61.1c24.6-32.3,39.1-72.2,39.1-115.6C461.302,295.478,381.602,215.778,283.302,215.778z M283.302,519.778c-70.1,0-127-56.9-127-127s56.9-127,127-127s127,56.9,127,127S353.402,519.778,283.302,519.778z" 
                  />
                  <path 
                    transform="translate(-36.00 -205.53)"
                    fill="#38bdf8" 
                    d="M256.302,305.778h40v140h-40V305.778z M246.302,325.778l30-40l30,40H246.302z" 
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-slate-900 font-heading">
                    Q1 <span className="text-teal-700">Konnect</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-teal-50 text-teal-800 border border-teal-200">
                    NETWORK
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium hidden md:block">
                  Healthcare Workforce Platform
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80">
            <button
              onClick={() => onAudienceChange('hospital')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                currentAudience === 'hospital'
                  ? 'bg-teal-700 text-white shadow-sm shadow-teal-900/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Building2 className="w-4 h-4" />
              For Hospitals
            </button>
            <button
              onClick={() => onAudienceChange('nurse')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                currentAudience === 'nurse'
                  ? 'bg-sky-600 text-white shadow-sm shadow-sky-900/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              For Nurses
            </button>
          </nav>

          {/* Desktop Nav anchors */}
          <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#how-it-works" className="hover:text-teal-700 transition-colors">How It Works</a>
            <a href="#app-showcase" className="hover:text-teal-700 transition-colors">App Features</a>
            <a href="#calculator" className="hover:text-teal-700 transition-colors">Calculator</a>
            <a href="#faq" className="hover:text-teal-700 transition-colors">FAQ</a>
          </div>

          {/* Desktop Quick Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenNurseModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-teal-800 bg-teal-50 border border-teal-200 hover:bg-teal-100 hover:border-teal-300 transition-all cursor-pointer"
            >
              <UserPlus className="w-4 h-4 text-teal-700" />
              <span>Join Nurse Pool</span>
            </button>

            <button
              onClick={onOpenScheduleModal}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900 shadow-md shadow-teal-900/20 hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-teal-200" />
              <span>Book Hospital Demo</span>
            </button>

            {leadCount > 0 && (
              <button
                onClick={onOpenAdminDrawer}
                title="View captured leads"
                className="relative p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <ShieldCheck className="w-5 h-5 text-teal-700" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
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

      {/* Mobile Menu Dropdown */}
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
                  ? 'bg-teal-700 text-white shadow-sm'
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
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600'
              }`}
            >
              For Nurses
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-700 pt-2 border-t border-slate-100">
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              How It Works
            </a>
            <a 
              href="#app-showcase" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              App Features
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Calculator
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
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 shadow-md"
            >
              <Calendar className="w-4 h-4 text-teal-200" />
              Schedule Hospital Demo
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenNurseModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-teal-800 bg-teal-50 border border-teal-200 hover:bg-teal-100"
            >
              <UserPlus className="w-4 h-4 text-teal-700" />
              Join Nurse Pool
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
