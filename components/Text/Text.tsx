import React, { FC } from "react";
import styles from "./index.module.css";
import cn from "classnames";
import { EFonts } from "../../types";
import { useIsMobile } from "../../utils/getIsMobile";

interface IProps {
  text: string;
  title?: boolean;
  className?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: EFonts;
  onClick?: () => void;
  type?: "tel" | "mail" | "text";
}

export const Text: FC<IProps> = ({
  title = false,
  text,
  className,
  fontSize,
  fontWeight,
  fontFamily = "Austin",
  onClick,
  type = "text",
}) => {
  if (type === "tel" || type === "mail") {
    const href =
      (type === "tel" ? "tel:" : "mailto:") + text?.replace(/ /g, "");
    return (
      <a
        className={cn(className, styles.container, {
          [styles.kazimir]: fontFamily === EFonts.KAZIMIR,
          [styles.title]: title,
        })}
        href={href}
      >
        {text}
      </a>
    );
  }
  return (
    <div
      className={cn(className, styles.container, {
        [styles.kazimir]: fontFamily === EFonts.KAZIMIR,
        [styles.title]: title,
        [styles.clickable]: onClick,
      })}
      style={{ fontSize, fontWeight }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
