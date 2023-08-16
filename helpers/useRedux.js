// useToggleContainer.js

import { useDispatch, useSelector } from "react-redux";
import {
  toggleMobileContainer,
  toggleAboutMenu,
  toggleModal,
  toggleNavbarInAbout,
  closeAll,
} from "slices/visibilitySlice";

export const useToggleContainer = (type) => {
  const visibilityState = useSelector((state) => state.visibility);
  const dispatch = useDispatch();

  if (type === "modal") {
    const toggleContainer = () => dispatch(toggleModal());
    return [visibilityState.modal, toggleContainer];
  }

  if (type === "mobile") {
    const toggleMobile = () => dispatch(toggleMobileContainer());
    return [visibilityState.mobileContainer, toggleMobile];
  }

  if (type === "aboutMenu") {
    const toggleAbout = () => dispatch(toggleAboutMenu());
    return [visibilityState.aboutMenu, toggleAbout];
  }

  if (type === "aboutSite") {
    const toggleNavbar = () => dispatch(toggleNavbarInAbout());
    return [visibilityState.navbarInAbout, toggleNavbar];
  }

  const closeAllContainers = () => dispatch(closeAll());
  return [visibilityState, closeAllContainers];
};

// export const useData = () => {
//   const responses = useSelector((state) => state.data.responses);
//   const dispatch = useDispatch();

//   const setData = () => dispatch(setResponses());

//   return [responses, setData];
// };
