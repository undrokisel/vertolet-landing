import React from "react";
import styles from "./index.module.css";
import { Text } from "../Text";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ELang } from "../../types";
import { content } from "../../content";
import { IFlatsData } from "../../apartments";

interface IProps {
  flats: IFlatsData[];
  lang: ELang;
}

export const FlatsSlider: React.FC<IProps> = ({ flats, lang }) => {
  const localContent = content[lang];
  const pow = (
    <sup>
      <Text text={"2"} className={styles.text} />
    </sup>
  );
  return (
    <div className={styles.container}>
      <div className={styles.left} />
      <div className={styles.right} />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
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
        {flats.map((flat) => (
          <SwiperSlide className={styles.swiperSlide} key={flat.id}>
            <div className={styles.roomSizes}>
              <Text
                text={`${flat.roomCount.toString()}-${
                  localContent.flatsSlider.flatsCount
                }`}
                className={styles.roomCountTitle}
                title
              />
              <div className={styles.row}>
                <Text
                  text={localContent.flatsSlider.apartmentDescription}
                  className={styles.text}
                />
                <div className={styles.row}>
                  <Text
                    text={`${flat.totalSquare.toString()} m`}
                    className={styles.text}
                  />
                  {pow}
                </div>
              </div>
              <ol className={styles.flatOl}>
                {flat.rooms.map((room, id) => (
                  <li key={room.title + id}>
                    <div className={styles.row}>
                      <Text
                        //@ts-ignore
                        text={localContent[room.title]}
                        className={styles.text}
                      />
                      <div className={styles.row}>
                        <Text
                          text={`${room.value.toString()} m`}
                          className={styles.text}
                        />
                        {pow}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <Image src={flat.img} alt="akt" className={styles.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
