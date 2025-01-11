import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { WelcomeBlock } from "../blocks/WelcomeBlock";
import { AboutBlock } from "../blocks/AboutBlock";
import { AdvantagesBlock } from "../blocks/AdvantagesBlock";
import { ChessBlock } from "../blocks/ChessBlock";
import { useIsMobile } from "../utils/getIsMobile";
import { ChessBlockMobile } from "../blocks/ChessBlockMobile";
import { GalleryBlock } from "../blocks/GalleryBlock";
import { LocationBlock } from "../blocks/LocationBlock";
import React, { useState } from "react";
import "swiper/css";
import "animate.css/animate.min.css";
import "animate.css";
import "react-slideshow-image/dist/styles.css";
import { ELang } from "../types";
import { CallMeModal } from "../components/CallMeModal";
import toggleViewportOverflow from "../utils/toggleViewportOverflow";
import { RoomSliderBlock } from "../blocks/RoomSliderBlock";
import { LocationInfoBlock } from "../blocks/LocationInfoBlock";
import { AdvantagesMobileBlock } from "../blocks/AdvantagesMobileBlock";

import "animate.css/animate.min.css";
import "animate.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LocationMobileBlock } from "../blocks/LocationMobileBlock";
import { FooterBlock } from "../blocks/FooterBlock";
import { ContactMobileBlock } from "../blocks/ContactMobileBlock";
import { BuildingStepsBlock } from "../blocks/BuildingStepsBlock";

export default function Home() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [lang, setLang] = useState(ELang.RUS);
  const callback = (flag: boolean) => {
    setIsOpenMenu(flag);
    toggleViewportOverflow(flag);
  };
  const openModal = () => {
    setIsOpenModal(true);
    toggleViewportOverflow(true);
  };
  return (
    <div className={styles.container}>
      <Header
        isSticky={true}
        isMenuOpen={isMenuOpen}
        callback={callback}
        lang={lang}
        setLang={setLang}
        openModal={openModal}
      />
      <WelcomeBlock lang={lang} openModal={openModal} />
      <AboutBlock lang={lang} openModal={openModal} />
      <LocationInfoBlock lang={lang} />
      <RoomSliderBlock lang={lang} />

      {isMobile ? <ChessBlockMobile lang={lang} /> : <ChessBlock lang={lang} />}
      {isMobile ? (
        <AdvantagesMobileBlock lang={lang} />
      ) : (
        <AdvantagesBlock lang={lang} />
      )}
      <GalleryBlock lang={lang} />
      {/*<BuildingStepsBlock lang={lang} />*/}
      {isMobile ? (
        <LocationMobileBlock />
      ) : (
        <LocationBlock lang={lang} openModal={openModal} />
      )}
      {isMobile ? (
        <ContactMobileBlock openModal={openModal} lang={lang} />
      ) : null}
      <FooterBlock lang={lang} />
      <CallMeModal
        lang={lang}
        isOpen={isOpenModal}
        closeModal={() => {
          setIsOpenModal(false);
          toggleViewportOverflow(false);
        }}
      />
    </div>
  );
}
