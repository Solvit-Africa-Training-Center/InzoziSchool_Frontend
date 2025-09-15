import { apiSlice } from '../EntryApi';

export interface schooldetail{
    id: string;
    schoolName: string;
    schoolCode: string;
    email: string;
    district: string;
    status: string;
    licenseDocument:string;
    approvedBy: string;
    approvedAt: string;
    rejectedReason: string;
}

export interface SchoolDetailsResponse{
    data:schooldetail;
    message:string;
    success:boolean;
}

export interface RegisterSchoolResponse {
  message: string
  schoolId: string
}

export const SchoolsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerSchool: builder.mutation<RegisterSchoolResponse , FormData>({
      query: (data) => ({
        url: '/schools/register',
        method: 'POST',
        body: data,
        headers: undefined,
      }),
    }),

      getSchoolDetails: builder.query<SchoolDetailsResponse, string>({
      query: (id) => ({
        url: `/schools/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useRegisterSchoolMutation , useGetSchoolDetailsQuery } = SchoolsApi;
