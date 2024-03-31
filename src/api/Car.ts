import axios from 'axios';
import { ICarCreate, ICarResponse, ICarUpdate } from '../models/Car';

export default class CarAPI {
  static async getCars(limit: number, page: number): Promise<ICarResponse[]> {
    const response = await axios.get<ICarResponse[]>(
      `http://127.0.0.1:3000/garage`,
      {
        params: {
          _limit: limit,
          _page: page,
        },
      },
    );
    // todo нужно создать тип возврата и достать X-Total-Count
    return response.data;
  }

  static async getCarById(id: number): Promise<ICarResponse> {
    const response = await axios.get<ICarResponse>(
      `http://127.0.0.1:3000/garage/${id}`,
    );
    // todo возможно нужно проверить коды success что бы точно не было ошибок
    return response.data;
  }

  static async CreateCar(car: ICarCreate): Promise<ICarResponse> {
    const response = await axios.post<ICarResponse>(
      `http://127.0.0.1:3000/garage`,
      {
        car,
      },
    );
    return response.data;
  }

  static async deleteCarById(id: number): Promise<void> {
    await axios.delete<void>(`http://127.0.0.1:3000/garage/${id}`);
    // todo обработать код 404?
  }

  static async updateCarById(
    id: number,
    car: ICarUpdate,
  ): Promise<ICarResponse> {
    const response = await axios.put<ICarResponse>(
      `http://127.0.0.1:3000/garage/${id}`,
      {
        car,
      },
    );
    return response.data;
  }
}
