import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarCreate {
  name: string;
  color: string;
}
interface CarUpdate {
  name: string;
  color: string;
}

interface DataState {
  selectedCarID: number;
  carCreate: CarCreate;
  carUpdate: CarUpdate;
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
};

export const DataSlice = createSlice({
  name: 'DataSlice',
  initialState,
  reducers: {
    setSelectedCarID(state, action: PayloadAction<number>) {
      state.selectedCarID = action.payload;
    },
    setCarCreate(state, action: PayloadAction<CarCreate>) {
      state.carCreate = action.payload;
    },
    setCarUpdate(state, action: PayloadAction<CarUpdate>) {
      state.carUpdate = action.payload;
    },
  },
});

export default DataSlice.reducer;
