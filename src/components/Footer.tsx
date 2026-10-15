import React from 'react';
import { DeepDiveModalType, InquiryDrawerType } from '../types';
import { ShieldCheck, Mail, Phone, MapPin, Award } from 'lucide-react';

interface FooterProps {
  onOpenModal: (modal: DeepDiveModalType) => void;
  onOpenDrawer: (drawer: InquiryDrawerType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal, onOpenDrawer }) => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 rounded-2xl p-2 shadow-sm border border-white/20">
                <img 
                  src="/assets/logo/Q1_Official_Logo.png" 
                  alt="Q1 Konnect Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">Q1 Konnect Platform</span>
                <span className="text-xs text-sky-400 font-mono">Healthcare Workforce Network</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Precision clinical staffing connecting accredited Philippine hospitals with verified PRC-licensed registered nurses.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>PHAPi National Convention Exhibitor</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Private Hospitals Association of the Philippines • November 2026
              </p>
            </div>
          </div>

          {/* Quick Gateways */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
              Exploration Gateways
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => onOpenModal('hospital')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Hospital Command & Shift Broadcast
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('nurse')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Nurse Privileges & Zero Deductions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('roadmap')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Dual-Sided Marketplace Roadmap
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('phapi')} 
                  className="hover:text-white transition-colors cursor-pointer text-left text-amber-300"
                >
                  PHAPi Exhibit Walk-In Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('video')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Watch 2-Minute Prototype Walkthrough
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Compliance */}
          <div className="md:col-span-3 space-y-3 text-xs text-slate-400">
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
              Contact & Compliance
            </span>
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Metro Manila, Philippines</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>partnerships@q1konnect.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>+63 (2) 8800-KONNECT</span>
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>RA 10173 Data Privacy Adherent</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Q1 Konnect Platform Inc. All rights reserved.</p>
          <p>Modern Minimalist Edition • Built for Philippine Healthcare</p>
        </div>

      </div>
    </footer>
  );
};
