// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { projectSlice } from './projectsSlice';


export const store = configureStore({
  reducer: {
    projects: projectSlice.reducer,
  },
});

export default store;

