import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "loading",
};

export const fetchData = createAsyncThunk("data/getData", async (thunkAPI) => {
  console.log("fetchData");
  return await fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((json) => json);
});

export const dataSlice = createSlice({
  name: "date",
  initialState,
  reducers: {},
  // We need to handle all the cases of the promise (async)
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.status = "loaded";
      state.data = payload;
    },
    [fetchData.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default dataSlice.reducer;
