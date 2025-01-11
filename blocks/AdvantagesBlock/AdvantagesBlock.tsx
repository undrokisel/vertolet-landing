import React, { FC } from "react";
import styles from "./index.module.css";
import { ELang } from "../../types";
import { content } from "../../content";
import Image from "next/image";
import { Text } from "../../components/Text";
import cn from "classnames";
import ScrollAnimation from "react-animate-on-scroll";

interface IProps {
  lang: ELang;
}

export const AdvantagesBlock: FC<IProps> = ({ lang }) => {
  const localContent = content[lang].advantagesBlock;
  return (
    <div className={styles.container}>
      {localContent.map((row, id) => (
        <div
          className={cn(styles.row, { [styles.reversed]: id % 2 != 0 })}
          key={id}
        >
          <ScrollAnimation
            animateIn={
              id % 2 != 0 ? "animate__fadeInRight" : "animate__fadeInLeft"
            }
            animateOnce={true}
            className={styles.imgContainer}
          >
            <Image src={row.image} alt={row.title} className={styles.img} />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn={
              id % 2 == 0 ? "animate__fadeInRight" : "animate__fadeInLeft"
            }
            animateOnce={true}
            className={cn(styles.textContainer, {
              [styles.reversedContainer]: id % 2 != 0,
            })}
          >
            <Text text={row.title} className={styles.title} title />
            <Text text={row.description} className={styles.description} />
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
