export interface IWinner {
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

export type SortParams = 'id' | 'wins' | 'time';
export type OrderParams = 'ASC' | 'DESC';
