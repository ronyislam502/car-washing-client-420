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
    getSingleService: builder.query({
      query: (args) => ({
        url: `/services/${args.id}`,
        method: "GET",
        body: args.data,
      }),
    }),
    createService: builder.mutation({
      query: (serviceInfo) => ({
        url: "/services",
        method: "POST",
        body: serviceInfo,
      }),
    }),
    updateService: builder.mutation({
      query: (args) => ({
        url: `/services/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
    }),
    deleteService: builder.query({
      query: (args) => ({
        url: `/services/${args.id}`,
        method: "DELETE",
        body: args.data,
      }),
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetSingleServiceQuery,
  useDeleteServiceQuery,
  useGetAllServicesQuery,
  useUpdateServiceMutation,
} = serviceApi;
