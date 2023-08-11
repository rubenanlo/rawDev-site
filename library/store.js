import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/openDeleteModalState";

export default configureStore({
  reducer: {
    deleteModal: counterSlice,
  },
});
