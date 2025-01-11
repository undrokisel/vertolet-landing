import { useState, useEffect } from "react";

type WindowType = {
  height: number | undefined;
  width: number | undefined;
};
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<WindowType>({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
