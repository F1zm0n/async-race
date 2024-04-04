import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../models/types/config';
import { IWinner } from '../models/api/Winners';
import { IEngine, StartEngineParams } from '../models/api/Engine';

export default createApi({
  reducerPath: 'engineApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    startStopEngine: build.mutation<IEngine, StartEngineParams>({
      query: (params) => ({
        url: `/engine`,
        method: 'PATCH',
        params: {
          params,
        },
      }),
    }),
    driveModeEngine: build.mutation<IWinner, number>({
      query: (id) => ({
        url: `/engine`,
        method: 'PATCH',
        params: {
          id,
          status: 'drive',
        },
      }),
    }),
  }),
});
