import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IWinner, IWinnersGetParams } from '../models/api/Winners';
import { BASE_URL } from '../models/types/config';

export interface ResType {
  apiResponse: IWinner[];
  totalCount: number;
}
interface GetOneWinner {
  apiResponse: IWinner;
  status: number | undefined;
}

export default createApi({
  reducerPath: 'winnersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Winners'],
  endpoints: (build) => ({
    getAllCars: build.query<ResType, IWinnersGetParams>({
      query: (params: IWinnersGetParams) => ({
        url: '/winners',
        params: {
          ...params,
          _limit: 10,
        },
      }),
      transformResponse(apiResponse: IWinner[], meta) {
        return {
          apiResponse,
          totalCount: Number(meta?.response?.headers.get('X-Total-Count')),
        };
      },
      providesTags: ['Winners'],
    }),
    getOneCar: build.query<GetOneWinner, number>({
      query: (id: number) => ({
        url: `/winners/${id}`,
      }),
      transformResponse(apiResponse: IWinner, meta) {
        return {
          apiResponse,
          status: meta?.response?.status,
        };
      },
    }),
    createCar: build.mutation<IWinner, IWinner>({
      query: (winner) => ({
        url: `/winners`,
        method: 'POST',
        body: winner,
      }),
      invalidatesTags: ['Winners'],
    }),
    updateCar: build.mutation<IWinner, IWinner>({
      query: (winner) => ({
        url: `/winners/${winner.id}`,
        method: 'PUT',
        body: winner,
      }),
      invalidatesTags: ['Winners'],
    }),
    deleteCar: build.mutation<IWinner, IWinner>({
      query: (winner) => ({
        url: `/winners/${winner.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Winners'],
    }),
  }),
});
