import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICarCreate, ICar, ICarUpdate } from '../models/api/Car';

const BASE_URL = 'http://127.0.0.1:3000';
const PAGINTAION_LIMIT = 7;

export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Cars'],
  endpoints: (build) => ({
    getAllCars: build.query<ICar[], number>({
      query: (page: number = 1) => ({
        url: '/garage',
        params: {
          _limit: PAGINTAION_LIMIT,
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
        method: 'POST',
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
