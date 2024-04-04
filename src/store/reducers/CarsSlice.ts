import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICar } from '../../models/api/Car';

interface CarState {
  page: number;
  cars: ICar[];
}

const initialState: CarState = {
  page: 1,
  cars: [],
};

export const carsSlice = createSlice({
  name: 'carsSlice',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setCars(state, action: PayloadAction<ICar[]>) {
      state.cars = action.payload;
    },
  },
});

export default carsSlice.reducer;
