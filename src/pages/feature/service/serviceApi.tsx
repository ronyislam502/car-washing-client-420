import { baseApi } from "../../api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createServices: builder.mutation({
      query: (serviceInfo) => ({
        url: "/services",
        method: "POST",
        body: serviceInfo,
      }),
    }),
    getAllServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
    }),
    getSingleServices: builder.query({
      query: (args) => ({
        url: `/services/${args.id}`,
        method: "GET",
        body: args.data,
      }),
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useCreateServicesMutation,
  useGetSingleServicesQuery,
} = serviceApi;
