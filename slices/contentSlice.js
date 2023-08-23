import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  responses: [],
  deleteIdArray: [],
};

const contentSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setResponses: (state, action) => {
      state.responses = action.payload;
    },
    setDeleteIdArray: (state, action) => {
      state.deleteIdArray = action.payload;
    },
  },
});

export const { setResponses, setDeleteIdArray } = contentSlice.actions;
export default contentSlice.reducer;
