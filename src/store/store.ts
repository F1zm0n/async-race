import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carApi from '../api/Car';
import engineApi from '../api/Engine';
import winnersApi from '../api/Winners';

const rootReducer = combineReducers({
  [carApi.reducerPath]: carApi.reducer,
  [engineApi.reducerPath]: engineApi.reducer,
  [winnersApi.reducerPath]: winnersApi.reducer,
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
