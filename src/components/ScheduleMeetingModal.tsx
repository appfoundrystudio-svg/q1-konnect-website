import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  User, 
  Download,
  AlertCircle
} from 'lucide-react';
import { HospitalMeetingRequest } from '../types/landing';
import { saveHospitalMeetingRequest, downloadIcsCalendar } from '../services/leadStorage';

interface ScheduleMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSubmitted: () => void;
}

export const ScheduleMeetingModal: React.FC<ScheduleMeetingModalProps> = ({
  isOpen,
  onClose,
  onLeadSubmitted,
}) => {
  const [formData, setFormData] = useState({
    facilityName: '',
    facilityType: 'tertiary',
    city: '',
    province: 'Metro Manila',
    contactPerson: '',
    contactRole: 'Chief Nursing Officer (CNO)',
    email: '',
    phone: '',
    urgency: 'online_briefing',
    openShiftCountPerMonth: '20-50',
    specialtiesNeeded: ['ICU / CCU', 'Emergency Room (ER)'],
    preferredDate: '2026-10-20',
    preferredTime: '10:00 AM',
    notes: '',
  });

  const [submittedMeeting, setSubmittedMeeting] = useState<HospitalMeetingRequest | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const availableSpecialties = [
    'ICU / CCU',
    'Emergency Room (ER)',
    'Operating Room (OR)',
    'Hemodialysis',
    'General Ward',
    'Pediatrics / NICU',
    'Oncology',
  ];

  const handleSpecialtyToggle = (spec: string) => {
    if (formData.specialtiesNeeded.includes(spec)) {
      setFormData({
        ...formData,
        specialtiesNeeded: formData.specialtiesNeeded.filter((s) => s !== spec),
      });
    } else {
      setFormData({
        ...formData,
        specialtiesNeeded: [...formData.specialtiesNeeded, spec],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.facilityName || !formData.contactPerson || !formData.email || !formData.phone) {
      setErrorMessage('Please fill in all required contact and facility fields.');
      return;
    }

    try {
      const saved = saveHospitalMeetingRequest(formData);
      setSubmittedMeeting(saved);
      onLeadSubmitted();
      setErrorMessage('');
    } catch {
      setErrorMessage('Failed to save inquiry. Please try again.');
    }
  };

  const formatPreferenceText = (val: string) => {
    if (val === 'phapi_booth') return 'Meeting at PHAPi Exhibit Booth (November)';
    if (val === 'hospital_visit') return 'Executive Visit at Hospital Premises';
    return 'Online Video Briefing (Google Meet / Zoom)';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Top Header */}
        <div className="bg-slate-950 text-white p-6 sm:p-8 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-400 mb-3 border border-sky-500/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>Pioneer Hospital Partner Program</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
            Hospital Partnership Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
            Connect with our founding team to discuss custom hospital staffing parameters, review our 
            pilot deployment plans, or coordinate at the <strong>PHAPi National Convention in November</strong>.
          </p>
        </div>

        {submittedMeeting ? (
          /* Confirmation State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-slate-900 font-heading">
                Partnership Inquiry Received for {submittedMeeting.facilityName}!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{submittedMeeting.contactPerson}</strong>. Our Partnerships Director will contact you to confirm details and share our Pioneer Hospital Prospectus.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Discussion Format:</span>
                <span className="font-bold text-sky-700">{formatPreferenceText(submittedMeeting.urgency)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Target Date:</span>
                <span className="font-bold text-slate-900">{submittedMeeting.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Preferred Time:</span>
                <span className="font-bold text-slate-900">{submittedMeeting.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Confirmation Sent To:</span>
                <span className="font-bold text-sky-700">{submittedMeeting.email}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => downloadIcsCalendar(submittedMeeting)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Add to Calendar (.ics)</span>
              </button>
              <button
                onClick={() => {
                  setSubmittedMeeting(null);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Inquiry Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Discussion Preference */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                How would you prefer to connect?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, urgency: 'online_briefing' })}
                  className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border cursor-pointer ${
                    formData.urgency === 'online_briefing'
                      ? 'bg-sky-50 text-sky-950 border-sky-400 ring-2 ring-sky-400/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold">Online Briefing</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Google Meet / Zoom</div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, urgency: 'hospital_visit' })}
                  className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border cursor-pointer ${
                    formData.urgency === 'hospital_visit'
                      ? 'bg-sky-50 text-sky-950 border-sky-400 ring-2 ring-sky-400/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold">Hospital Visit</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">In-person meeting</div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, urgency: 'phapi_booth' })}
                  className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border cursor-pointer ${
                    formData.urgency === 'phapi_booth'
                      ? 'bg-sky-50 text-sky-950 border-sky-400 ring-2 ring-sky-400/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold">PHAPi Exhibit</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Booth chat in Nov</div>
                </button>
              </div>
            </div>

            {/* Hospital Information Section */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-sky-600" />
                <span>Facility Details</span>
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Hospital / Medical Center Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.facilityName}
                    onChange={(e) => setFormData({ ...formData, facilityName: e.target.value })}
                    placeholder="e.g. St. Jude Memorial Hospital"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Facility Type
                  </label>
                  <select
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    <option value="tertiary">Tertiary Hospital (Level 3)</option>
                    <option value="secondary">Secondary Hospital (Level 2)</option>
                    <option value="primary">Primary Hospital (Level 1)</option>
                    <option value="clinic">Specialty / Outpatient Clinic</option>
                    <option value="dialysis">Hemodialysis Center</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    City / Municipality *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Quezon City, Taguig, Cebu City"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Region / Province
                  </label>
                  <input
                    type="text"
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    placeholder="e.g. Metro Manila / NCR"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>
            </div>

            {/* Contact Person Details */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <User className="w-4 h-4 text-sky-600" />
                <span>Executive Contact</span>
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Maria Santos, RN, MAN"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Role / Title
                  </label>
                  <input
                    type="text"
                    value={formData.contactRole}
                    onChange={(e) => setFormData({ ...formData, contactRole: e.target.value })}
                    placeholder="e.g. Chief Nursing Officer, Medical Director"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="cno@hospital.com.ph"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Direct Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+63 917 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>
            </div>

            {/* Clinical Specialties */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-xs font-medium text-slate-700">
                Wards Most in Need of Relief Staff:
              </label>
              <div className="flex flex-wrap gap-2">
                {availableSpecialties.map((spec) => {
                  const isSelected = formData.specialtiesNeeded.includes(spec);
                  return (
                    <button
                      type="button"
                      key={spec}
                      onClick={() => handleSpecialtyToggle(spec)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
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

            {/* Schedule Slot */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>Preferred Date & Time for Discussion</span>
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    <option value="09:00 AM">09:00 AM – 09:30 AM</option>
                    <option value="10:00 AM">10:00 AM – 10:30 AM</option>
                    <option value="11:00 AM">11:00 AM – 11:30 AM</option>
                    <option value="02:00 PM">02:00 PM – 02:30 PM</option>
                    <option value="04:00 PM">04:00 PM – 04:30 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit */}
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
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-slate-950 hover:bg-black shadow-md cursor-pointer border border-slate-800"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Submit Partnership Inquiry</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
