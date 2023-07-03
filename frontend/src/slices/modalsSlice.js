/* eslint-disable no-param-reassign */
/* eslint-disable functional/no-expression-statements */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  opened: false,
};

const modalsSlice = createSlice({
  name: 'modals',

  initialState,

  reducers: {
    switchState: (state, { payload }) => {
      state.opened = payload;
    },
  },
});

export const { switchState } = modalsSlice.actions;
export default modalsSlice.reducer;
