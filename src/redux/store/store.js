import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../slices/sidebarSlice';
import memberTabReducer from '../slices/memberTabSlice';
import darkModeReducer from '../slices/darkModeSlice';

const getInitialDarkModeState = () => {
  const savedDarkMode = sessionStorage.getItem('darkMode');
  return savedDarkMode !== null ? savedDarkMode === 'true' : true;
};

const preloadedState = {
  darkMode: getInitialDarkModeState()
};

export const store = configureStore({
  preloadedState,
  reducer: {
    sidebar: sidebarReducer,
    memberTab: memberTabReducer,
    darkMode: darkModeReducer
  }
});
