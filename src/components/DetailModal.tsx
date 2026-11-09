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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#123A4A]/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white border border-[#D8E3E3] rounded-3xl max-w-4xl w-full shadow-2xl text-[#123A4A] overflow-hidden my-8 z-10 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#D8E3E3] shrink-0 bg-[#EEF4F3]">
          <div className="flex items-center gap-3">
            {type === 'hospital' && (
              <div className="p-2.5 rounded-xl bg-[#EF7158]/10 text-[#EF7158] border border-[#EF7158]/20">
                <Building2 className="w-5 h-5" />
              </div>
            )}
            {type === 'nurse' && (
              <div className="p-2.5 rounded-xl bg-[#0F6B8A]/10 text-[#0F6B8A] border border-[#0F6B8A]/20">
                <Stethoscope className="w-5 h-5" />
              </div>
            )}
            {type === 'video' && (
              <div className="p-2.5 rounded-xl bg-[#123A4A]/10 text-[#123A4A] border border-[#123A4A]/20">
                <Play className="w-5 h-5 fill-[#123A4A]" />
              </div>
            )}
            {type === 'roadmap' && (
              <div className="p-2.5 rounded-xl bg-[#0F6B8A]/10 text-[#0F6B8A] border border-[#0F6B8A]/20">
                <Layers className="w-5 h-5" />
              </div>
            )}
            {type === 'phapi' && (
              <div className="p-2.5 rounded-xl bg-[#EF7158]/10 text-[#EF7158] border border-[#EF7158]/20">
                <Award className="w-5 h-5" />
              </div>
            )}
            <div>
              <h3 className="text-xl font-extrabold font-display text-[#123A4A]">
                {type === 'hospital' && 'Hospital Command & Workforce Automation'}
                {type === 'nurse' && 'Nurse Shift Autonomy & Sovereign Career'}
                {type === 'video' && 'Q1 Konnect Video Explainer Theater'}
                {type === 'roadmap' && 'How Q1 Konnect Works: 3 Simple Steps'}
                {type === 'phapi' && 'PHAPi Annual Convention 2026 Showcase'}
              </h3>
              <p className="text-xs text-[#56717C]">
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
            className="p-2.5 rounded-full bg-white hover:bg-[#D8E3E3] text-[#56717C] hover:text-[#123A4A] border border-[#D8E3E3] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#123A4A] flex-1">
          
          {/* TYPE: HOSPITAL DEEP DIVE */}
          {type === 'hospital' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] border-l-4 border-l-[#EF7158] text-[#123A4A] text-xs leading-relaxed">
                <strong className="text-[#EF7158] font-bold">Elastic Surge & Relief Buffer:</strong> Q1 Konnect is engineered to support—not replace—your permanent clinical team. Activate verified per-diem nurses when patient bed occupancy surges, during seasonal census spikes, or for sudden leaves. Your facility carries zero fixed overhead when your core staff handles normal census.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <div className="flex items-center gap-2 text-[#123A4A] font-bold">
                    <Clock className="w-4 h-4 text-[#0F6B8A]" />
                    <span>60-Second Surge Broadcasting</span>
                  </div>
                  <p className="text-xs text-[#56717C] leading-relaxed">
                    Post unexpected shift gaps (bed occupancy surges, sudden leaves) in seconds. Our matching engine alerts verified nurses within your target hospital radius.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <div className="flex items-center gap-2 text-[#123A4A] font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#1D8A5A]" />
                    <span>Verified PRC credentials</span>
                  </div>
                  <p className="text-xs text-[#56717C] leading-relaxed">
                    Zero compliance liability. Every candidate is verified against official PRC records for active licenses, BLS, ACLS, and specialized unit tenure.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <div className="flex items-center gap-2 text-[#123A4A] font-bold">
                    <QrCode className="w-4 h-4 text-[#0F6B8A]" />
                    <span>Geofenced QR Timekeeping</span>
                  </div>
                  <p className="text-xs text-[#56717C] leading-relaxed">
                    Nurses scan a unique tamper-proof station QR code upon arrival at the ward. Shift hours are automatically verified against GPS coordinates with zero disputed paper logs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <div className="flex items-center gap-2 text-[#123A4A] font-bold">
                    <Building2 className="w-4 h-4 text-[#EF7158]" />
                    <span>Dedicated onboarding for pioneer partners</span>
                  </div>
                  <p className="text-xs text-[#56717C] leading-relaxed">
                    Join our founding cohort to receive priority ward configuration, clinical roster allocation, and direct input into feature roadmaps.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D8E3E3]">
                <span className="text-xs text-[#56717C]">
                  Ready to explore a custom partnership MoA?
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenDrawer('hospital_partner');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-white bg-[#0F6B8A] hover:bg-[#123A4A] transition-colors shadow-md cursor-pointer"
                >
                  Submit hospital partner inquiry →
                </button>
              </div>
            </div>
          )}

          {/* TYPE: NURSE DEEP DIVE */}
          {type === 'nurse' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] border-l-4 border-l-[#0F6B8A] text-[#123A4A] text-xs leading-relaxed">
                <strong className="text-[#0F6B8A] font-bold">Inaugural Nurse Talent Pool:</strong> Pre-register your PRC license today to get pre-verified. When our partner hospitals begin broadcasting pilot shifts, you get first-priority notifications with clear, upfront compensation.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <div className="flex items-center gap-2 text-[#123A4A] font-bold">
                    <Wallet className="w-4 h-4 text-[#1D8A5A]" />
                    <span>Upfront Pay Transparency</span>
                  </div>
                  <p className="text-xs text-[#56717C] leading-relaxed">
                    We believe in complete compensation transparency. When a hospital broadcasts an approved shift, the exact pay rate is visible upfront before you claim it, deposited promptly to your digital wallet.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <div className="flex items-center gap-2 text-[#123A4A] font-bold">
                    <Clock className="w-4 h-4 text-[#0F6B8A]" />
                    <span>Shift Sovereignty</span>
                  </div>
                  <p className="text-xs text-[#56717C] leading-relaxed">
                    Work strictly when it suits you. Pick morning, afternoon, night, or weekend shifts around your primary hospital schedule, family, or masteral studies.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <div className="flex items-center gap-2 text-[#123A4A] font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#0F6B8A]" />
                    <span>Digital Credential Passport</span>
                  </div>
                  <p className="text-xs text-[#56717C] leading-relaxed">
                    Your PRC ID, BLS, ACLS, IV certification, and certified bedside hours are saved in one secure digital profile recognized by accredited partner facilities.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <div className="flex items-center gap-2 text-[#123A4A] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A]" />
                    <span>Direct Digital Wallet Payouts</span>
                  </div>
                  <p className="text-xs text-[#56717C] leading-relaxed">
                    Prompt shift sign-off means prompt earnings. Transfer funds immediately to GCash, Maya, or any Philippine bank account.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D8E3E3]">
                <span className="text-xs text-[#56717C]">
                  Pre-registration takes under 2 minutes.
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenDrawer('nurse_registry');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-white bg-[#0F6B8A] hover:bg-[#123A4A] transition-colors shadow-md cursor-pointer"
                >
                  Pre-register your PRC profile →
                </button>
              </div>
            </div>
          )}

          {/* TYPE: VIDEO THEATER */}
          {type === 'video' && (
            <div className="space-y-6">
              
              {/* Video Tab Switcher */}
              <div className="flex justify-center">
                <div className="inline-flex p-1.5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3]">
                  <button
                    onClick={() => setActiveVideoTab('hospital')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeVideoTab === 'hospital'
                        ? 'bg-[#123A4A] text-white shadow-sm'
                        : 'text-[#56717C] hover:text-[#123A4A]'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Hospital Explainer</span>
                  </button>
                  <button
                    onClick={() => setActiveVideoTab('nurse')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeVideoTab === 'nurse'
                        ? 'bg-[#123A4A] text-white shadow-sm'
                        : 'text-[#56717C] hover:text-[#123A4A]'
                    }`}
                  >
                    <Stethoscope className="w-4 h-4" />
                    <span>Nurse Journey Explainer</span>
                  </button>
                </div>
              </div>

              {/* Responsive Google Drive Embed */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-[#D8E3E3] shadow-xl">
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

              <div className="p-4 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-xs text-[#56717C] flex items-center justify-between">
                <span>
                  {activeVideoTab === 'hospital' 
                    ? 'Showing Hospital Command Portal & Shift Broadcasting Architecture' 
                    : 'Showing Nurse Mobile Companion & Direct Wallet Payout Experience'}
                </span>
                <span className="font-bold text-[#0F6B8A]">Be connected.</span>
              </div>
            </div>
          )}

          {/* TYPE: HOW IT WORKS (formerly roadmap) */}
          {type === 'roadmap' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] border-l-4 border-l-[#0F6B8A] text-[#123A4A] text-xs leading-relaxed">
                <strong className="text-[#0F6B8A] font-bold">Streamlined Operational Flow:</strong> Q1 Konnect creates a frictionless bridge between hospital nursing departments and registered nurses, eliminating endless phone calls, paper logbook disputes, and staffing anxiety.
              </div>

              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#EF7158] uppercase tracking-wider">
                      Step 01: Shift Broadcasting
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#EF7158]/10 text-[#EF7158] border border-[#EF7158]/20">
                      Under 60 Seconds
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#123A4A]">Hospital Posts Open Shift</h4>
                  <p className="text-xs text-[#56717C] leading-relaxed">
                    The nursing supervisor defines vacant shifts (ICU, ER, General Ward, Hemodialysis), selects required certifications (BLS, ACLS), and sets the agreed shift compensation. Supports urgent emergency relief or planned roster vacancies.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#1D8A5A] uppercase tracking-wider">
                      Step 02: Automated Matching
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#1D8A5A]/10 text-[#1D8A5A] border border-[#1D8A5A]/20">
                      PRC Pre-Verified
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#123A4A]">Nurse Receives Instant Alert & Claims Shift</h4>
                  <p className="text-xs text-[#56717C] leading-relaxed">
                    Qualified registered nurses in the hospital's geographic zone receive push notifications with the facility name, ward, hours, and pay rate displayed transparently. The nurse claims the shift in one tap with credentials already pre-verified.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0F6B8A] uppercase tracking-wider">
                      Step 03: Geofenced Attendance
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0F6B8A]/10 text-[#0F6B8A] border border-[#0F6B8A]/20">
                      Zero Paperwork
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#123A4A]">Ward QR Clock-In & Digital Settlement</h4>
                  <p className="text-xs text-[#56717C] leading-relaxed">
                    The nurse arrives at the medical center and scans the department station QR code to clock in. At shift completion, the supervisor digitally approves completed hours, and timesheets are automatically reconciled to digital wallets.
                  </p>
                </div>

              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D8E3E3]">
                <span className="text-xs text-[#56717C]">
                  Ready to test our prototype at the PHAPi convention?
                </span>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDrawer('hospital_partner');
                    }}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#0F6B8A] hover:bg-[#123A4A] transition-colors cursor-pointer shadow-sm"
                  >
                    Hospital partner inquiry
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDrawer('nurse_registry');
                    }}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-bold text-[#123A4A] bg-white hover:bg-[#EEF4F3] border border-[#D8E3E3] transition-colors cursor-pointer"
                  >
                    Nurse pre-register
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TYPE: PHAPI */}
          {type === 'phapi' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#EEF4F3] border border-[#EF7158]/30 border-l-4 border-l-[#EF7158] space-y-2">
                <span className="text-xs font-mono font-bold text-[#EF7158] uppercase tracking-wider">
                  Official Exhibitor Announcement
                </span>
                <h4 className="text-xl font-extrabold text-[#123A4A] font-display">
                  Private Hospitals Association of the Philippines (PHAPi) Annual Convention
                </h4>
                <p className="text-xs text-[#56717C] leading-relaxed">
                  Join hundreds of Hospital Owners, Medical Directors, and Chief Nursing Officers discovering next-generation clinical workforce automation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <span className="font-bold text-[#123A4A] block">Convention Date:</span>
                  <p className="text-[#EF7158] font-bold text-base">November 2026</p>
                  <p className="text-[#56717C]">National Healthcare Convention</p>
                </div>

                <div className="p-4 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-2">
                  <span className="font-bold text-[#123A4A] block">Booth Format:</span>
                  <p className="text-[#0F6B8A] font-bold text-base">Open Walk-In Demos</p>
                  <p className="text-[#56717C]">No scheduled appointment required to visit booth</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#EEF4F3] border border-[#D8E3E3] space-y-3">
                <span className="text-xs font-bold text-[#123A4A] uppercase tracking-wider block">
                  What to Explore at Our Exhibit Booth:
                </span>
                <div className="space-y-2 text-xs text-[#56717C]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A] shrink-0" />
                    <span className="text-[#123A4A]">Live interactive prototype & MVP demo on hospital command displays</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A] shrink-0" />
                    <span className="text-[#123A4A]">Pick up our Pioneer Hospital Partner Prospectus & standard MoA guidelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D8A5A] shrink-0" />
                    <span className="text-[#123A4A]">Meet our founding executive and clinical engineering leadership in person</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D8E3E3]">
                <span className="text-xs text-[#56717C]">
                  Can't attend PHAPi in person?
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenDrawer('hospital_partner');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-white bg-[#EF7158] hover:bg-[#C9452C] transition-colors shadow-md cursor-pointer"
                >
                  Request dedicated online briefing →
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
