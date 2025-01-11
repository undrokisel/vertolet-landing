import React, { FC, useId } from "react";
import styles from "./index.module.css";
import { Text } from "../../components/Text";
import { content } from "../../content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import cn from "classnames";
import Image from "next/image";
import img1 from "../../images/galleryBlock/1.png";
import img2 from "../../images/galleryBlock/2.png";
import { useIsMobile } from "../../utils/getIsMobile";
import { Element } from "react-scroll";
import { EBlocks, ELang } from "../../types";
import ScrollAnimation from "react-animate-on-scroll";

interface IProps {
  lang: ELang;
}

export const GalleryBlock: FC<IProps> = ({ lang }) => {
  const isMobile = useIsMobile();
  const images = content[lang].galleryBlock.images;
  return (
    <Element name={EBlocks.GALLERY} className={styles.container}>
      <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
        <Text
          text={content[lang].galleryBlock.title}
          className={styles.title}
          title
        />
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <Swiper
          slidesPerView={isMobile ? 1 : 2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
          allowTouchMove={true}
        >
          {images.map((image, id) => (
            <SwiperSlide className={cn(styles.swiperSlide)} key={id}>
              <Image
                src={image}
                alt="apartment img"
                className={styles.image}
                fill
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollAnimation>
    </Element>
  );
};
