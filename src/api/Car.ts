import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICar, ICarCreate } from '../models/api/Car';
import { BASE_URL, PAGINATION_LIMIT } from '../models/types/config';

export default createApi({
  reducerPath: 'carApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Cars'],
  endpoints: (build) => ({
    getAllCars: build.query<ICar[], number>({
      query: (page: number = 1) => ({
        url: '/garage',
        params: {
          _limit: PAGINATION_LIMIT,
          _page: page,
        },
      }),
    }),
    createCar: build.mutation<ICarCreate, ICar>({
      query: (car) => ({
        url: '/garage',
        method: 'POST',
        body: car,
      }),
      invalidatesTags: ['Cars'],
    }),
    updateCar: build.mutation<ICar, ICar>({
      query: (car) => ({
        url: `/garage${car.id}`,
        method: 'PUT',
        body: car,
      }),
      invalidatesTags: ['Cars'],
    }),
    deleteCar: build.mutation<ICar, ICar>({
      query: (car) => ({
        url: `/garage${car.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cars'],
    }),
  }),
});
