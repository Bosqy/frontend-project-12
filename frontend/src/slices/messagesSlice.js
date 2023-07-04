/* eslint-disable functional/no-expression-statements */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import fetchData from './fetchData';
import { removeChannel } from './channelsSlice';

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
    .addCase(removeChannel, (state, { payload }) => {
      state.messages = state.messages.filter((message) => message.channelId !== payload);
    }),
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
