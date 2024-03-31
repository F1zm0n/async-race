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
  _sort?: 'id' | 'wins' | 'time';
  _order?: 'ASC' | 'DESC';
}
