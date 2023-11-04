import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';
import { filterReducer } from './filterSlice';
import { pageReducer } from './pageSlice';
import { favoriteReducer } from './favoriteSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

 const rootReducer = combineReducers({
  cars: carsReducer,
    filter: filterReducer,
    page: pageReducer,
    favorite: favoriteReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter', 'page', 'cars'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);