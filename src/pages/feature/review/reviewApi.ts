import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: (reviewInfo) => ({
        url: "/reviews/post-review",
        method: "POST",
        body: reviewInfo,
      }),
    }),
    getAllReviews: builder.query({
      query: (reviewInfo) => ({
        url: "/reviews",
        method: "GET",
        body: reviewInfo,
      }),
    }),
    latestReview: builder.query({
      query: () => ({
        url: `/reviews?number=2`,
      }),
    }),
  }),
});

export const {
  usePostReviewMutation,
  useGetAllReviewsQuery,
  useLatestReviewQuery,
} = reviewApi;
