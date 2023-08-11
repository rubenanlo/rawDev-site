import { createSlice } from "@reduxjs/toolkit";

export const modalVisibility = createSlice({
  name: "deleteModal",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = modalVisibility.actions;

export default modalVisibility.reducer;
