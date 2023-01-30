import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DataState } from '../interfaces/store.interfaces';

const initialState: DataState = {
  data: [],
  status: 'loading',
};

export const fetchData = createAsyncThunk('data/getData', async (_) => {
  console.log('fetchData');
  return await fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((json) => json);
});

export const dataSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {},
  // We need to handle all the cases of the promise (async)
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export default dataSlice.reducer;
