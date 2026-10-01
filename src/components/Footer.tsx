import React from 'react';
import { 
  Building2, 
  Stethoscope, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Heart,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onOpenScheduleModal: () => void;
  onOpenNurseModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenScheduleModal,
  onOpenNurseModal,
}) => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 p-2 flex items-center justify-center">
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
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-heading">
                  Q1 <span className="text-teal-400">Konnect</span>
                </span>
                <p className="text-[11px] text-slate-400">Healthcare Workforce Platform</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering healthcare facilities to eliminate staffing gaps, while providing registered 
              nurses with autonomy, fair market compensation, and flexible per-diem opportunities.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Metro Manila, Philippines</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>partnerships@q1konnect.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>+63 (2) 8800-KONNECT (5666)</span>
              </p>
            </div>
          </div>

          {/* For Hospitals Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-400 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>For Healthcare Partners</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onOpenScheduleModal} className="hover:text-white transition-colors cursor-pointer text-left">
                  Schedule Discovery Meeting
                </button>
              </li>
              <li>
                <a href="#hospitals" className="hover:text-white transition-colors">
                  Urgent Clinical Dispatch
                </a>
              </li>
              <li>
                <a href="#hospital-roi" className="hover:text-white transition-colors">
                  Hospital ROI & Savings Calculator
                </a>
              </li>
              <li>
                <a href="#app-showcase" className="hover:text-white transition-colors">
                  Command Center Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  3-Step Hospital Onboarding
                </a>
              </li>
            </ul>
          </div>

          {/* For Nurses Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>For Registered Nurses</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onOpenNurseModal} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sign Up for Nurse Talent Pool
                </button>
              </li>
              <li>
                <a href="#nurses" className="hover:text-white transition-colors">
                  Why Nurses Choose Q1 Konnect
                </a>
              </li>
              <li>
                <a href="#nurse-earnings" className="hover:text-white transition-colors">
                  Monthly Shift Income Calculator
                </a>
              </li>
              <li>
                <a href="#app-showcase" className="hover:text-white transition-colors">
                  Mobile Companion App (PWA)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Nurse Licensure & Payout FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Compliance</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>PRC Verification Protocol</li>
              <li>RA 10173 Data Privacy</li>
              <li>Clinical Safety Standards</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Q1 Konnect Platform Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with dedication for healthcare professionals in the Philippines
          </p>
        </div>

      </div>
    </footer>
  );
};
