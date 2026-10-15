export type DeepDiveModalType = 'hospital' | 'nurse' | 'video' | 'roadmap' | 'phapi' | null;
export type InquiryDrawerType = 'hospital_partner' | 'nurse_registry' | null;

export interface LeadSubmission {
  id: string;
  type: 'hospital' | 'nurse';
  name: string;
  email: string;
  phone: string;
  organizationOrLicense?: string;
  notes?: string;
  submittedAt: string;
}
