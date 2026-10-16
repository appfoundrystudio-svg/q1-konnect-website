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
          <div className="inline-flex p-1.5 rounded-2xl bg-white shadow-xl shadow-slate-200/60 border border-slate-200/80">
            <button
              onClick={() => onAudienceChange('hospital')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                currentAudience === 'hospital'
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Building2 className={`w-4 h-4 ${currentAudience === 'hospital' ? 'text-sky-400' : 'text-slate-400'}`} />
              <span>For Hospital & Clinic Partners</span>
            </button>
            <button
              onClick={() => onAudienceChange('nurse')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                currentAudience === 'nurse'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Stethoscope className={`w-4 h-4 ${currentAudience === 'nurse' ? 'text-white' : 'text-slate-400'}`} />
              <span>For Registered Nurses</span>
            </button>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Stage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200">
              <Users2 className="w-3.5 h-3.5 text-sky-600" />
              <span>
                {currentAudience === 'hospital' 
                  ? 'Pioneer Hospital Partner Program • Pre-Launch Phase' 
                  : 'Inaugural Nurse Registry Pre-Registration'}
              </span>
            </div>

            {/* Dynamic Headline */}
            {currentAudience === 'hospital' ? (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] font-heading">
                On-Demand Clinical{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700">
                  Workforce Infrastructure
                </span>{' '}
                for Healthcare Facilities.
              </h1>
            ) : (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] font-heading">
                Direct Hospital-to-Nurse Staffing.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-slate-900">
                  Transparent Shift Rates.
                </span>
              </h1>
            )}

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {currentAudience === 'hospital' ? (
                <>
                  We are currently establishing our <strong>Pioneer Hospital Partner Network</strong> and 
                  pre-vetting licensed nurses before commercial shift rollout. 
                  Collaborate with us to deploy direct hospital-to-nurse staffing with transparent shift rates, 
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700 max-w-xl mx-auto lg:mx-0">
              {currentAudience === 'hospital' ? (
                <>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Shape shift criteria for your specialized units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Live walk-in prototype demo at PHAPi (Nov 2026)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Zero onboarding fees for pioneer medical centers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Guaranteed priority pool allocation at pilot launch</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Pre-verify your PRC license ahead of launch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Priority notification for ICU, ER, OR & Ward shifts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Upfront agreed shift rates with zero surprise deductions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
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
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-950 hover:bg-black shadow-xl shadow-slate-900/25 transition-all cursor-pointer transform hover:-translate-y-0.5 border border-slate-800"
                  >
                    <Building2 className="w-4 h-4 text-sky-400" />
                    <span>Connect With Our Founding Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#video-explainer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
                  >
                    <Play className="w-4 h-4 text-sky-500 fill-sky-500" />
                    <span>Watch Prototype Demo</span>
                  </a>
                </>
              ) : (
                <>
                  <button
                    onClick={onOpenNurseModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-sky-500 hover:bg-sky-400 shadow-xl shadow-sky-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Pre-Register in Pioneer Nurse Pool</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#video-explainer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
                  >
                    <Play className="w-4 h-4 text-sky-500 fill-sky-500" />
                    <span>Watch Nurse App Demo</span>
                  </a>
                </>
              )}
            </div>

            {/* Convention Note */}
            <div className="pt-2 text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-2">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Attending PHAPi this November? Drop by our booth for an interactive prototype demo!</span>
            </div>

          </div>

          {/* Right Column: Platform Prototype Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />

            <div className="relative rounded-3xl bg-slate-950 p-6 shadow-2xl border border-slate-800 text-white">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">q1-konnect://prototype-mvp</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
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
