import axios from 'axios';
import { IWinnersGetParams, IWinnersResponse } from '../models/api/Winners.ts';

export default class WinnersAPI {
  static async GetWinners(
    params?: IWinnersGetParams,
  ): Promise<IWinnersResponse[]> {
    const response = await axios.get(`http://127.0.0.1:3000/engine`, {
      params: { params },
    });
    // todo X-Total-Count
    return response.data;
  }
  // todo get winner endpoint
}
