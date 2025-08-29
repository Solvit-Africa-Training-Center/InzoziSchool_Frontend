import { configureStore } from '@reduxjs/toolkit';
import SchoolReducer from '../Slices/SchoolSlice';

export const store = configureStore({
  reducer: {
    school: SchoolReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
