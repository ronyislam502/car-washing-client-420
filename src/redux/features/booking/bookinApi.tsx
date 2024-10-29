import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: (bookingInfo) => ({
        url: "/bookings",
        method: "GET",
        body: bookingInfo,
      }),
      providesTags: ["booking"],
    }),
    getMyBookings: builder.query({
      query: (bookingInfo) => ({
        url: "/my-bookings",
        method: "GET",
        body: bookingInfo,
      }),
      providesTags: ["booking"],
    }),
    createBookings: builder.mutation({
      query: (bookingInfo) => ({
        url: "/bookings",
        method: "POST",
        body: bookingInfo,
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useGetMyBookingsQuery,
  useCreateBookingsMutation,
} = bookingApi;
