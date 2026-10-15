import React, { useState } from 'react';
import { InquiryDrawerType } from '../types';
import { X, Building2, Stethoscope, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface InquiryDrawerProps {
  type: InquiryDrawerType;
  onClose: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({ type, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [hospitalForm, setHospitalForm] = useState({
    facilityName: '',
    facilityType: 'Tertiary Hospital (Level 3)',
    city: '',
    contactPerson: '',
    role: 'Chief Nursing Officer (CNO)',
    email: '',
    phone: '',
    preference: 'online_briefing',
  });

  const [nurseForm, setNurseForm] = useState({
    fullName: '',
    prcNumber: '',
    email: '',
    phone: '',
    specialties: ['ICU / CCU', 'Emergency Room (ER)'],
  });

  if (!type) return null;

  const handleHospitalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hospitalForm.facilityName || !hospitalForm.contactPerson || !hospitalForm.email) return;
    
    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('q1_v2_hospital_leads') || '[]');
    existing.push({ ...hospitalForm, id: `Q1-HOSP-${Date.now()}`, submittedAt: new Date().toISOString() });
    localStorage.setItem('q1_v2_hospital_leads', JSON.stringify(existing));
    
    setSubmitted(true);
  };

  const handleNurseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nurseForm.fullName || !nurseForm.prcNumber || !nurseForm.email) return;
    
    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('q1_v2_nurse_leads') || '[]');
    existing.push({ ...nurseForm, id: `Q1-RN-${Date.now()}`, submittedAt: new Date().toISOString() });
    localStorage.setItem('q1_v2_nurse_leads', JSON.stringify(existing));
    
    setSubmitted(true);
  };

  const toggleSpecialty = (spec: string) => {
    if (nurseForm.specialties.includes(spec)) {
      setNurseForm({ ...nurseForm, specialties: nurseForm.specialties.filter(s => s !== spec) });
    } else {
      setNurseForm({ ...nurseForm, specialties: [...nurseForm.specialties, spec] });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-slate-900 border-l border-slate-800 w-full max-w-lg h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Top Header */}
        <div className="p-6 sm:p-8 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-950/60">
          <div className="flex items-center gap-3">
            {type === 'hospital_partner' ? (
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Building2 className="w-5 h-5" />
              </div>
            ) : (
              <div className="p-2 rounded-xl bg-blue-500/10 text-sky-400 border border-blue-500/20">
                <Stethoscope className="w-5 h-5" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                {type === 'hospital_partner' ? 'Pioneer Hospital Partner Inquiry' : 'Pioneer Nurse Pre-Registration'}
              </h3>
              <p className="text-xs text-slate-400">
                {type === 'hospital_partner' 
                  ? 'Connect with our leadership team for custom hospital parameters' 
                  : 'Join our pre-verified registry ahead of hospital deployment'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-display text-white">
                Submission Received!
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
                {type === 'hospital_partner' 
                  ? 'Thank you! Our partnerships team will reach out with our Pioneer Hospital Prospectus.' 
                  : 'Thank you! Your applicant reference has been created. We will notify you as soon as credential review concludes.'}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : type === 'hospital_partner' ? (
            /* Hospital Form */
            <form onSubmit={handleHospitalSubmit} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider block">
                  Discussion Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setHospitalForm({ ...hospitalForm, preference: 'online_briefing' })}
                    className={`p-2.5 rounded-xl text-left text-xs transition-all border cursor-pointer ${
                      hospitalForm.preference === 'online_briefing'
                        ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    <div className="font-bold">Online</div>
                    <div className="text-[10px] text-slate-500">Google Meet</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHospitalForm({ ...hospitalForm, preference: 'hospital_visit' })}
                    className={`p-2.5 rounded-xl text-left text-xs transition-all border cursor-pointer ${
                      hospitalForm.preference === 'hospital_visit'
                        ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    <div className="font-bold">Facility</div>
                    <div className="text-[10px] text-slate-500">In-person visit</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHospitalForm({ ...hospitalForm, preference: 'phapi_booth' })}
                    className={`p-2.5 rounded-xl text-left text-xs transition-all border cursor-pointer ${
                      hospitalForm.preference === 'phapi_booth'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    <div className="font-bold">PHAPi</div>
                    <div className="text-[10px] text-slate-500">Booth in Nov</div>
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-400">Hospital / Facility Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. St. Jude Memorial Medical Center"
                  value={hospitalForm.facilityName}
                  onChange={(e) => setHospitalForm({ ...hospitalForm, facilityName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">City / Municipality *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Quezon City, Cebu"
                    value={hospitalForm.city}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Facility Type</label>
                  <select
                    value={hospitalForm.facilityType}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, facilityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  >
                    <option>Tertiary Hospital (Level 3)</option>
                    <option>Secondary Hospital (Level 2)</option>
                    <option>Primary Hospital (Level 1)</option>
                    <option>Specialty Clinic</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Maria Santos, RN, MAN"
                    value={hospitalForm.contactPerson}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Role / Position</label>
                  <input
                    type="text"
                    placeholder="Chief Nursing Officer"
                    value={hospitalForm.role}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Official Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="cno@hospital.com"
                    value={hospitalForm.email}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Direct Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+63 917 123 4567"
                    value={hospitalForm.phone}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors shadow-lg cursor-pointer"
                >
                  Submit Hospital Partner Inquiry →
                </button>
              </div>

            </form>
          ) : (
            /* Nurse Form */
            <form onSubmit={handleNurseSubmit} className="space-y-5">
              
              <div className="space-y-1">
                <label className="text-xs text-slate-400">Your Full Legal Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Juan Dela Cruz, RN"
                  value={nurseForm.fullName}
                  onChange={(e) => setNurseForm({ ...nurseForm, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-400">PRC Registered Nurse License # *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 0873214"
                  value={nurseForm.prcNumber}
                  onChange={(e) => setNurseForm({ ...nurseForm, prcNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="juan.nurse@gmail.com"
                    value={nurseForm.email}
                    onChange={(e) => setNurseForm({ ...nurseForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+63 917 555 1234"
                    value={nurseForm.phone}
                    onChange={(e) => setNurseForm({ ...nurseForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-xs text-slate-400 block">Your Primary Unit Experience:</label>
                <div className="flex flex-wrap gap-2">
                  {['ICU / CCU', 'Emergency Room (ER)', 'Operating Room (OR)', 'Hemodialysis', 'General Ward', 'NICU / Pedia'].map(spec => {
                    const isSelected = nurseForm.specialties.includes(spec);
                    return (
                      <button
                        type="button"
                        key={spec}
                        onClick={() => toggleSpecialty(spec)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-sky-500 text-slate-950 border-sky-400'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}{spec}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors shadow-lg cursor-pointer"
                >
                  Pre-Register for Pioneer Pool (Free) →
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
