import React from "react";
import styles from "./index.module.css";
import { ELang } from "../../types";
import { content } from "../../content";
import { Text } from "../../components/Text";
import locationImg from "./locationImg.png";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { useIsMobile } from "../../utils/getIsMobile";
import cn from "classnames";

interface IProps {
  lang: ELang;
}

export const LocationInfoBlock: React.FC<IProps> = ({ lang }) => {
  const localContent = content[lang].locationInfoBlock;
  const isMobile = useIsMobile();
  return (
    <div
      className={cn(styles.container, { [styles.mobileContainer]: isMobile })}
    >
      <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce={true}>
        <Text text={localContent.title} className={styles.title} title />
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInRightBig" animateOnce={true}>
        <Text text={localContent.description} className={styles.description} />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__fadeInLeftBig"
        animateOnce={true}
        className={styles.imageContainer}
      >
        <Image src={locationImg} alt="locationImg" className={styles.img} />
      </ScrollAnimation>
    </div>
  );
};
