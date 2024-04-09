import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../models/types/config';
import { IEngine, StartEngineParams } from '../models/api/Engine';

interface ResType {
  apiResponse: IEngine;
  status: number | undefined;
}

export default createApi({
  reducerPath: 'engineApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    startStopEngine: build.mutation<ResType, StartEngineParams>({
      query: (params) => ({
        url: `/engine`,
        method: 'PATCH',
        params: {
          id: params.id,
          status: params.status,
        },
      }),
      transformResponse(apiResponse: IEngine, meta) {
        return {
          apiResponse,
          status: meta?.response?.status,
        };
      },
    }),
    driveModeEngine: build.mutation<boolean, number>({
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
