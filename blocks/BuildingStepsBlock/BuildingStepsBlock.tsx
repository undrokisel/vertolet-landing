import React, { FC } from "react";
import styles from "./index.module.css";
import { Text } from "../../components/Text";
import { content } from "../../content";
import { Element } from "react-scroll";
import { EBlocks, ELang } from "../../types";

interface IProps {
  lang: ELang;
}

export const BuildingStepsBlock: FC<IProps> = ({ lang }) => {
  return (
    <Element name={EBlocks.BUILDINGS} className={styles.container}>
      <Text
        text={content[lang].buildingStepsBlock.title}
        className={styles.title}
      />
      <div className={styles.mockContainer}>
        <div className={styles.mock}>Video</div>
        <div className={styles.mock}>Photo</div>
      </div>
    </Element>
  );
};
