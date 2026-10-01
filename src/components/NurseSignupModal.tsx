import React, { useState } from 'react';
import { 
  X, 
  Stethoscope, 
  UserPlus, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Smartphone,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { NurseSignupRequest } from '../types/landing';
import { saveNurseSignupRequest } from '../services/leadStorage';

interface NurseSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSubmitted: () => void;
}

export const NurseSignupModal: React.FC<NurseSignupModalProps> = ({
  isOpen,
  onClose,
  onLeadSubmitted,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    prcLicenseNumber: '',
    prcExpiry: '2027-12-31',
    yearsExperience: '1_to_3_years',
    highestEducation: 'BSN',
    currentEmploymentStatus: 'seeking_reliever',
    specialties: ['General Ward', 'Emergency Room (ER)'],
    certifications: ['BLS', 'IV Therapy'],
    preferredLocations: 'Metro Manila (Central & South)',
    availableShifts: ['Day Shift', 'Night Shift', 'Weekend Reliever'],
  });

  const [submittedNurse, setSubmittedNurse] = useState<NurseSignupRequest | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const specialtyOptions = [
    'General Ward / Med-Surg',
    'Emergency Room (ER)',
    'Intensive Care Unit (ICU)',
    'Hemodialysis Unit',
    'Operating Room (OR)',
    'Pediatrics / NICU',
    'Outpatient Clinic',
  ];

  const certOptions = ['BLS', 'ACLS', 'IV Therapy', 'PALS', 'NCLEX Passer'];

  const handleSpecialtyToggle = (spec: string) => {
    if (formData.specialties.includes(spec)) {
      setFormData({
        ...formData,
        specialties: formData.specialties.filter((s) => s !== spec),
      });
    } else {
      setFormData({
        ...formData,
        specialties: [...formData.specialties, spec],
      });
    }
  };

  const handleCertToggle = (cert: string) => {
    if (formData.certifications.includes(cert)) {
      setFormData({
        ...formData,
        certifications: formData.certifications.filter((c) => c !== cert),
      });
    } else {
      setFormData({
        ...formData,
        certifications: [...formData.certifications, cert],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.prcLicenseNumber) {
      setErrorMessage('Please provide your name, contact info, and PRC License number.');
      return;
    }

    try {
      const saved = saveNurseSignupRequest(formData);
      setSubmittedNurse(saved);
      onLeadSubmitted();
      setErrorMessage('');
    } catch {
      setErrorMessage('Failed to submit application. Please try again.');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-700 via-teal-700 to-teal-800 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-950/30 hover:bg-slate-950/60 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-3 border border-white/30">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Nurse Fast-Track Pool Onboarding</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Join the Premier Nurse Network
          </h3>
          <p className="text-xs sm:text-sm text-teal-100 mt-1 max-w-lg">
            Unlock flexible, high-paying reliever shifts at accredited partner facilities with instant digital payouts and zero nurse fees.
          </p>
        </div>

        {submittedNurse ? (
          /* Confirmation Success State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-slate-900 font-heading">
                Welcome to the Pool, Nurse {submittedNurse.fullName}!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your fast-track registration has been received. Our clinical credentialing desk is now validating your PRC license with priority.
              </p>
            </div>

            {/* Application Code Card */}
            <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-200 text-center max-w-md mx-auto space-y-2">
              <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                Your Applicant Reference ID
              </span>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl font-extrabold font-mono text-teal-900">
                  {submittedNurse.applicationCode}
                </span>
                <button
                  onClick={() => copyToClipboard(submittedNurse.applicationCode)}
                  className="p-1.5 rounded-lg bg-teal-200/60 hover:bg-teal-200 text-teal-800 transition-colors"
                  title="Copy ID"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[11px] text-teal-700">
                Keep this code to fast-link your profile once you install the mobile app.
              </p>
            </div>

            {/* Next Steps List */}
            <div className="max-w-md mx-auto text-left space-y-3 pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                What Happens Next?
              </h5>
              
              <div className="flex items-start gap-3 text-xs text-slate-600">
                <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                  1
                </div>
                <span><strong>PRC License Verification</strong> — We confirm active status in the PRC database (usually within 12–24 hours).</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-600">
                <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                  2
                </div>
                <span><strong>SMS / Email Notification</strong> — You will receive your mobile app access link with your verified credential badge.</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-600">
                <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                  3
                </div>
                <span><strong>Claim Shifts & Earn</strong> — Browse open ICU, ER, or Ward shifts and start picking up per-diem hours.</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmittedNurse(null);
                  onClose();
                }}
                className="w-full sm:w-auto px-8 py-3 rounded-xl text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          /* Application Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Personal & License Info */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-700" />
                <span>Personal & PRC Credentials</span>
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name (as on PRC ID) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Maria Santos Dela Cruz, RN"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    PRC License Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.prcLicenseNumber}
                    onChange={(e) => setFormData({ ...formData, prcLicenseNumber: e.target.value })}
                    placeholder="e.g. 0894215"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nurse.maria@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Mobile Phone (GCash linked preferred) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+63 917 987 6543"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience & Specialty */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-sky-700" />
                <span>Clinical Background</span>
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Bedside Clinical Experience
                  </label>
                  <select
                    value={formData.yearsExperience}
                    onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    <option value="under_1_year">Under 1 Year (Junior RN)</option>
                    <option value="1_to_3_years">1 to 3 Years (Experienced)</option>
                    <option value="3_to_5_years">3 to 5 Years (Senior Staff)</option>
                    <option value="5_plus_years">5+ Years (Charge / Specialist)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Current Career Status
                  </label>
                  <select
                    value={formData.currentEmploymentStatus}
                    onChange={(e) => setFormData({ ...formData, currentEmploymentStatus: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    <option value="seeking_reliever">Hospital Employed (Taking Reliever Shifts)</option>
                    <option value="independent">Full-time Independent Reliever</option>
                    <option value="overseas_prep">Preparing for Overseas (NCLEX / UK)</option>
                    <option value="new_graduate">Recent Board Passer / Entry Level</option>
                  </select>
                </div>
              </div>

              {/* Specialties Pill Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Clinical Specialties (Select all applicable):
                </label>
                <div className="flex flex-wrap gap-2">
                  {specialtyOptions.map((spec) => {
                    const isSelected = formData.specialties.includes(spec);
                    return (
                      <button
                        type="button"
                        key={spec}
                        onClick={() => handleSpecialtyToggle(spec)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                            : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {spec}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Certifications Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Certifications Currently Held:
                </label>
                <div className="flex flex-wrap gap-2">
                  {certOptions.map((cert) => {
                    const isSelected = formData.certifications.includes(cert);
                    return (
                      <button
                        type="button"
                        key={cert}
                        onClick={() => handleCertToggle(cert)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-teal-700 text-white border-teal-700 shadow-sm'
                            : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {cert}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Preferred Location */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Preferred Hospital Areas (Cities / Districts)
                </label>
                <input
                  type="text"
                  value={formData.preferredLocations}
                  onChange={(e) => setFormData({ ...formData, preferredLocations: e.target.value })}
                  placeholder="e.g. Quezon City, Ortigas, BGC, Alabang"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-teal-700 hover:from-sky-700 hover:to-teal-800 shadow-md shadow-sky-900/20 cursor-pointer"
              >
                <UserPlus className="w-4 h-4 text-sky-200" />
                <span>Submit Application to Nurse Pool</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
