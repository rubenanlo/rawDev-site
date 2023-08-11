// useToggleModal.js

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "slices/modalVisibility";

export const useToggleModal = () => {
  const openModal = useSelector((state) => state.modalVisibility.value);
  const dispatch = useDispatch();

  const toggleModal = () => dispatch(toggle());

  return [openModal, toggleModal];
};
