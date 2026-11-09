import React from 'react';
import { Audience } from '../types/landing';
import { 
  Building2, 
  Stethoscope, 
  Calendar, 
  UserPlus, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Play,
  Award,
  Clock,
  QrCode,
  Users2
} from 'lucide-react';

interface HeroProps {
  currentAudience: Audience;
  onAudienceChange: (audience: Audience) => void;
  onOpenScheduleModal: () => void;
  onOpenNurseModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentAudience,
  onAudienceChange,
  onOpenScheduleModal,
  onOpenNurseModal
}) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Audience Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-[#EEF4F3] border border-[#D8E3E3]">
            <button
              onClick={() => onAudienceChange('hospital')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                currentAudience === 'hospital'
                  ? 'bg-[#123A4A] text-white shadow-sm'
                  : 'text-[#56717C] hover:text-[#123A4A]'
              }`}
            >
              <Building2 className={`w-4 h-4 ${currentAudience === 'hospital' ? 'text-[#EF7158]' : 'text-[#56717C]'}`} />
              <span>For Hospital & Clinic Partners</span>
            </button>
            <button
              onClick={() => onAudienceChange('nurse')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                currentAudience === 'nurse'
                  ? 'bg-[#0F6B8A] text-white shadow-sm'
                  : 'text-[#56717C] hover:text-[#123A4A]'
              }`}
            >
              <Stethoscope className={`w-4 h-4 ${currentAudience === 'nurse' ? 'text-white' : 'text-[#56717C]'}`} />
              <span>For Registered Nurses</span>
            </button>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Stage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EEF4F3] text-[#0F6B8A] border border-[#D8E3E3]">
              <Users2 className="w-3.5 h-3.5 text-[#0F6B8A]" />
              <span>
                {currentAudience === 'hospital' 
                  ? 'Pioneer Hospital Partner Program • Pre-Launch Phase' 
                  : 'Inaugural Nurse Registry Pre-Registration'}
              </span>
            </div>

            {/* Dynamic Headline */}
            {currentAudience === 'hospital' ? (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#123A4A] tracking-tight leading-[1.12] font-display">
                On-demand clinical{' '}
                <span className="text-[#0F6B8A]">
                  workforce infrastructure
                </span>{' '}
                for healthcare facilities.
              </h1>
            ) : (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#123A4A] tracking-tight leading-[1.12] font-display">
                Direct hospital-to-nurse staffing.{' '}
                <span className="text-[#0F6B8A]">
                  Transparent shift rates.
                </span>
              </h1>
            )}

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#56717C] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {currentAudience === 'hospital' ? (
                <>
                  We are currently establishing our <strong>Pioneer Hospital Partner Network</strong> and 
                  pre-vetting licensed nurses before commercial shift rollout. 
                  Collaborate with us to deploy an on-demand surge buffer for bed occupancy peaks with transparent shift rates, 
                  and visit our exhibit booth at the <strong>PHAPi National Convention in November</strong>.
                </>
              ) : (
                <>
                  We are building a pre-vetted talent pool of registered nurses ahead of hospital deployment. 
                  Pre-register your PRC license today to get pre-verified, earn priority shift access, 
                  and help us design a healthcare platform that truly respects bedside nurses. 
                  <strong>Upfront shift transparency with direct digital wallet payouts.</strong>
                </>
              )}
            </p>

            {/* Real Pre-Launch Objectives */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#123A4A] max-w-xl mx-auto lg:mx-0">
              {currentAudience === 'hospital' ? (
                <>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A] shrink-0" />
                    <span>Shape surge shift criteria for your specialized units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A] shrink-0" />
                    <span>Live walk-in prototype demo at PHAPi (Nov 2026)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A] shrink-0" />
                    <span>Priority onboarding for pioneer medical centers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A] shrink-0" />
                    <span>Priority pool allocation at pilot launch</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A] shrink-0" />
                    <span>Pre-verify your PRC license ahead of launch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A] shrink-0" />
                    <span>Priority notification for ICU, ER, OR & Ward shifts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A] shrink-0" />
                    <span>Upfront agreed shift rates with zero surprise deductions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A] shrink-0" />
                    <span>Direct digital wallet payouts (GCash/Maya/Bank)</span>
                  </div>
                </>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              {currentAudience === 'hospital' ? (
                <>
                  <button
                    onClick={onOpenScheduleModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#0F6B8A] hover:bg-[#123A4A] shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Building2 className="w-4 h-4 text-sky-200" />
                    <span>Connect with our founding team</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#video-explainer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#123A4A] bg-[#EEF4F3] border border-[#D8E3E3] hover:bg-[#D8E3E3] transition-all shadow-sm"
                  >
                    <Play className="w-4 h-4 text-[#0F6B8A] fill-[#0F6B8A]" />
                    <span>Watch prototype demo</span>
                  </a>
                </>
              ) : (
                <>
                  <button
                    onClick={onOpenNurseModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#0F6B8A] hover:bg-[#123A4A] shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Pre-register in pioneer nurse pool</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#video-explainer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#123A4A] bg-[#EEF4F3] border border-[#D8E3E3] hover:bg-[#D8E3E3] transition-all shadow-sm"
                  >
                    <Play className="w-4 h-4 text-[#0F6B8A] fill-[#0F6B8A]" />
                    <span>Watch nurse app demo</span>
                  </a>
                </>
              )}
            </div>

            {/* Convention Note */}
            <div className="pt-2 text-xs text-[#56717C] flex items-center justify-center lg:justify-start gap-2">
              <Award className="w-4 h-4 text-[#EF7158] shrink-0" />
              <span>Attending PHAPi this November? Drop by our booth for an interactive prototype demo.</span>
            </div>

          </div>

          {/* Right Column: Platform Prototype Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F6B8A]/20 to-sky-500/10 rounded-[14px] blur-2xl -z-10" />

            <div className="relative rounded-[14px] bg-[#123A4A] p-6 shadow-2xl border border-white/10 text-white">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#EF7158]" />
                  <div className="w-3 h-3 rounded-full bg-[#00AEFD]" />
                  <div className="w-3 h-3 rounded-full bg-[#1D8A5A]" />
                  <span className="text-xs font-mono text-slate-300 ml-2">q1-konnect://prototype-mvp</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-[#00AEFD] border border-white/15">
                  <Sparkles className="w-3 h-3" />
                  PROTOTYPE COMPLETED
                </span>
              </div>

              {/* Dynamic View based on toggle */}
              {currentAudience === 'hospital' ? (
                <div className="py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Hospital Staffing Command</h4>
                      <p className="text-xs text-slate-400">Department of Nursing Service</p>
                    </div>
                    <span className="text-xs font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-lg border border-sky-800/50">
                      Pioneer Partner View
                    </span>
                  </div>

                  {/* Prototype Shift Card */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-sky-500/20 text-sky-300 mb-1 border border-sky-500/30">
                          PROTOTYPE SIMULATION
                        </span>
                        <h5 className="text-sm font-semibold text-white">ICU Staff Nurse (Night Shift)</h5>
                        <p className="text-xs text-slate-400">Critical Care Unit • 11:00 PM – 7:00 AM</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-sky-400">₱2,800</span>
                        <p className="text-[10px] text-slate-400">Direct Shift Rate</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-xs space-y-2">
                      <p className="text-slate-400 flex justify-between">
                        <span>Candidate PRC Verification:</span>
                        <span className="text-emerald-400 font-bold">Automated Database Check</span>
                      </p>
                      <p className="text-slate-400 flex justify-between">
                        <span>Attendance Verification:</span>
                        <span className="text-sky-300 font-bold">Geofenced Station QR</span>
                      </p>
                      <p className="text-slate-400 flex justify-between">
                        <span>Staffing Model:</span>
                        <span className="text-emerald-400 font-bold">Direct Hospital-to-Nurse</span>
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                    <span>Interested in an executive discussion?</span>
                    <button
                      onClick={onOpenScheduleModal}
                      className="text-xs font-bold text-sky-400 hover:text-sky-300 underline cursor-pointer"
                    >
                      Connect With Us →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Nurse Shift Companion</h4>
                      <p className="text-xs text-slate-400">Digital Career & Shift Wallet</p>
                    </div>
                    <span className="text-xs font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-lg border border-sky-800/50">
                      Pioneer Pool Preview
                    </span>
                  </div>

                  {/* Nurse App Mock Card */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-sky-500/20 text-sky-300 mb-1 border border-sky-500/30">
                          PRE-REGISTRATION BENEFIT
                        </span>
                        <h5 className="text-sm font-semibold text-white">Emergency Room (ER) Reliever</h5>
                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          7:00 AM – 3:00 PM • Partner Hospital
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-extrabold text-sky-400">₱2,500</span>
                        <p className="text-[10px] text-slate-400">Direct Take-Home</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-xs space-y-1.5">
                      <p className="text-slate-300 flex items-center gap-2">
                        <QrCode className="w-3.5 h-3.5 text-sky-400" />
                        <span>Instant QR check-in on hospital arrival</span>
                      </p>
                      <p className="text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Zero commission deducted from nurse pay</span>
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                    <span>Pre-register your PRC credentials:</span>
                    <button
                      onClick={onOpenNurseModal}
                      className="text-xs font-bold text-sky-400 hover:text-sky-300 underline cursor-pointer"
                    >
                      Sign Up Now →
                    </button>
                  </div>
                </div>
              )}

              {/* Convention Banner on Card */}
              <div className="mt-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 text-xs">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <p className="text-slate-300 text-[11px] leading-tight">
                  Exhibiting live prototype demos at the <strong>PHAPi Annual Convention (November 2026)</strong>.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
