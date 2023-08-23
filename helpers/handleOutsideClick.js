export const handleOutsideClick = (ref, setOpen) => {
  const handleOpenClose = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  window.addEventListener("mousedown", handleOpenClose);

  return () => {
    window.removeEventListener("mousedown", handleOpenClose);
  };
};
