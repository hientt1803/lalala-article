import { RootState } from "@/stores/store";
import { API_URL, CHANNEL_ID, POST_TYPE, USER_ID } from "@/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticleResponse, IArticleDetailType } from "./type";

export const PostApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/`,
    prepareHeaders: (headers, { getState }) => {
      return headers;
    },
  }),
  endpoints: (build) => ({
    getListPost: build.query<ArticleResponse, any>({
      query: () => `/content/search?user_id=${USER_ID}&channel_id=${CHANNEL_ID}&post_type=${POST_TYPE}`,
      transformResponse: (response: { data: ArticleResponse }) => response.data,
    }),
    getPostDetail: build.query<IArticleDetailType, {id:string}>({
      query: (payload) => `/content/${payload.id}`,
      transformResponse: (response: { data: IArticleDetailType }) => response.data,
    }),
  }),
});

export const {
  useGetListPostQuery,
  useLazyGetListPostQuery,
  useGetPostDetailQuery,
  useLazyGetPostDetailQuery
} = PostApi;
