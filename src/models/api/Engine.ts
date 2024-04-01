export interface IEngine {
  velocity: number;
  distance: number;
  status: EngineStatus;
}

export type EngineStatus = 'started' | 'stopped' | 'drive';

export interface StartEngineParams {
  id: number;
  status: Exclude<EngineStatus, 'drive'>;
}
