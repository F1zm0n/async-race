export interface IWinnersResponse {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnersCreate {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnersUpdate {
  wins: number;
  time: number;
}

export interface IWinnersGetParams {
  _page?: number;
  _limit?: number;
  _sort?: SortParams;
  _order?: OrderParams;
}

type SortParams = 'id' | 'wins' | 'time';
type OrderParams = 'ASC' | 'DESC';
