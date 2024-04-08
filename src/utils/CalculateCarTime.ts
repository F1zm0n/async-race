import { IEngine } from '../models/api/Engine';

export default (engine: IEngine): number => {
  return engine.distance / engine.velocity / 1000;
};
