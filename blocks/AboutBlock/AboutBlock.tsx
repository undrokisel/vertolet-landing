import React, { FC } from "react";
import styles from "./index.module.css";
import { Text } from "../../components/Text";
import { EBlocks, EFonts, ELang } from "../../types";
import { Button } from "../../components/Button";
import Image from "next/image";
import aboutBlockImg1 from "./about2.webp";
import aboutBlockImg2 from "./about2.jpg";
import cn from "classnames";
import { useIsMobile } from "../../utils/getIsMobile";
import { content } from "../../content";
import { Element } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

interface IProps {
  lang: ELang;
  openModal: () => void;
}

export const AboutBlock: FC<IProps> = ({ lang, openModal }) => {
  const isMobile = useIsMobile();
  const localContent = content[lang].aboutBlock;
  const advantages = (
    <ScrollAnimation
      animateIn="animate__fadeInRightBig"
      animateOnce={true}
      className={styles.advantagesContainer}
    >
      {localContent.advantages.map((advantage) => (
        <div className={styles.advantage} key={advantage.title}>
          <Text
            text={advantage.count}
            className={styles.count}
            fontFamily={EFonts.Austin}
          />
          <Text
            text={advantage.title}
            fontFamily={EFonts.KAZIMIR}
            className={styles.advantageTitle}
          />
        </div>
      ))}
    </ScrollAnimation>
  );
  return (
    <Element name={EBlocks.ABOUT}>
      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          {isMobile ? (
            <Text text={localContent.title} className={styles.title} title />
          ) : (
            <ScrollAnimation
              animateIn="animate__fadeInLeftBig"
              animateOnce={true}
            >
              <Text text={localContent.title} className={styles.title} title />
            </ScrollAnimation>
          )}
          {isMobile ? (
            <Text
              text={localContent.description}
              fontFamily={EFonts.KAZIMIR}
              className={styles.description}
            />
          ) : (
            <ScrollAnimation
              animateIn="animate__fadeInLeftBig"
              animateOnce={true}
            >
              <Text
                text={localContent.description}
                fontFamily={EFonts.KAZIMIR}
                className={styles.description}
              />
            </ScrollAnimation>
          )}
          <ScrollAnimation
            animateIn="animate__fadeInLeftBig"
            animateOnce={true}
          >
            {isMobile ? null : advantages}
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="animate__fadeInLeftBig"
            animateOnce={true}
          >
            {isMobile ? null : (
              <Button
                className={styles.button}
                onClick={openModal}
                text={localContent.button}
                title={false}
                fontFamily={EFonts.Austin}
              />
            )}
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateIn="animate__fadeInRightBig"
          animateOnce={true}
          className={styles.imgContainer}
        >
          <Image src={aboutBlockImg1} alt="img1" className={styles.img} />
          <Image
            src={aboutBlockImg2}
            alt="img2"
            className={cn(styles.img, styles.secondImg)}
          />
        </ScrollAnimation>
        {isMobile ? advantages : null}
      </div>
    </Element>
  );
};
