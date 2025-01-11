import React, { FC } from "react";
import styles from "./index.module.css";
import { content } from "../../content";
import cn from "classnames";
import Image from "next/image";
import { useIsMobile } from "../../utils/getIsMobile";
import { Element } from "react-scroll";
import { EBlocks, ELang } from "../../types";
import ScrollAnimation from "react-animate-on-scroll";
import { Text } from "../../components/Text";

// interface IProps {
//   lang: ELang;
// }

// export const ChessBlock: FC<IProps> = ({ lang }) => {
export const ChessBlock = ({ lang }) => {
  const isMobile = useIsMobile();
  const localContent = content[lang].chessBlock;
  if (isMobile) return null;
  return (
    <Element name={EBlocks.CHESS} className={styles.container}>
      <Text text={localContent.title} className={styles.blockTitle} title />
      {localContent.content.map((element, idx) => (
        <div
          key={idx}
          className={cn(styles.row, { [styles.inverseRow]: idx % 2 !== 0 })}
        >
          <ScrollAnimation
            animateIn={`animate__fadeIn${idx % 2 == 0 ? "Left" : "Right"}Big`}
            className={styles.element}
            animateOnce={true}
          >
            <Text
              className={cn(styles.title, {
                [styles.inverseText]: idx % 2 !== 0,
              })}
              text={element.title}
              title
            />
            <Text
              className={cn(styles.description, {
                [styles.inverseText]: idx % 2 !== 0,
              })}
              text={element.description}
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn={`animate__fadeIn${idx % 2 != 0 ? "Left" : "Right"}Big`}
            className={styles.imageContainer}
          >
            <Image
              src={element.img}
              alt={element.title}
              className={styles.image}
            />
          </ScrollAnimation>
        </div>
      ))}
    </Element>
  );
};
