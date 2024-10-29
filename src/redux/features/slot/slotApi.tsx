import { baseApi } from "../../api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlots: builder.query({
      query: () => ({
        url: "/slots",
        method: "GET",
      }),
      providesTags: ["slot"],
    }),
    createSlot: builder.mutation({
      query: (slotInfo) => ({
        url: "/services/slots",
        method: "POST",
        body: slotInfo,
      }),
      invalidatesTags: ["slot"],
    }),
    updateSlot: builder.mutation({
      query: (args) => ({
        url: `/slots/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["slot"],
    }),
  }),
});

export const {
  useCreateSlotMutation,
  useGetAllSlotsQuery,
  useUpdateSlotMutation,
} = slotApi;
