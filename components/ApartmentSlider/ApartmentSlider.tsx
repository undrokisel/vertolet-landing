import React, { FC } from "react";
import { Navigation, Pagination } from "swiper";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import Image from "next/image";
import { IApartmentSchema } from "../../types";

interface IProps {
  schemas: IApartmentSchema[];
  className?: string;
}

export const ApartmentSlider: FC<IProps> = ({ schemas, className }) => {
  return (
    <div className={cn(className, styles.container)}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
        allowTouchMove={true}
      >
        {schemas.map((schema) => (
          <SwiperSlide className={cn(styles.swiperSlide)} key={schema.id}>
            <Image
              src={schema.fullImg}
              alt="apartment img"
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
