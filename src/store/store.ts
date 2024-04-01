import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { carApi } from '../api/Car';

const rootReducer = combineReducers({
  [carApi.reducerPath]: carApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(carApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
