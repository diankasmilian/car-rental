import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const handlePending = state => {
   state.isLoading = true;
 };
 const handleRejected = (state, action) => {
   state.isLoading = false;
   state.error = action.payload;
 };

 const carsSlice = createSlice({
   name: 'cars',
   initialState: {
     items: [],
     isLoading: false,
     error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      });
  },
   },
 );
 export const carsReducer = carsSlice.reducer;