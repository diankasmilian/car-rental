import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';
import { filterReducer } from './filterSlice';
import { pageReducer } from './pageSlice';

export const store = configureStore({
   reducer: {
     cars: carsReducer,
    filter: filterReducer,
    page: pageReducer
   },
 });