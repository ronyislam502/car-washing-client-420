import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (userInfo) => ({
        url: "/users",
        method: "GET",
        body: userInfo,
      }),
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: ({ userData, id }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: userData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUserMutation } = userApi;
