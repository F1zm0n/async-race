// import { IEngine } from './Engine';

import { IEngine } from './Engine';

export interface ICar {
  name: string;
  color: string;
  id?: number;
  engine?: IEngine;
}

export interface ICarCreate {
  name: string;
  color: string;
}

export interface ICarUpdate {
  name: string;
  color: string;
}
