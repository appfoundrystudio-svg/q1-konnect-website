import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  Stethoscope, 
  Download, 
  Trash2, 
  Phone, 
  Mail, 
  ShieldCheck
} from 'lucide-react';
import { getHospitalLeads, getNurseLeads, downloadIcsCalendar } from '../services/leadStorage';
import { HospitalMeetingRequest, NurseSignupRequest } from '../types/landing';

interface AdminLeadsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onDataChanged: () => void;
}

export const AdminLeadsDrawer: React.FC<AdminLeadsDrawerProps> = ({
  isOpen,
  onClose,
  onDataChanged,
}) => {
  const [activeTab, setActiveTab] = useState<'hospitals' | 'nurses'>('hospitals');

  if (!isOpen) return null;

  const hospitalLeads: HospitalMeetingRequest[] = getHospitalLeads();
  const nurseLeads: NurseSignupRequest[] = getNurseLeads();

  const handleClearAll = () => {
    if (window.confirm('Clear all locally saved leads from this browser?')) {
      localStorage.removeItem('q1_hospital_meeting_leads');
      localStorage.removeItem('q1_nurse_signup_leads');
      onDataChanged();
    }
  };

  const exportAllJson = () => {
    const data = {
      hospitalLeads,
      nurseLeads,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `q1-konnect-leads-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-6 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white font-heading">Lead & Application Manager</h3>
              <p className="text-xs text-slate-400">Captured locally in browser storage</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-slate-200 bg-slate-50 p-2 gap-2">
          <button
            onClick={() => setActiveTab('hospitals')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'hospitals'
                ? 'bg-white text-slate-950 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4 text-sky-600" />
            <span>Hospital Meetings ({hospitalLeads.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('nurses')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'nurses'
                ? 'bg-white text-sky-800 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Stethoscope className="w-4 h-4 text-sky-600" />
            <span>Nurse Applications ({nurseLeads.length})</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {activeTab === 'hospitals' ? (
            hospitalLeads.length === 0 ? (
              <div className="text-center py-16 text-slate-400 space-y-2">
                <Building2 className="w-12 h-12 mx-auto stroke-1 text-slate-300" />
                <p className="text-sm font-medium">No hospital consultations scheduled yet.</p>
                <p className="text-xs">Use the "Book Hospital Consultation" button to test the flow.</p>
              </div>
            ) : (
              hospitalLeads.map((lead) => (
                <div 
                  key={lead.id} 
                  className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3 text-xs"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{lead.facilityName}</h4>
                      <p className="text-slate-500">{lead.city}, {lead.province} • {lead.facilityType}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-md font-mono text-[10px] bg-sky-100 text-sky-900 font-bold">
                      {lead.id}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-slate-600">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Contact Person:</span>
                      <strong>{lead.contactPerson}</strong> ({lead.contactRole})
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Date & Time:</span>
                      <strong>{lead.preferredDate}</strong> @ {lead.preferredTime}
                    </div>
                  </div>

                  <div className="space-y-1 text-slate-600 pt-1 border-t border-slate-200/60">
                    <p className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{lead.email}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{lead.phone}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {lead.specialtiesNeeded.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] text-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => downloadIcsCalendar(lead)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-black text-white text-[11px] font-semibold transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download .ics</span>
                    </button>
                  </div>
                </div>
              ))
            )
          ) : (
            nurseLeads.length === 0 ? (
              <div className="text-center py-16 text-slate-400 space-y-2">
                <Stethoscope className="w-12 h-12 mx-auto stroke-1 text-slate-300" />
                <p className="text-sm font-medium">No nurse pre-registrations submitted yet.</p>
                <p className="text-xs">Use the "Pre-Register Nurse Pool" button to test the flow.</p>
              </div>
            ) : (
              nurseLeads.map((nurse) => (
                <div 
                  key={nurse.id} 
                  className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3 text-xs"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{nurse.fullName}</h4>
                      <p className="text-slate-500 font-mono">PRC: #{nurse.prcLicenseNumber} (Exp: {nurse.prcExpiry})</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-md font-mono text-[10px] bg-sky-100 text-sky-800 font-bold">
                      {nurse.applicationCode}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-slate-600">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Bedside Experience:</span>
                      <strong>{nurse.yearsExperience.replace(/_/g, ' ')}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Education / Status:</span>
                      <strong>{nurse.highestEducation}</strong> ({nurse.currentEmploymentStatus.replace(/_/g, ' ')})
                    </div>
                  </div>

                  <div className="space-y-1 text-slate-600 pt-1 border-t border-slate-200/60">
                    <p className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{nurse.email}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{nurse.phone}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {nurse.specialties.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] text-slate-700">
                        {s}
                      </span>
                    ))}
                    {nurse.certifications.map((c) => (
                      <span key={c} className="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-[10px] text-sky-900 font-semibold">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handleClearAll}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-700 hover:bg-rose-50 border border-rose-200 transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Leads</span>
          </button>

          <button
            onClick={exportAllJson}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-black shadow-sm transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Leads (JSON)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
