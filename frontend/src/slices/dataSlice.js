/* eslint-disable functional/no-expression-statements */
/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (authHeader) => {
    const { data } = await axios.get(routes.dataPath(), { headers: authHeader });

    return data;
  },
);

const initialState = {
  channels: [],
  messages: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchData.fulfilled, (state, action) => {
      state.channels = action.payload.channels;
      state.messages = action.payload.messages;
    }),
});

export default dataSlice.reducer;
