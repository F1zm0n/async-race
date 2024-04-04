import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarState {
  page: number;
}

const initialState: CarState = {
  page: 1,
};

export default createSlice({
  name: 'carsSlice',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});
