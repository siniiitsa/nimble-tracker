import { configureStore } from '@reduxjs/toolkit';
import trackersReducer from './trackers';

export default () =>
  configureStore({
    reducer: { trackers: trackersReducer },
  });
