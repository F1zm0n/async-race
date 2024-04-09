import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WinnersState {
  page: number;
}

const initialState: WinnersState = {
  page: 1,
};

export const WinnersSlice = createSlice({
  name: 'winnersSlice',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export default WinnersSlice.reducer;
