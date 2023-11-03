import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const handlePending = state => {
   state.isLoading = true;
   state.showLoadMore = false;
 };
 const handleRejected = (state, action) => {
   state.isLoading = false;
   state.error = action.payload;
   state.showLoadMore = false;
 };

 const carsSlice = createSlice({
   name: 'cars',
   initialState: {
     items: [],
     isLoading: false,
     error: null,
     showLoadMore: true,
   },
   reducers: {},
   extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.showLoadMore = true;

        if (action.payload.length < 12 || action.payload.length === 0) {
          state.showLoadMore = false;
          state.items = [...state.items, ...action.payload];
        } else {
          state.items = [...state.items, ...action.payload];
        }
      });
  },
   },
 );
 export const carsReducer = carsSlice.reducer;