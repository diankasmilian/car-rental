import { createSlice } from '@reduxjs/toolkit';

const favoriteInitialState = [];

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: favoriteInitialState,
  reducers: {
   setFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const index = state.findIndex(favCar => favCar.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { setFavorite, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;