import { apiSlice } from '../EntryApi';

export interface UserRole {
  id: string;
  name: string; // e.g. "Admin", "AdmissionManager", "SchoolManager", "Principal"
}

export interface UserSchool {
  id: string;
  schoolName: string;
}

export interface UserRecord {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  province: string | null;
  district: string;
  email: string;
  profileImage: string | null;
  schoolId: string | null;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  role: UserRole;
  School: UserSchool | null;
}

export interface UsersResponse {
  data: UserRecord[];
  message: string;
  success: boolean;
}

export interface UserResponse {
  data: UserRecord;
  message: string;
  success: boolean;
}

export interface UpdateUserPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  gender?: string;
  province?: string;
  district?: string;
  schoolId?: string;
}

export const UsersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersResponse, void>({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),

    updateUser: builder.mutation<UserResponse, { id: string; data: UpdateUserPayload }>({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    deleteUser: builder.mutation<UserResponse, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUserMutation, useDeleteUserMutation } = UsersApi;