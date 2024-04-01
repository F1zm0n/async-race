import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IWinner } from '../models/api/Winners';
import { BASE_URL, PAGINATION_LIMIT } from '../models/types/config';

export default createApi({
  reducerPath: 'winnersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Winners'],
  endpoints: (build) => ({
    getAllCars: build.query<IWinner[], number>({
      query: (page: number = 1) => ({
        url: '/winners',
        params: {
          _limit: PAGINATION_LIMIT,
          _page: page,
        },
      }),
    }),
    createCar: build.mutation<IWinner, IWinner>({
      query: (winner) => ({
        url: `/winners/${winner.id}`,
        method: 'PUT',
        body: winner,
      }),
      invalidatesTags: ['Winners'],
    }),
    updateCar: build.mutation<IWinner, IWinner>({
      query: (winner) => ({
        url: `/garage${winner.id}`,
        method: 'POST',
        body: winner,
      }),
      invalidatesTags: ['Winners'],
    }),
    deleteCar: build.mutation<IWinner, IWinner>({
      query: (winner) => ({
        url: `/garage${winner.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Winners'],
    }),
  }),
});
