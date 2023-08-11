import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "slices/modalVisibility";

export default configureStore({
  reducer: {
    modalVisibility: counterSlice,
  },
});
