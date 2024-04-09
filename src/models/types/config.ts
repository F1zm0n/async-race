export interface SortOptions {
  name: string;
  value: string;
}

export const PAGINATION_LIMIT = 7;
export const BASE_URL = 'http://127.0.0.1:3000';

export enum BaseRoutes {
  GarageRoute = '/garage',
  WinnersRoute = '/winners',
}

export const sortOptions: SortOptions[] = [
  { name: 'id', value: 'id' },
  { name: 'wins', value: 'wins' },
  { name: 'time', value: 'time' },
];

export const orderOptions: SortOptions[] = [
  { name: 'ASC', value: 'ASC' },
  { name: 'DESC', value: 'DESC' },
];
