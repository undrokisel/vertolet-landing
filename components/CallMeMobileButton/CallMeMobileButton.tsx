import React, { FC } from "react";
import styles from "./CallMeMobileButton.module.css";
import { Text } from "../Text";
import { ELang } from "../../types";
import { content } from "../../content";

interface IProps {
  lang: ELang;
}

export const CallMeMobileButton: FC<IProps> = ({ lang }) => {
  const localContent = content[lang].locationBlock;

  return (
    <div className={styles.button}>
      <Text
        text={localContent.mainPhone}
        className={styles.buttonText}
        type="tel"
      />
    </div>
  );
};
