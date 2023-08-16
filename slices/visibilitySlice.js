import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "visibilitySlice",
  initialState: {
    mobileContainer: false,
    aboutMenu: false,
    modal: false,
    navbarInAbout: false,
  },
  reducers: {
    toggleMobileContainer: (state) => {
      state.mobileContainer = !state.mobileContainer;
      state.aboutMenu = false; // Reset other UI states when this one toggles
      // state.navbarInAbout = false;
    },
    toggleAboutMenu: (state) => {
      state.aboutMenu = !state.aboutMenu;
      state.mobileContainer = false; // Reset other UI states when this one toggles
      // state.navbarInAbout = false;
    },
    toggleNavbarInAbout: (state) => {
      state.navbarInAbout = !state.navbarInAbout;
      state.mobileContainer = false; // Reset other UI states when this one toggles
      state.aboutMenu = false;
    },
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
    closeAll: (state) => {
      state.mobileContainer = false;
      state.aboutMenu = false;
      state.modal = false;
      state.navbarInAbout = false;
    },
  },
});

export const {
  toggleMobileContainer,
  toggleAboutMenu,
  toggleModal,
  toggleNavbarInAbout,
  closeAll,
} = visibilitySlice.actions;

export default visibilitySlice.reducer;
