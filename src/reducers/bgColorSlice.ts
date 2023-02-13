import { createSlice } from '@reduxjs/toolkit';

const bgColorSlice = createSlice({
  name: 'bgColor',
  initialState: { color: '' },
  reducers: {
    red: (state) => {
      state.color = 'allRed';
    },
    green: (state) => {
      state.color = 'allGreen';
    },
    blue: (state) => {
      state.color = 'allBlue';
    },
    reset: (state) => {
      state.color = '';
    },
  },
});

export const { red, green, blue, reset } = bgColorSlice.actions;

export default bgColorSlice.reducer;
