import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../models/types/config';
import { IEngine, StartEngineParams } from '../models/api/Engine';

interface ResType {
  apiResponse: boolean;
  code: number;
}

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
    driveModeEngine: build.mutation<ResType, number>({
      query: (id) => ({
        url: `/engine`,
        method: 'PATCH',
        params: {
          id,
          status: 'drive',
        },
      }),
      transformResponse(apiResponse: boolean, meta) {
        return {
          code: meta?.response?.status,
          apiResponse,
        };
      },
    }),
  }),
});
