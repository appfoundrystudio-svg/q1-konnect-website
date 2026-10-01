import { HospitalMeetingRequest, NurseSignupRequest } from '../types/landing';

const HOSPITAL_LEADS_KEY = 'q1_hospital_meeting_leads';
const NURSE_LEADS_KEY = 'q1_nurse_signup_leads';

export const saveHospitalMeetingRequest = (
  data: Omit<HospitalMeetingRequest, 'id' | 'createdAt'>
): HospitalMeetingRequest => {
  const newLead: HospitalMeetingRequest = {
    ...data,
    id: `HOSP-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString(),
  };

  try {
    const existing = getHospitalLeads();
    const updated = [newLead, ...existing];
    localStorage.setItem(HOSPITAL_LEADS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }

  return newLead;
};

export const getHospitalLeads = (): HospitalMeetingRequest[] => {
  try {
    const raw = localStorage.getItem(HOSPITAL_LEADS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveNurseSignupRequest = (
  data: Omit<NurseSignupRequest, 'id' | 'createdAt' | 'applicationCode'>
): NurseSignupRequest => {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const applicationCode = `Q1-RN-${randomSuffix}`;
  
  const newLead: NurseSignupRequest = {
    ...data,
    id: `NURSE-${Date.now().toString(36).toUpperCase()}`,
    applicationCode,
    createdAt: new Date().toISOString(),
  };

  try {
    const existing = getNurseLeads();
    const updated = [newLead, ...existing];
    localStorage.setItem(NURSE_LEADS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save nurse lead to localStorage:', err);
  }

  return newLead;
};

export const getNurseLeads = (): NurseSignupRequest[] => {
  try {
    const raw = localStorage.getItem(NURSE_LEADS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

/**
 * Generates and triggers download of an .ics calendar file for the hospital meeting
 */
export const downloadIcsCalendar = (meeting: HospitalMeetingRequest) => {
  const [year, month, day] = (meeting.preferredDate || '2026-10-15').split('-').map(Number);
  
  // Format meeting date
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const dateStr = `${year}${pad(month)}${pad(day)}`;
  
  // Default start at 10:00 AM if not parseable
  let startHour = 10;
  if (meeting.preferredTime.includes('09:00')) startHour = 9;
  if (meeting.preferredTime.includes('11:00')) startHour = 11;
  if (meeting.preferredTime.includes('14:00') || meeting.preferredTime.includes('02:00')) startHour = 14;
  if (meeting.preferredTime.includes('16:00') || meeting.preferredTime.includes('04:00')) startHour = 16;
  
  const startTime = `${pad(startHour)}0000`;
  const endTime = `${pad(startHour + 1)}0000`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Q1 Konnect//Hospital Consultation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${meeting.id}@q1konnect.com`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART:${dateStr}T${startTime}`,
    `DTEND:${dateStr}T${endTime}`,
    `SUMMARY:Q1 Konnect & ${meeting.facilityName} - Healthcare Workforce Consultation`,
    `DESCRIPTION:Strategic staffing discovery meeting with Q1 Konnect for ${meeting.facilityName}. Contact: ${meeting.contactPerson} (${meeting.contactRole}) - ${meeting.email}. Specialties: ${meeting.specialtiesNeeded.join(', ')}.`,
    'LOCATION:Google Meet / Online Conference (Link will be sent to email)',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `Q1-Konnect-Meeting-${meeting.facilityName.replace(/\s+/g, '-')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
