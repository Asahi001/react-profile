import { createContext, useEffect, useState } from "react";

export const ScreenResContext = createContext(undefined);

function ScreenResState({ children }) {
  const [windowWidth, setWindowWidth] = useState(getDesc(window.innerWidth));

  function getDesc(width) {
    if (width < 600) {
      return "Mob";
    } else if (width >= 600 && width < 1024) {
      return "Tab";
    } else {
      return "Des";
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getDesc(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenResContext.Provider value={windowWidth}>
      {children}
    </ScreenResContext.Provider>
  );
}

export default ScreenResState;
