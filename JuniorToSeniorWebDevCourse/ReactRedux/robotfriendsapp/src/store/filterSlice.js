import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter_string: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter_string = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export default filterSlice.reducer;

