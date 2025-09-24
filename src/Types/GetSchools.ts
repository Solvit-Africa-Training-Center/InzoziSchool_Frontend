export interface SchoolData {
  id: string;
  schoolName: string;
  schoolCode: string;
  email: string;
  district: string;
  status: 'pending' | 'approved' | 'rejected';
  licenseDocument: string;
  approvedBy: string | null;
  approvedAt: string | null;
  rejectedReason: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface SchoolResponse {
  data: SchoolData;
  message: string;
  success: boolean;
}

// This matches your backend: array of SchoolResponse
export type SchoolListResponse = SchoolResponse[];
