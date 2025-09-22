import { apiSlice } from '../EntryApi';
import type{SeatAvailability} from '../../../Pages/Admin/AddSeats';

export interface AllSeats {
  level: string;
  studentType: string;
  academicYear?: string;
  yearofstudy: string;
  totalSpots: string;
  occupiedSpots?: number;
}

export interface Seats {
  spots: AllSeats[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface SeatsApiResponse {
  data: Seats;
  message: string;
  success: boolean;
}


export const SpotsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
registerSpot: builder.mutation<SeatAvailability, { data: Partial<SeatAvailability>, id: string }>({
  query: ({ data, id }) => ({
    url: `/schools/${id}/spots`,
    method: 'POST',
    body: data, // RTK Query will serialize as JSON
  }),
}),

getAllSpots: builder.query<SeatsApiResponse, string>({
      query: (id) => ({
        url: `/schools/${id}/spots`,
        method: 'GET',
      }),
 }),

  }),
});

export const {useRegisterSpotMutation , useGetAllSpotsQuery} = SpotsApi;
