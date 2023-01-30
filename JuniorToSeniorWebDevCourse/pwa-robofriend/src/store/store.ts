import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import { createLogger } from 'redux-logger';
import dataReducer from './dataSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    data: dataReducer,
  },
  // When defining middleware, we always need to make sure we provide the
  // defaults
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
