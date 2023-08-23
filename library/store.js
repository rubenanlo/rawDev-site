import { configureStore } from "@reduxjs/toolkit";
// import contentSlice from "slices/contentSlice";
import visibilitySlice from "slices/visibilitySlice";

export default configureStore({
  reducer: {
    visibility: visibilitySlice,
    // data: contentSlice,
  },
});
