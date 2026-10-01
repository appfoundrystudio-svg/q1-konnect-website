import React from 'react';
import { 
  Building2, 
  Stethoscope, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Award,
  Play
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
            <div className="space-y-3">
              <img 
                src="/assets/logo/Q1_Official_Logo.png" 
                alt="Q1 Konnect Logo" 
                className="h-20 sm:h-24 w-auto object-contain bg-white rounded-2xl p-2.5 shadow-md"
              />
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                  Healthcare Workforce Network
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering Philippine healthcare facilities to eliminate staffing gaps, while providing 
              registered nurses with autonomy, fair market compensation, and flexible per-diem opportunities.
            </p>

            {/* Exhibit Notice in Footer */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>PHAPi Annual Convention — November 2026</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Official exhibitor for Private Hospitals Association of the Philippines.
              </p>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
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
                <span>+63 (2) 8800-KONNECT (5666)</span>
              </p>
            </div>
          </div>

          {/* For Hospitals Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>For Healthcare Partners</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onOpenScheduleModal} className="hover:text-white transition-colors cursor-pointer text-left">
                  Schedule PHAPi Exhibit Meeting / Demo
                </button>
              </li>
              <li>
                <a href="#video-explainer" className="hover:text-white transition-colors flex items-center gap-1">
                  <Play className="w-3 h-3 text-sky-400" />
                  Watch Hospital Explainer Video
                </a>
              </li>
              <li>
                <a href="#hospitals" className="hover:text-white transition-colors">
                  Urgent Clinical Dispatch
                </a>
              </li>
              <li>
                <a href="#hospital-roi" className="hover:text-white transition-colors">
                  Staffing Savings Calculator
                </a>
              </li>
              <li>
                <a href="#phapi-exhibit" className="hover:text-white transition-colors">
                  Founding Partner Program
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
                  Pre-Register for Inaugural Nurse Pool
                </button>
              </li>
              <li>
                <a href="#video-explainer" className="hover:text-white transition-colors flex items-center gap-1">
                  <Play className="w-3 h-3 text-sky-400" />
                  Watch Nurse Journey Video
                </a>
              </li>
              <li>
                <a href="#nurses" className="hover:text-white transition-colors">
                  Shift Autonomy & Zero Deductions
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
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Compliance</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>PRC Verification Standards</li>
              <li>RA 10173 Data Privacy Compliance</li>
              <li>Clinical Safety Guidelines</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Q1 Konnect Platform Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with dedication for Philippine healthcare facilities and licensed nurses.
          </p>
        </div>

      </div>
    </footer>
  );
};
