import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import { createLogger } from 'redux-logger';
import dataReducer from './dataSlice';


// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  filter: filterReducer,
  data: dataReducer,
})
export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    // When defining middleware, we always need to make sure we provide the
    // defaults
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

