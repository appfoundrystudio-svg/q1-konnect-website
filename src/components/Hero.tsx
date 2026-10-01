import React from 'react';
import { Audience } from '../types/landing';
import { 
  Building2, 
  Stethoscope, 
  Calendar, 
  UserPlus, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Sparkles,
  MapPin,
  QrCode,
  Award
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Audience Pill Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white shadow-lg shadow-slate-200/60 border border-slate-200/80">
            <button
              onClick={() => onAudienceChange('hospital')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                currentAudience === 'hospital'
                  ? 'bg-gradient-to-r from-teal-700 to-teal-800 text-white shadow-md shadow-teal-900/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Building2 className={`w-4 h-4 ${currentAudience === 'hospital' ? 'text-teal-200' : 'text-slate-400'}`} />
              <span>I am a Hospital / Clinic</span>
            </button>
            <button
              onClick={() => onAudienceChange('nurse')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                currentAudience === 'nurse'
                  ? 'bg-gradient-to-r from-sky-600 to-teal-700 text-white shadow-md shadow-sky-900/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Stethoscope className={`w-4 h-4 ${currentAudience === 'nurse' ? 'text-sky-200' : 'text-slate-400'}`} />
              <span>I am a Registered Nurse</span>
            </button>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-100/70 text-teal-800 border border-teal-200">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>
                {currentAudience === 'hospital' 
                  ? 'Next-Gen Clinical Workforce Solution' 
                  : 'Flexible Healthcare Career & Reliever Shifts'}
              </span>
            </div>

            {/* Dynamic Headline */}
            {currentAudience === 'hospital' ? (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-heading">
                End Clinical Shortages.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-sky-600">
                  Fill Hospital Shifts
                </span>{' '}
                with Verified Nurses in Minutes.
              </h1>
            ) : (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-heading">
                Take Charge of Your Shifts.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-teal-800">
                  Work When You Want
                </span>{' '}
                & Earn What You Deserve.
              </h1>
            )}

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {currentAudience === 'hospital' ? (
                <>
                  Connect directly with pre-screened, <strong>PRC-licensed Registered Nurses</strong>. 
                  Broadcast emergency relief shifts, manage internal & external float pools, and automate 
                  compliance without predatory agency commissions.
                </>
              ) : (
                <>
                  Join the Philippines' smartest nursing network. Unlock high-paying reliever shifts at top 
                  accredited medical facilities, track earnings with instant payouts, and maintain your 
                  PRC-verified digital career passport.
                </>
              )}
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 max-w-xl mx-auto lg:mx-0">
              {currentAudience === 'hospital' ? (
                <>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Instant PRC & Credential Verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Geo-fenced QR Attendance & Timesheets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>98.4% Average Shift Fill Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Zero Long-Term Lock-in or Retainers</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Flexible shifts (ICU, ER, Ward, Dialysis)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Fast digital wallet payouts & earnings tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Accredited partner hospitals & clinics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>100% Free for Nurses — zero fees</span>
                  </div>
                </>
              )}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {currentAudience === 'hospital' ? (
                <>
                  <button
                    onClick={onOpenScheduleModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900 shadow-xl shadow-teal-900/25 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Calendar className="w-5 h-5 text-teal-200" />
                    <span>Schedule Hospital Discovery Meeting</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#hospital-roi"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all"
                  >
                    <span>Calculate Staffing Savings</span>
                  </a>
                </>
              ) : (
                <>
                  <button
                    onClick={onOpenNurseModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-sky-600 to-teal-700 hover:from-sky-700 hover:to-teal-800 shadow-xl shadow-sky-900/25 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <UserPlus className="w-5 h-5 text-sky-200" />
                    <span>Sign Up for Nurse Talent Pool</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#nurse-earnings"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all"
                  >
                    <span>Calculate Monthly Earnings</span>
                  </a>
                </>
              )}
            </div>

            {/* Social Trust Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center border-2 border-white text-xs">RN</div>
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center border-2 border-white text-xs">MD</div>
                <div className="w-8 h-8 rounded-full bg-slate-700 text-white font-bold flex items-center justify-center border-2 border-white text-xs">CNO</div>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Trusted across Philippine healthcare</p>
                <p>Private hospitals, specialty clinics & medical centers</p>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Device / Platform Preview Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-sky-500/20 rounded-3xl blur-2xl -z-10" />

            <div className="relative rounded-3xl bg-slate-900 p-6 shadow-2xl border border-slate-800 text-white">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">q1-konnect://live-dispatch</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE NETWORK
                </span>
              </div>

              {/* Card Body - Content changes depending on toggle */}
              {currentAudience === 'hospital' ? (
                <div className="py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Hospital Staffing Command</h4>
                      <p className="text-xs text-slate-400">Metro Manila • Tertiary Medical Center</p>
                    </div>
                    <span className="text-xs font-bold text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/50">
                      Active Shift Surge
                    </span>
                  </div>

                  {/* Active Shift Card */}
                  <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-rose-500/20 text-rose-400 mb-1 border border-rose-500/30">
                          URGENT RELIEF
                        </span>
                        <h5 className="text-sm font-semibold text-white">ICU Staff Nurse (Night Shift)</h5>
                        <p className="text-xs text-slate-400">11:00 PM – 7:00 AM • Critical Care Unit</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-teal-300">₱2,800</span>
                        <p className="text-[10px] text-slate-400">Per Shift Rate</p>
                      </div>
                    </div>

                    {/* Matched Candidates Mini List */}
                    <div className="pt-2 border-t border-slate-700/60 space-y-2">
                      <p className="text-[11px] font-medium text-slate-300 flex items-center justify-between">
                        <span>Matched Candidates (3 available)</span>
                        <span className="text-teal-400">AI Match: 98%</span>
                      </p>
                      
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center text-[11px]">
                            MC
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">Maria C., RN</p>
                            <p className="text-[10px] text-slate-400">PRC #089421 • 5 yrs ICU Bedside</p>
                          </div>
                        </div>
                        <button 
                          onClick={onOpenScheduleModal}
                          className="px-2.5 py-1 bg-teal-600 hover:bg-teal-500 text-white rounded text-[11px] font-semibold transition-colors cursor-pointer"
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Real-time metrics mini strip */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-800">
                      <p className="text-xs font-bold text-white">12 mins</p>
                      <p className="text-[10px] text-slate-400">Avg. Fill Time</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-800">
                      <p className="text-xs font-bold text-emerald-400">100%</p>
                      <p className="text-[10px] text-slate-400">PRC Verified</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-800">
                      <p className="text-xs font-bold text-sky-400">QR Geo</p>
                      <p className="text-[10px] text-slate-400">Auto Timecard</p>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Nurse Shift Companion</h4>
                      <p className="text-xs text-slate-400">Welcome, Nurse Juan • PRC #091244</p>
                    </div>
                    <span className="text-xs font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-lg border border-sky-800/50">
                      Available for Shifts
                    </span>
                  </div>

                  {/* Available Shift Card for Nurses */}
                  <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-teal-500/20 text-teal-300 mb-1 border border-teal-500/30">
                          IMMEDIATE CLAIM
                        </span>
                        <h5 className="text-sm font-semibold text-white">Emergency Room (ER) Staff Nurse</h5>
                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-rose-400" />
                          St. Luke's Area • 7:00 AM – 3:00 PM
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-extrabold text-sky-400">₱2,400</span>
                        <p className="text-[10px] text-slate-400">+ Hazard pay incl.</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-700/60 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <QrCode className="w-4 h-4 text-teal-400" />
                        <span>Instant QR Clock-in</span>
                      </div>
                      <button 
                        onClick={onOpenNurseModal}
                        className="px-3 py-1.5 bg-gradient-to-r from-sky-500 to-teal-600 hover:from-sky-400 hover:to-teal-500 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-md"
                      >
                        Claim Shift
                      </button>
                    </div>
                  </div>

                  {/* Earnings summary strip */}
                  <div className="p-2.5 rounded-xl bg-gradient-to-r from-slate-800 to-slate-850 border border-slate-700 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-teal-600/30 text-teal-300">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400">Weekly Projected Extra</p>
                        <p className="font-bold text-white">₱9,600 (3 Shifts)</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      Direct Payout
                    </span>
                  </div>

                </div>
              )}

              {/* Floating Testimonial Snippet inside Mockup */}
              <div className="mt-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 text-xs">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <p className="text-slate-300 text-[11px] leading-tight">
                  {currentAudience === 'hospital'
                    ? '"Q1 Konnect cut our staffing lead time from 3 days to under 30 minutes."'
                    : '"I chose my shifts between family duties and doubled my monthly income."'}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
