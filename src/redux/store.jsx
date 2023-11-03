import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';
import { filterReducer } from './filterSlice';
import { pageReducer } from './pageSlice';
import { cardReducer } from './cardSlice';

export const store = configureStore({
   reducer: {
     cars: carsReducer,
    filter: filterReducer,
    page: pageReducer,
    card: cardReducer
   },
 });