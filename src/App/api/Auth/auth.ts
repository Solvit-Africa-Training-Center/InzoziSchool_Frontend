import {apiSlice} from '../EntryApi.ts';

export const LoginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),

    Logout: builder.mutation({
      query: (data) => ({
        url: '/auth/logout',
        method: 'POST',
        body: data,
      }),
    }),
     ResetePassword: builder.mutation({
      query: (data) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: data,
      }),
    }),
    ForgotPassword: builder.mutation({
      query: (data) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body:data,
      }),
    }),
  }),
});

export const {
 useLoginMutation , useLogoutMutation , useForgotPasswordMutation , useResetePasswordMutation,
} = LoginApi;