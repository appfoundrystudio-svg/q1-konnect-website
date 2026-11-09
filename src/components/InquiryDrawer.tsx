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
    <div className="fixed inset-0 z-50 flex justify-end bg-[#123A4A]/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white border-l border-[#D8E3E3] w-full max-w-lg h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Top Header */}
        <div className="p-6 sm:p-8 border-b border-[#D8E3E3] flex items-center justify-between shrink-0 bg-[#EEF4F3]">
          <div className="flex items-center gap-3">
            {type === 'hospital_partner' ? (
              <div className="p-2.5 rounded-xl bg-[#EF7158]/10 text-[#EF7158] border border-[#EF7158]/20">
                <Building2 className="w-5 h-5" />
              </div>
            ) : (
              <div className="p-2.5 rounded-xl bg-[#0F6B8A]/10 text-[#0F6B8A] border border-[#0F6B8A]/20">
                <Stethoscope className="w-5 h-5" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-extrabold font-display text-[#123A4A]">
                {type === 'hospital_partner' ? 'Pioneer Hospital Partner Inquiry' : 'Pioneer Nurse Pre-Registration'}
              </h3>
              <p className="text-xs text-[#56717C]">
                {type === 'hospital_partner' 
                  ? 'Connect with our leadership team for custom hospital parameters' 
                  : 'Join our pre-verified registry ahead of hospital deployment'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-[#D8E3E3] text-[#56717C] hover:text-[#123A4A] border border-[#D8E3E3] transition-colors cursor-pointer"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-[#1D8A5A]/10 text-[#1D8A5A] flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold font-display text-[#123A4A]">
                Submission received
              </h4>
              <p className="text-xs sm:text-sm text-[#56717C] max-w-xs mx-auto leading-relaxed">
                {type === 'hospital_partner' 
                  ? 'Thank you. Our partnerships team will reach out with our Pioneer Hospital Prospectus.' 
                  : 'Thank you. Your applicant reference has been created. We will notify you as soon as credential review concludes.'}
              </p>
              
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF4F3] border border-[#D8E3E3] text-xs text-[#123A4A] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#1D8A5A]"></span>
                  Be connected.
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#123A4A] hover:bg-[#0F6B8A] text-white transition-colors cursor-pointer shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : type === 'hospital_partner' ? (
            /* Hospital Form */
            <form onSubmit={handleHospitalSubmit} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#123A4A] uppercase tracking-wider block">
                  Discussion Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setHospitalForm({ ...hospitalForm, preference: 'online_briefing' })}
                    className={`p-2.5 rounded-xl text-left text-xs transition-all border cursor-pointer ${
                      hospitalForm.preference === 'online_briefing'
                        ? 'bg-[#0F6B8A]/10 text-[#0F6B8A] border-[#0F6B8A]'
                        : 'bg-[#EEF4F3] text-[#56717C] border-[#D8E3E3] hover:text-[#123A4A]'
                    }`}
                  >
                    <div className="font-bold">Online</div>
                    <div className="text-[10px] opacity-75">Google Meet</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHospitalForm({ ...hospitalForm, preference: 'hospital_visit' })}
                    className={`p-2.5 rounded-xl text-left text-xs transition-all border cursor-pointer ${
                      hospitalForm.preference === 'hospital_visit'
                        ? 'bg-[#0F6B8A]/10 text-[#0F6B8A] border-[#0F6B8A]'
                        : 'bg-[#EEF4F3] text-[#56717C] border-[#D8E3E3] hover:text-[#123A4A]'
                    }`}
                  >
                    <div className="font-bold">Facility</div>
                    <div className="text-[10px] opacity-75">In-person visit</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHospitalForm({ ...hospitalForm, preference: 'phapi_booth' })}
                    className={`p-2.5 rounded-xl text-left text-xs transition-all border cursor-pointer ${
                      hospitalForm.preference === 'phapi_booth'
                        ? 'bg-[#EF7158]/15 text-[#EF7158] border-[#EF7158]'
                        : 'bg-[#EEF4F3] text-[#56717C] border-[#D8E3E3] hover:text-[#123A4A]'
                    }`}
                  >
                    <div className="font-bold">PHAPi</div>
                    <div className="text-[10px] opacity-75">Booth in Nov</div>
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#123A4A]">Hospital / Facility Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. St. Jude Memorial Medical Center"
                  value={hospitalForm.facilityName}
                  onChange={(e) => setHospitalForm({ ...hospitalForm, facilityName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-[#123A4A] text-xs focus:outline-none focus:border-[#0F6B8A] focus:bg-white placeholder-[#8A9FA8] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#123A4A]">City / Municipality *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Quezon City, Cebu"
                    value={hospitalForm.city}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-[#123A4A] text-xs focus:outline-none focus:border-[#0F6B8A] focus:bg-white placeholder-[#8A9FA8] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#123A4A]">Facility Type</label>
                  <select
                    value={hospitalForm.facilityType}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, facilityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-[#123A4A] text-xs focus:outline-none focus:border-[#0F6B8A] focus:bg-white transition-all cursor-pointer"
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
                  <label className="text-xs font-semibold text-[#123A4A]">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Maria Santos, RN, MAN"
                    value={hospitalForm.contactPerson}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-[#123A4A] text-xs focus:outline-none focus:border-[#0F6B8A] focus:bg-white placeholder-[#8A9FA8] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#123A4A]">Role / Position</label>
                  <input
                    type="text"
                    placeholder="Chief Nursing Officer"
                    value={hospitalForm.role}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-[#123A4A] text-xs focus:outline-none focus:border-[#0F6B8A] focus:bg-white placeholder-[#8A9FA8] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#123A4A]">Official Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="cno@hospital.com"
                    value={hospitalForm.email}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-[#123A4A] text-xs focus:outline-none focus:border-[#0F6B8A] focus:bg-white placeholder-[#8A9FA8] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#123A4A]">Direct Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+63 917 123 4567"
                    value={hospitalForm.phone}
                    onChange={(e) => setHospitalForm({ ...hospitalForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-[#123A4A] text-xs focus:outline-none focus:border-[#0F6B8A] focus:bg-white placeholder-[#8A9FA8] transition-all"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-xs font-bold text-white bg-[#0F6B8A] hover:bg-[#123A4A] transition-colors shadow-md cursor-pointer"
                >
                  Submit hospital partner inquiry →
                </button>
              </div>

            </form>
          ) : (
            /* Nurse Form */
            <form onSubmit={handleNurseSubmit} className="space-y-5">
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#123A4A]">Your Full Legal Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Juan Dela Cruz, RN"
                  value={nurseForm.fullName}
                  onChange={(e) => setNurseForm({ ...nurseForm, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-[#123A4A] text-xs focus:outline-none focus:border-[#0F6B8A] focus:bg-white placeholder-[#8A9FA8] transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#123A4A]">PRC Registered Nurse License # *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 0873214"
                  value={nurseForm.prcNumber}
                  onChange={(e) => setNurseForm({ ...nurseForm, prcNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-[#123A4A] text-xs focus:outline-none focus:border-[#0F6B8A] focus:bg-white placeholder-[#8A9FA8] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#123A4A]">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="juan.nurse@gmail.com"
                    value={nurseForm.email}
                    onChange={(e) => setNurseForm({ ...nurseForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-[#123A4A] text-xs focus:outline-none focus:border-[#0F6B8A] focus:bg-white placeholder-[#8A9FA8] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#123A4A]">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+63 917 555 1234"
                    value={nurseForm.phone}
                    onChange={(e) => setNurseForm({ ...nurseForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EEF4F3] border border-[#D8E3E3] text-[#123A4A] text-xs focus:outline-none focus:border-[#0F6B8A] focus:bg-white placeholder-[#8A9FA8] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-xs font-semibold text-[#123A4A] block">Your Primary Unit Experience:</label>
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
                            ? 'bg-[#0F6B8A] text-white border-[#0F6B8A]'
                            : 'bg-[#EEF4F3] text-[#56717C] border-[#D8E3E3] hover:border-[#8A9FA8] hover:text-[#123A4A]'
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
                  className="w-full py-3.5 rounded-full text-xs font-bold text-white bg-[#0F6B8A] hover:bg-[#123A4A] transition-colors shadow-md cursor-pointer"
                >
                  Pre-register for pioneer roster →
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
