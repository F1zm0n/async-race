import axios from 'axios';
import { EngineStatus, IEngineResponse } from '../models/api/Engine.ts';

export default class EngineAPI {
  static async toggleCarEngine(
    id: number,
    status: EngineStatus,
  ): Promise<IEngineResponse> {
    // todo обработать коды ошибок
    const response = await axios.patch<IEngineResponse>(
      `http://127.0.0.1:3000/engine`,
      {},
      {
        params: { id, status },
      },
    );
    return response.data;
  }

  static async driveCarEngine(id: number): Promise<void> {
    const status = 'drive';
    // todo обработать коды ошибок
    await axios.patch<IEngineResponse>(
      `http://127.0.0.1:3000/engine`,
      {},
      {
        params: { id, status },
      },
    );
  }
}
