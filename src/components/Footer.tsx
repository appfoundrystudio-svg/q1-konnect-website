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
    <footer className="bg-[#123A4A] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-3">
              <img 
                src="/brand/logo/q1konnect-logo_reversed.svg" 
                alt="Q1 Konnect" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#00AEFD]">
                  Healthcare Workforce Network
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Empowering Philippine healthcare facilities to eliminate staffing gaps, while providing 
              registered nurses with autonomy, fair market compensation, and flexible per-diem opportunities.
            </p>

            {/* Exhibit Notice in Footer */}
            <div className="p-3.5 rounded-[12px] bg-white/5 border border-white/10 text-xs text-white space-y-1">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>PHAPi Annual Convention — November 2026</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Official exhibitor for Private Hospitals Association of the Philippines.
              </p>
            </div>

            <div className="pt-2 text-xs text-slate-300 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00AEFD] shrink-0" />
                <span>Metro Manila, Philippines</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00AEFD] shrink-0" />
                <span>partnerships@q1konnect.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00AEFD] shrink-0" />
                <span>+63 (2) 8800-KONNECT (5666)</span>
              </p>
            </div>
          </div>

          {/* For Hospitals Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00AEFD] flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>For Healthcare Partners</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={onOpenScheduleModal} className="hover:text-white transition-colors cursor-pointer text-left">
                  Hospital partner inquiry
                </button>
              </li>
              <li>
                <a href="#video-explainer" className="hover:text-white transition-colors flex items-center gap-1">
                  <Play className="w-3 h-3 text-[#00AEFD]" />
                  Watch hospital explainer video
                </a>
              </li>
              <li>
                <a href="#hospitals" className="hover:text-white transition-colors">
                  Urgent clinical dispatch
                </a>
              </li>
              <li>
                <a href="#hospital-roi" className="hover:text-white transition-colors">
                  Staffing savings calculator
                </a>
              </li>
              <li>
                <a href="#phapi-exhibit" className="hover:text-white transition-colors">
                  Founding partner program
                </a>
              </li>
            </ul>
          </div>

          {/* For Nurses Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00AEFD] flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>For Registered Nurses</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={onOpenNurseModal} className="hover:text-white transition-colors cursor-pointer text-left">
                  Pre-register for inaugural nurse pool
                </button>
              </li>
              <li>
                <a href="#video-explainer" className="hover:text-white transition-colors flex items-center gap-1">
                  <Play className="w-3 h-3 text-[#00AEFD]" />
                  Watch nurse journey video
                </a>
              </li>
              <li>
                <a href="#nurses" className="hover:text-white transition-colors">
                  Shift autonomy & transparent rates
                </a>
              </li>
              <li>
                <a href="#nurse-earnings" className="hover:text-white transition-colors">
                  Monthly shift income calculator
                </a>
              </li>
              <li>
                <a href="#app-showcase" className="hover:text-white transition-colors">
                  Mobile companion app
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1D8A5A]" />
              <span>Compliance</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>PRC verification standards</li>
              <li>RA 10173 data privacy compliance</li>
              <li>Clinical safety guidelines</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} Q1 Konnect Platform Inc. All rights reserved.</p>
          <p className="font-semibold text-white">
            Partners, professionals connected. • Be connected.
          </p>
        </div>

      </div>
    </footer>
  );
};
