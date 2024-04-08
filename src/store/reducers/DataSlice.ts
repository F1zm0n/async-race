import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CarFormData {
  name: string;
  color: string;
}

interface DataState {
  selectedCarID: number;
  carCreate: CarFormData;
  carUpdate: CarFormData;
  allCarsStarted: boolean;
}

const initialState: DataState = {
  selectedCarID: 0,
  carCreate: {
    name: '',
    color: '',
  },
  carUpdate: {
    name: '',
    color: '',
  },
  allCarsStarted: false,
};

export const DataSlice = createSlice({
  name: 'DataSlice',
  initialState,
  reducers: {
    setSelectedCarID(state, action: PayloadAction<number>) {
      state.selectedCarID = action.payload;
    },
    setCarCreate(state, action: PayloadAction<CarFormData>) {
      state.carCreate = action.payload;
    },
    setCarUpdate(state, action: PayloadAction<CarFormData>) {
      state.carUpdate = action.payload;
    },
    setAllCarsStarted(state, action: PayloadAction<boolean>) {
      state.allCarsStarted = action.payload;
    },
  },
});

export default DataSlice.reducer;
