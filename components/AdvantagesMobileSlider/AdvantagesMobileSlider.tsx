import React, { FC } from "react";
import styles from "./index.module.css";
import { Navigation, Autoplay } from "swiper";
import cn from "classnames";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

interface IProps {
  images: StaticImageData[];
}

export const AdvantagesMobileSlider: FC<IProps> = ({ images }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className={styles.swiper}
      allowTouchMove={true}
    >
      {images.map((img, id) => (
        <SwiperSlide className={cn(styles.swiperSlide)} key={id}>
          <Image
            src={img}
            alt="apartment img"
            className={styles.image}
            width={146}
            height={138}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
