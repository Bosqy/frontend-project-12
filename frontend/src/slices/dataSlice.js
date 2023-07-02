import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes';

const fetchData = createAsyncThunk(
  'data/fetchData',
  async (token) => {
    const { data } = await axios.get(routes.dataPath(), { headers: { Authorization: `Bearer ${token}` } });

    return data;
  },
);

const initialState = {
  channels: [],
  messages: [],
};

const dataSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchData.fulfilled, (state, action) => {
      state.messages = action.payload.messages;
    }),
});

export default dataSlice.reducer;
