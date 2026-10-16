import React, { useState } from 'react';
import { DeepDiveModalType, InquiryDrawerType } from '../types';
import { 
  X, 
  Building2, 
  Stethoscope, 
  Layers, 
  Award, 
  Play, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  QrCode, 
  Wallet,
  ArrowRight,
  ExternalLink,
  MapPin,
  CalendarCheck
} from 'lucide-react';

interface DetailModalProps {
  type: DeepDiveModalType;
  onClose: () => void;
  onOpenDrawer: (drawer: InquiryDrawerType) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ type, onClose, onOpenDrawer }) => {
  const [activeVideoTab, setActiveVideoTab] = useState<'hospital' | 'nurse'>('hospital');

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full shadow-2xl text-white overflow-hidden my-8 z-10 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-slate-800 shrink-0 bg-slate-950/60">
          <div className="flex items-center gap-3">
            {type === 'hospital' && (
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Building2 className="w-5 h-5" />
              </div>
            )}
            {type === 'nurse' && (
              <div className="p-2 rounded-xl bg-blue-500/10 text-sky-400 border border-blue-500/20">
                <Stethoscope className="w-5 h-5" />
              </div>
            )}
            {type === 'video' && (
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Play className="w-5 h-5 fill-sky-400" />
              </div>
            )}
            {type === 'roadmap' && (
              <div className="p-2 rounded-xl bg-white/5 text-sky-400 border border-white/10">
                <Layers className="w-5 h-5" />
              </div>
            )}
            {type === 'phapi' && (
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="w-5 h-5" />
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold font-display text-white">
                {type === 'hospital' && 'Hospital Command & Workforce Automation'}
                {type === 'nurse' && 'Nurse Shift Autonomy & Sovereign Career'}
                {type === 'video' && 'Q1 Konnect Video Explainer Theater'}
                {type === 'roadmap' && 'How Q1 Konnect Works: 3 Simple Steps'}
                {type === 'phapi' && 'PHAPi Annual Convention 2026 Showcase'}
              </h3>
              <p className="text-xs text-slate-400">
                {type === 'hospital' && 'Precision staffing engineered for Chief Nursing Officers & Medical Directors'}
                {type === 'nurse' && 'Flexible per-diem shifts with transparent agreed rates & direct digital wallet pay'}
                {type === 'video' && 'Official prototype walk-through videos for hospital executives and bedside nurses'}
                {type === 'roadmap' && 'A seamless operational loop connecting hospital vacancy to bedside clinical care'}
                {type === 'phapi' && 'Open walk-in interactive prototype demos at our exhibit booth this November'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 flex-1">
          
          {/* TYPE: HOSPITAL DEEP DIVE */}
          {type === 'hospital' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs leading-relaxed">
                <strong>Elastic Surge & Relief Buffer:</strong> Q1 Konnect is engineered to support—not replace—your permanent clinical team. Activate verified per-diem nurses when patient bed occupancy surges, during seasonal census spikes, or for sudden leaves. Your facility carries zero fixed overhead when your core staff handles normal census.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <span>60-Second Surge Broadcasting</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Post unexpected shift gaps (bed occupancy surges, sudden leaves) in seconds. Our matching engine alerts verified nurses within your target hospital radius.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>100% PRC Database Checks</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Zero compliance liability. Every candidate is checked against official PRC databases for active licenses, BLS, ACLS, and specialized unit tenure.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <QrCode className="w-4 h-4 text-sky-400" />
                    <span>Geofenced QR Timekeeping</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Nurses scan a unique tamper-proof station QR code upon arrival at the ward. Shift hours are automatically verified against GPS coordinates with zero disputed paper logs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <span>Zero Setup Fees for Pioneer Partners</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Join our founding cohort to receive free ward configuration, priority clinical roster allocation, and direct input into feature roadmaps.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
                <span className="text-xs text-slate-400">
                  Ready to explore a custom partnership MoA?
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenDrawer('hospital_partner');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors shadow-lg cursor-pointer"
                >
                  Submit Hospital Partner Inquiry →
                </button>
              </div>
            </div>
          )}

          {/* TYPE: NURSE DEEP DIVE */}
          {type === 'nurse' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-sky-300 text-xs leading-relaxed">
                <strong>Inaugural Nurse Talent Pool:</strong> Pre-register your PRC license today to get pre-verified. When our partner hospitals begin broadcasting pilot shifts, you get first-priority notifications with clear, upfront compensation.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Wallet className="w-4 h-4 text-emerald-400" />
                    <span>Upfront Pay Transparency</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We believe in complete compensation transparency. When a hospital broadcasts an approved shift, the exact pay rate is visible upfront before you claim it, deposited promptly to your digital wallet.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <span>Shift Sovereignty</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Work strictly when it suits you. Pick morning, afternoon, night, or weekend shifts around your primary hospital schedule, family, or masteral studies.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <span>Digital Credential Passport</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Your PRC ID, BLS, ACLS, IV certification, and certified bedside hours are saved in one secure digital profile recognized by accredited partner facilities.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Direct Digital Wallet Payouts</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Prompt shift sign-off means prompt earnings. Transfer funds immediately to GCash, Maya, or any Philippine bank account.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
                <span className="text-xs text-slate-400">
                  Pre-registration takes under 2 minutes.
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenDrawer('nurse_registry');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors shadow-lg cursor-pointer"
                >
                  Pre-Register Your PRC Profile →
                </button>
              </div>
            </div>
          )}

          {/* TYPE: VIDEO THEATER */}
          {type === 'video' && (
            <div className="space-y-6">
              
              {/* Video Tab Switcher */}
              <div className="flex justify-center">
                <div className="inline-flex p-1.5 rounded-2xl bg-slate-950 border border-slate-800">
                  <button
                    onClick={() => setActiveVideoTab('hospital')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeVideoTab === 'hospital'
                        ? 'bg-sky-500 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Hospital Explainer</span>
                  </button>
                  <button
                    onClick={() => setActiveVideoTab('nurse')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeVideoTab === 'nurse'
                        ? 'bg-sky-500 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Stethoscope className="w-4 h-4" />
                    <span>Nurse Journey Explainer</span>
                  </button>
                </div>
              </div>

              {/* Responsive Google Drive Embed */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-2xl">
                {activeVideoTab === 'hospital' ? (
                  <iframe
                    src="https://drive.google.com/file/d/1gB7YZ1XxMLFuDKviMxfq4PlRSfUGhjAC/preview"
                    className="w-full h-full border-0"
                    allow="autoplay"
                    title="Q1 Konnect Hospital Explainer Video"
                  />
                ) : (
                  <iframe
                    src="https://drive.google.com/file/d/18USOxtiLAMqKC_AyUXdskoS25vpw-5ic/preview"
                    className="w-full h-full border-0"
                    allow="autoplay"
                    title="Q1 Konnect Nurse Explainer Video"
                  />
                )}
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>
                  {activeVideoTab === 'hospital' 
                    ? 'Showing Hospital Command Portal & Shift Broadcasting Architecture' 
                    : 'Showing Nurse Mobile Companion & Direct Wallet Payout Experience'}
                </span>
                <span className="font-bold text-sky-400">Official Q1 Konnect Media</span>
              </div>
            </div>
          )}

          {/* TYPE: HOW IT WORKS (formerly roadmap) */}
          {type === 'roadmap' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs leading-relaxed">
                <strong>Streamlined Operational Flow:</strong> Q1 Konnect creates a frictionless bridge between hospital nursing departments and registered nurses, eliminating endless phone calls, paper logbook disputes, and staffing anxiety.
              </div>

              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                      Step 01: Shift Broadcasting
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                      Under 60 Seconds
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">Hospital Posts Open Shift</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    The nursing supervisor defines vacant shifts (ICU, ER, General Ward, Hemodialysis), selects required certifications (BLS, ACLS), and sets the agreed shift compensation. Supports urgent emergency relief or planned roster vacancies.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      Step 02: Automated Matching
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      PRC Pre-Verified
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">Nurse Receives Instant Alert & Claims Shift</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Qualified registered nurses in the hospital's geographic zone receive push notifications with the facility name, ward, hours, and pay rate displayed transparently. The nurse claims the shift in one tap with credentials already pre-verified.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                      Step 03: Geofenced Attendance
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-white border border-white/20">
                      Zero Paperwork
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">Ward QR Clock-In & Digital Settlement</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    The nurse arrives at the medical center and scans the department station QR code to clock in. At shift completion, the supervisor digitally approves completed hours, and timesheets are automatically reconciled to digital wallets.
                  </p>
                </div>

              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
                <span className="text-xs text-slate-400">
                  Ready to test our prototype at the PHAPi convention?
                </span>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDrawer('hospital_partner');
                    }}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors cursor-pointer"
                  >
                    Hospital Partner Inquiry
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDrawer('nurse_registry');
                    }}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 cursor-pointer"
                  >
                    Nurse Pre-Register
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TYPE: PHAPI */}
          {type === 'phapi' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Official Exhibitor Announcement
                </span>
                <h4 className="text-xl font-bold text-white font-display">
                  Private Hospitals Association of the Philippines (PHAPi) Annual Convention
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Join hundreds of Hospital Owners, Medical Directors, and Chief Nursing Officers discovering next-generation clinical workforce automation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-bold text-white block">Convention Date:</span>
                  <p className="text-amber-300 font-bold text-base">November 2026</p>
                  <p className="text-slate-400">National Healthcare Convention</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-bold text-white block">Booth Format:</span>
                  <p className="text-sky-300 font-bold text-base">Open Walk-In Demos</p>
                  <p className="text-slate-400">No scheduled appointment required to visit booth</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  What to Explore at Our Exhibit Booth:
                </span>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Live interactive prototype & MVP demo on hospital command displays</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Pick up our Pioneer Hospital Partner Prospectus & standard MoA guidelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Meet our founding executive and clinical engineering leadership in person</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
                <span className="text-xs text-slate-400">
                  Can't attend PHAPi in person?
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenDrawer('hospital_partner');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg cursor-pointer"
                >
                  Request Dedicated Online Briefing →
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
