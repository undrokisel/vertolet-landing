import { useRef, useEffect, useState, ReactNode, FC } from "react";

import { createPortal } from "react-dom";

interface IProps {
  children: ReactNode;
  selector: string;
}

export const Portal: FC<IProps> = ({ children, selector }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
