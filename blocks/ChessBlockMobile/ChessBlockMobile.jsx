import React, { FC } from "react";
import styles from "./index.module.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import Image from "next/image";
import { content } from "../../content";
import { Element } from "react-scroll";
import { EBlocks, ELang } from "../../types";
import { Text } from "../../components/Text";
import ScrollAnimation from "react-animate-on-scroll";
// interface IProps {
//   lang: ELang;
// }

// export const ChessBlockMobile: FC<IProps> = ({ lang }) => {
export const ChessBlockMobile = ({ lang }) => {
  const data = content[lang].chessBlock;
  return (
    <Element name={EBlocks.CHESS} className={styles.container}>
      <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce={true}>
        <Text
          title
          text={content[lang].chessBlock.title}
          className={styles.blockTitle}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeInRightBig" animateOnce={true}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className={styles.swiper}
          allowTouchMove={true}
        >
          {data.content.map((el, id) => (
            <SwiperSlide className={cn(styles.swiperSlide)} key={id}>
              <div>
                <Image
                  className={styles.image}
                  src={el.mobileImg}
                  alt="apartment img"
                />
                <div className={styles.slideText}>
                  <Text className={styles.title} title text={el.title} />
                  <Text className={styles.text} text={el.description} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollAnimation>
    </Element>
  );
};
