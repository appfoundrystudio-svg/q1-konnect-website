import React from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Users2,
  CheckCircle2
} from 'lucide-react';

interface PhapiExhibitSectionProps {
  onOpenScheduleModal: () => void;
}

export const PhapiExhibitSection: React.FC<PhapiExhibitSectionProps> = ({ onOpenScheduleModal }) => {
  return (
    <section id="phapi-exhibit" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border-2 border-sky-500/30 p-8 sm:p-12 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/40">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>Upcoming National Launch • November 2026</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
                Official Exhibit at the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-white">
                  Private Hospitals Association
                </span>{' '}
                of the Philippines (PHAPi).
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                As the Philippine healthcare system battles critical nursing shortages and unprecedented turnover, 
                Q1 Konnect is introducing an ethical, tech-enabled workforce network. 
                We are presenting our completed prototype and MVP this November to private hospital leadership.
              </p>

              {/* Founding Partner Perks List */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Benefits of Joining Our Founding Hospital Partner Cohort:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Exclusive zero onboarding setup fee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Priority clinical pool allocation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Direct advisory input on product roadmap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Dedicated VIP facility support desk</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenScheduleModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 transition-colors shadow-lg cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Reserve a Consultation at PHAPi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>Booth Meetings & Online Previews Available</span>
                </div>
              </div>

            </div>

            {/* Right Card: Event Badge & Trust Frame */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-700/80 space-y-5 text-center sm:text-left">
                
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider block">
                      Industry Convention
                    </span>
                    <h4 className="text-base font-bold text-white">PHAPi Annual Exhibit</h4>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Join hundreds of Hospital Owners, Medical Directors, Chief Nursing Officers, 
                  and Healthcare Executives discovering next-generation clinical workforce automation.
                </p>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Launch Timeline:</span>
                    <strong className="text-white">November 2026</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current Phase:</span>
                    <strong className="text-emerald-400">Prototype Completed • MVP in Testing</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Partner Program:</span>
                    <strong className="text-sky-400">Inaugural Cohort Open</strong>
                  </div>
                </div>

                <div className="pt-2 text-center sm:text-left">
                  <span className="text-[11px] text-slate-400">
                    Questions about our exhibit booth? Contact us at{' '}
                    <strong className="text-slate-200">partnerships@q1konnect.com</strong>
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
