import { createSlice } from "@reduxjs/toolkit";

// *** Example from the documentation:
// export const openDeleteModalState = createSlice({
//   name: "counter",
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//   },
// });
export const openDeleteModalState = createSlice({
  name: "deleteModal",
  initialState: {
    value: false,
  },
  reducers: {
    openClose: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openClose } = openDeleteModalState.actions;

export default openDeleteModalState.reducer;
