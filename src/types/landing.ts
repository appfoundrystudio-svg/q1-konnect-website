export type Audience = 'hospital' | 'nurse';

export interface HospitalMeetingRequest {
  id: string;
  facilityName: string;
  facilityType: string;
  city: string;
  province: string;
  contactPerson: string;
  contactRole: string;
  email: string;
  phone: string;
  urgency: string;
  openShiftCountPerMonth: string;
  specialtiesNeeded: string[];
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  createdAt: string;
}

export interface NurseSignupRequest {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  prcLicenseNumber: string;
  prcExpiry: string;
  yearsExperience: string;
  highestEducation: string;
  currentEmploymentStatus: string;
  specialties: string[];
  certifications: string[];
  preferredLocations: string;
  availableShifts: string[];
  createdAt: string;
  applicationCode: string;
}

export interface RoiEstimation {
  monthlyShifts: number;
  avgHourlyRate: number;
  hoursPerShift: number;
  traditionalAgencyMarkup: number; // percentage, e.g. 35%
  q1FeePercent: number; // e.g. 10%
  savedAgencyFees: number;
  adminHoursSaved: number;
}
