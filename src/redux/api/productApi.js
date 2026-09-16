import { baseApi } from "./baseApi";
import { API_ENDPOINTS } from "../../lib/constants";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: (params = {}) => ({
        url: API_ENDPOINTS.ADMIN_PRODUCT,
        params: {
          page: 1,
          length: 10,
          graph: "{*}",
          ...params,
        },
      }),
      transformResponse: (response) => response?.data ?? {},
      providesTags: ["Product"],
    }),

  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productApi;

export const getProducts = (params, { dispatch }) =>
  dispatch(productApi.endpoints.getProducts.initiate(params)).unwrap();
