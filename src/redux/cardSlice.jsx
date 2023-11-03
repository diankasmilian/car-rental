import { createSlice } from '@reduxjs/toolkit';

const cardInitialState = [];

const cardSlice = createSlice({
  name: 'card',
  initialState: cardInitialState,
  reducers: {
    setCard(state, action) {
      return [...state, ...action.payload];
    },
  },
});

export const { setCard } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;