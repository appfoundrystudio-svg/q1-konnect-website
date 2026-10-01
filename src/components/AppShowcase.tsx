import React, { useState } from 'react';
import { 
  Smartphone, 
  Monitor, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  QrCode, 
  WifiOff
} from 'lucide-react';

export const AppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hospital_portal' | 'nurse_mobile'>('hospital_portal');

  return (
    <section id="app-showcase" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive MVP Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading">
            A Dual Engine Built for Reliability & Speed.
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            Preview the working technology behind Q1 Konnect. Built as a unified platform 
            connecting facility staffing supervisors with mobile clinical professionals.
          </p>

          {/* Toggle Buttons */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              <button
                onClick={() => setActiveTab('hospital_portal')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'hospital_portal'
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Hospital Staffing Portal</span>
              </button>
              <button
                onClick={() => setActiveTab('nurse_mobile')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'nurse_mobile'
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Nurse Mobile Companion (PWA)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Showcase */}
        {activeTab === 'hospital_portal' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Features Description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Hospital Command Portal
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Total Control Over Shifts, Rosters & Credential Verifications.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether managing daily ICU vacancies or unexpected ER call-outs, hospital supervisors 
                broadcast shifts in seconds and review applicants with verified PRC credentials and 
                clinical scoring.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'One-Click Urgent Dispatch',
                    desc: 'Publish urgent relief shifts with immediate push alerts sent to verified nurses within your target hospital radius.',
                  },
                  {
                    title: 'Candidate Match Scoring',
                    desc: 'Review applicants scored objectively on clinical bedside years, active certifications (BLS/ACLS), and verified credentials.',
                  },
                  {
                    title: 'Live QR Shift Attendance',
                    desc: 'Real-time clock-in logs verified via department QR scans and GPS coordinates. Zero paper logbook discrepancies.',
                  },
                  {
                    title: 'Automated Timesheet Invoicing',
                    desc: 'Itemized, transparent shift billing generated automatically at the end of each shift without agency markups.',
                  },
                ].map((feat) => (
                  <div key={feat.title} className="flex items-start gap-3.5">
                    <div className="p-1 rounded-full bg-sky-500/20 text-sky-400 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* UI Preview Card for Hospital */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl space-y-5">
                
                {/* Simulated Portal Topbar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-500 flex items-center justify-center font-bold text-slate-950 text-xs">
                      QK
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Private Hospital Demo Account</p>
                      <p className="text-[11px] text-sky-400">Department: Intensive Care Unit (ICU)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      ● Prototype Mode
                    </span>
                  </div>
                </div>

                {/* Shift Posting Simulation */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold uppercase tracking-wider">Shift Roster Preview</span>
                    <span>Urgent Call-Out Simulation</span>
                  </div>

                  {/* Shift Item 1 */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                            URGENT
                          </span>
                          <span className="text-sm font-bold text-white">ICU Staff Nurse (Night Shift)</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          Tonight: 11:00 PM – 7:00 AM • Floor 4, Critical Care
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-extrabold text-sky-400">₱2,800</span>
                        <p className="text-[10px] text-slate-400">Direct Shift Rate</p>
                      </div>
                    </div>

                    {/* Matched Candidates Preview */}
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs">
                          MR
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-200">Maria Ramirez, RN</p>
                          <p className="text-[10px] text-slate-400">PRC #087321 (Active) • 5 yrs Bedside</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          98% Match
                        </span>
                        <span className="px-2.5 py-1 rounded bg-sky-500 text-slate-950 text-xs font-bold">
                          Assigned
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Shift Item 2 */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                          PLANNED
                        </span>
                        <span className="text-sm font-bold text-white">Emergency Room (Day Shift)</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">Tomorrow: 7:00 AM – 3:00 PM • ER Triage</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-sky-400">Automated Broadcast</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Quick Metric */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                  <span>Attendance Verification: <strong className="text-sky-400">Geofenced Station QR</strong></span>
                  <span>Supervisor Sign-Off: <strong className="text-white">Digital One-Tap</strong></span>
                </div>

              </div>
            </div>

          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Features Description for Nurses */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Nurse Mobile Companion
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Everything a Modern Nurse Needs in the Palm of Your Hand.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Engineered as a Progressive Web App (PWA) with offline capabilities. Pick shifts on the 
                commute, verify department details, check in instantly via QR, and watch your earnings 
                grow without administrative hassle.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'One-Tap Shift Claiming',
                    desc: 'Filter shifts by hospital proximity, hourly rate, and ward specialty. Claim in one tap.',
                  },
                  {
                    title: 'Digital Credential Wallet',
                    desc: 'Store your PRC ID, BLS/ACLS, IV therapy, and clinical diplomas in one tamper-proof wallet.',
                  },
                  {
                    title: 'QR Scan Clock-In & Out',
                    desc: 'Scan the station barcode upon arrival. Instant time verification directly to your record.',
                  },
                  {
                    title: 'Offline Support',
                    desc: 'Access your active shift details, hospital directions, and contact lines even when inside hospital basement cellular dead zones.',
                  },
                ].map((feat) => (
                  <div key={feat.title} className="flex items-start gap-3.5">
                    <div className="p-1 rounded-full bg-sky-500/20 text-sky-400 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Mockup for Nurse */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-sm rounded-[36px] bg-slate-950 p-4 border-4 border-slate-800 shadow-2xl relative">
                
                {/* Speaker Notch */}
                <div className="w-32 h-4 bg-slate-900 rounded-full mx-auto mb-3" />

                {/* Mobile Screen Content */}
                <div className="bg-slate-900 rounded-[28px] p-4 text-white space-y-4 border border-slate-800">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400">Welcome,</p>
                      <h5 className="text-sm font-bold text-white">Nurse Juan Dela Cruz, RN</h5>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center text-xs font-bold">
                      JD
                    </div>
                  </div>

                  {/* Digital Wallet Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-sky-500/30 text-white space-y-2">
                    <p className="text-[11px] text-sky-300 flex items-center justify-between">
                      <span>Simulated Shift Earnings</span>
                      <span className="text-[10px] bg-sky-500/20 px-2 py-0.5 rounded text-sky-300">Prototype Demo</span>
                    </p>
                    <div className="text-2xl font-extrabold font-heading text-white">
                      ₱14,800.00
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                      <span>5 Shifts Completed</span>
                      <span className="font-semibold text-sky-400">GCash / Maya</span>
                    </div>
                  </div>

                  {/* Active Shift Card */}
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/20 text-sky-300">
                        NEXT SHIFT TODAY
                      </span>
                      <span className="text-xs font-bold text-sky-400">₱3,000 / shift</span>
                    </div>

                    <div>
                      <h6 className="text-xs font-bold text-white">Partner Medical Center</h6>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-slate-400" />
                        3:00 PM – 11:00 PM • Hemodialysis Unit
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer">
                        <QrCode className="w-3.5 h-3.5" />
                        <span>Scan Station QR</span>
                      </button>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <WifiOff className="w-3.5 h-3.5 text-sky-400" />
                      Offline Mode Ready
                    </span>
                    <span className="text-emerald-400 font-semibold">PRC Verified</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
