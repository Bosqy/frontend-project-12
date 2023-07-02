/* eslint-disable no-param-reassign */
/* eslint-disable functional/no-expression-statements */

import { createSlice } from '@reduxjs/toolkit';

import fetchData from './fetchData';

const initialState = {
  channels: [],
  currentChannelId: 1,
  currentChannelName: 'general',
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchData.fulfilled, (state, action) => {
      state.channels = action.payload.channels;
      state.currentChannelId = action.payload.currentChannelId;
    }),
});

export default channelsSlice.reducer;
