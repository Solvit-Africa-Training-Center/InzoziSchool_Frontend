import { apiSlice } from '../EntryApi';
import type{SchoolsResponse} from '../../../Types/SchoolResponse';

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

      getAllSchools: builder.query<SchoolsResponse, void>({
      query: () => ({
        url: '/schools',
        method: 'GET',
      }),
    }),

     getSchoolById: builder.query<SchoolDetailsResponse, string>({
      query: (id) => ({
        url: `/schools/${id}`,
        method: 'GET',
      }),
    }),

      ApproveSchool: builder.mutation<SchoolDetailsResponse, string>({
      query: (id) => ({
        url: `/schools/approve/${id}`,
        method: 'PATCH',
      }),
    }),

      RejectSchool: builder.mutation<SchoolDetailsResponse, {id:string, message:string}>({
      query: ({id , message}) => ({
        url: `/schools/reject/${id}`,
        method: 'PATCH',
        body:{ reason: message },
      }),
    }),

     DeleteSchool: builder.mutation<SchoolDetailsResponse, string>({
      query: (id) => ({
        url: `/schools/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useRegisterSchoolMutation , useGetSchoolDetailsQuery , useGetAllSchoolsQuery , useGetSchoolByIdQuery , useApproveSchoolMutation , useRejectSchoolMutation , useDeleteSchoolMutation } = SchoolsApi;
