import React from "react";
import styles from "./index.module.css";
import { ELang } from "../../types";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Text } from "../Text";
import { content } from "../../content";
import { IFlatsData } from "../../apartments";

interface IProps {
  flats: IFlatsData[];
  lang: ELang;
}

export const MobileFlatsSlider: React.FC<IProps> = ({ flats, lang }) => {
  const localContent = content[lang];
  const pow = (
    <sup>
      <Text text={"2"} className={styles.text} />
    </sup>
  );
  return (
    <div className={styles.container}>
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
          <SwiperSlide className={styles.slide} key={flat.id}>
            <Image src={flat.img} alt="img" className={styles.img} />
            <div className={styles.description}>
              <Text
                text={`${flat.roomCount.toString()}-${
                  localContent.flatsSlider.flatsCount
                }`}
                title
                className={styles.title}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
