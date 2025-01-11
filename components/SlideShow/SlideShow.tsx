import React, { FC } from "react";
import styles from "./index.module.css";
import { Fade } from "react-slideshow-image";
import Image, { StaticImageData } from "next/image";
import "react-slideshow-image/dist/styles.css";
import cn from "classnames";

interface IProps {
  images: StaticImageData[];
}

export const SlideShow: FC<IProps> = ({ images }) => {
  return (
    <div className={styles.container}>
      <Fade autoplay={true} duration={2000} arrows={false}>
        {images.map((img, index) => {
          return (
            <div key={index} className={cn("each-fade", styles.slide)}>
              <Image
                alt={index.toString()}
                src={img}
                className={styles.img}
                fill
              />
            </div>
          );
        })}
      </Fade>
    </div>
  );
};
