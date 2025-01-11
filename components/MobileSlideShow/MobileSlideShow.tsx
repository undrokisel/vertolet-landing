import React, { FC } from "react";
import styles from "./index.module.css";
import { Fade } from "react-slideshow-image";
import Image, { StaticImageData } from "next/image";
import "react-slideshow-image/dist/styles.css";

interface IProps {
  images: StaticImageData[];
}

export const MobileSlideShow: FC<IProps> = ({ images }) => {
  return (
    <div className={styles.container}>
      <Fade autoplay={true} duration={2000} arrows={false}>
        {images.map((img, index) => {
          return (
            <div key={index} className={styles.slide}>
              <Image alt="1" src={img} className={styles.img} />
            </div>
          );
        })}
      </Fade>
    </div>
  );
};
