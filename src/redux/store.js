import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { tasksReducer } from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});
