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

export interface schoolProfile{
  description:string;
  mission:string;
  vision:string;
  foundedYear:number;
  profilePhoto:string;
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

// Define the individual profile structure
interface Profile {
  id: string;
  foundedYear:string;
  profilePhoto:string;
  schoolId: string;
  description: string | null;
  mission: string | null;
  vision: string | null;
  // Add other properties here if needed
}

// Define the data object containing pagination info and profiles
interface ProfileData {
  limit: number;
  page: number;
  profiles: Profile[];
  total: number;
  totalPages: number;
}

// Define the full API response
interface ProfileResponse {
  data: ProfileData;
  message: string;
  success: boolean;
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

       getProfile: builder.query<ProfileResponse, string>({
      query: (id) => ({
        url: `/schools/${id}/profile`,
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
    
    UpdateProfile: builder.mutation<schoolProfile,{id:string, data:FormData}>({
      query: ({id , data}) => ({
        url: `/schools/${id}/profile`,
        method: 'PUT',
        body:data,
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

export const { useRegisterSchoolMutation , useGetSchoolDetailsQuery , useGetAllSchoolsQuery , useGetSchoolByIdQuery , useApproveSchoolMutation , useRejectSchoolMutation , useDeleteSchoolMutation, useUpdateProfileMutation , useGetProfileQuery } = SchoolsApi;
