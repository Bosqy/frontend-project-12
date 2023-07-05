/* eslint-disable functional/no-expression-statements */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import fetchData from './fetchData';
import { deleteChannel } from './channelsSlice';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      state.messages.push(payload);
    },
  },
  extraReducers: (builder) => builder
    .addCase(fetchData.fulfilled, (state, action) => {
      state.messages = action.payload.messages;
    })
    .addCase(deleteChannel, (state, { payload }) => {
      state.messages = state.messages.filter(({ channelId }) => channelId !== payload);
    }),
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
