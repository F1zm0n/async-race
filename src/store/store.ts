import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carApi from '../api/CarApi';
import engineApi from '../api/EngineApi';
import winnersApi from '../api/WinnersApi';
import CarsReducer from './reducers/CarsSlice';
import DataReducer from './reducers/DataSlice';

const rootReducer = combineReducers({
  [carApi.reducerPath]: carApi.reducer,
  [engineApi.reducerPath]: engineApi.reducer,
  [winnersApi.reducerPath]: winnersApi.reducer,
  CarsReducer,
  DataReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        carApi.middleware,
        engineApi.middleware,
        winnersApi.middleware,
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
