import React from "react";
import styles from "./index.module.css";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import { Element } from "react-scroll";
import { EBlocks } from "../../types";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";
// import logoImg from "../LocationBlock/logo.png";

export const LocationMobileBlock = () => {
  return (
    <Element name={EBlocks.LOCATION} className={styles.container}>
      <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
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
      </ScrollAnimation>
    </Element>
  );
};
