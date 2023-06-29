import { createContext, useState, useCallback, useEffect } from "react";

const RespContext = createContext();

// The function below allows to render components conditionally to
// the width of a screen

function ResponsiveComponent({ children }) {
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener("change", updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener("change", updateTarget);
    }, [updateTarget, width]);

    return targetReached;
  };

  return (
    <RespContext.Provider value={useMediaQuery}>
      {children}
    </RespContext.Provider>
  );
}

export { RespContext, ResponsiveComponent };
