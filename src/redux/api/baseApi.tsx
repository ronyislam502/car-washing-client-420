/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:7000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (AbortSignal, ApiProvider, extraOptions): Promise<any> => {
  let result = await baseQuery(AbortSignal, ApiProvider, extraOptions);

  if (result?.error?.status === 404) {
    toast.error((result.error.data as { message: string }).message);
  }
  if (result?.error?.status === 403) {
    toast.error((result.error.data as { message: string }).message);
  }

  if (result?.error?.status === 401) {
    console.log("sending refresh token");

    const res = await fetch("http://localhost:7000/api/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();

    if (data?.data?.token) {
      const user = (ApiProvider.getState() as RootState).auth.user;

      ApiProvider.dispatch(
        setUser({
          user,
          token: data.data.token,
        })
      );
      result = await baseQuery(AbortSignal, ApiProvider, extraOptions);
    } else {
      ApiProvider.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["service", "slot", "booking", "review", "user"],
  endpoints: () => ({}),
});
