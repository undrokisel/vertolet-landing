import { useState, useEffect } from "react";

type WindowType = {
  height: number | undefined;
  width: number | undefined;
};
export const useIsMobile = () => {
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
  if (!windowDimensions.width) return null;

  return windowDimensions?.width <= 650;
};
