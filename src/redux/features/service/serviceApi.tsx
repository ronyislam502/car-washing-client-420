import { baseApi } from "../../api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: (args) => {
        return {
          url: `/services?search=${args?.keyword}&sortOrder=${args?.sort}&minDuration=${args?.minDuration}&maxDuration=${args?.maxDuration}`,
          method: "GET",
          body: args.data,
        };
      },
    }),
    getServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
      providesTags: ["service"],
    }),
    getSingleService: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
    }),
    createService: builder.mutation({
      query: (serviceInfo) => ({
        url: "/services",
        method: "POST",
        body: serviceInfo,
      }),
      invalidatesTags: ["service"],
    }),
    updateService: builder.mutation({
      query: ({ serviceData, id }) => ({
        url: `/services/${id}`,
        method: "PUT",
        body: serviceData,
      }),
      invalidatesTags: ["service"],
    }),
    deleteService: builder.mutation({
      query: (id: string) => {
        return {
          url: `/services/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetSingleServiceQuery,
  useDeleteServiceMutation,
  useGetAllServicesQuery,
  useUpdateServiceMutation,
  useGetServicesQuery,
} = serviceApi;
