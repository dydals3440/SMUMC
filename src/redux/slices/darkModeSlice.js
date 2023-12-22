import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: true,
  reducers: {
    toggleDarkMode: state => !state
  }
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
