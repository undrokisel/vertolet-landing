import React, { FC } from "react";
import styles from "./index.module.css";
import { Text } from "../../components/Text";
import { content } from "../../content";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import { Element } from "react-scroll";
import { EBlocks, EFonts, ELang } from "../../types";
import ScrollAnimation from "react-animate-on-scroll";
import { Button } from "../../components/Button";
import Image from "next/image";
// import logoImg from "./logo.png";

interface IProps {
  lang: ELang;
  openModal: () => void;
}

export const LocationBlock: FC<IProps> = ({ lang, openModal }) => {
  const localContent = content[lang].locationBlock;
  return (
    <Element name={EBlocks.LOCATION}>
      <ScrollAnimation
        animateIn="animate__zoomIn"
        animateOnce={true}
        className={styles.container}
      >
        <YMaps>
          <Map
            options={{
              avoidFractionalZoom: true,
              restrictMapArea: true,
              maxZoom: 16,
              minZoom: 16,
            }}
            state={{
              center: [55.744743,37.643632],
              zoom: 16,
            }}
            className={styles.map}
          >
            {/* <Image src={logoImg} alt="logoImg" className={styles.mapIcon} /> */}
          </Map>
        </YMaps>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <Text text={localContent.title} className={styles.title} title />
            <div className={styles.row}>
              <Text text={localContent.address} className={styles.infoText} />
            </div>
            <div className={styles.content}>
              <p className={styles.phone}>
                <Text
                  type="tel"
                  text={localContent.mainPhone}
                  className={styles.infoText}
                />
              </p>
              <p className={styles.phone}>
                <Text
                  type="tel"
                  text={localContent.phone}
                  className={styles.infoText}
                />
              </p>
              <p className={styles.phone}>
                <Text
                  type="tel"
                  text={localContent.extraPhone}
                  className={styles.infoText}
                />
              </p>
            </div>
            <div className={styles.row}>
              <Text
                type="mail"
                text={localContent.mail}
                className={styles.infoText}
              />
            </div>
            <Button
              style={{ background: "#394426" }}
              text={localContent.buttonText}
              fontFamily={EFonts.Austin}
              onClick={openModal}
            />
          </div>
        </div>
      </ScrollAnimation>
    </Element>
  );
};
