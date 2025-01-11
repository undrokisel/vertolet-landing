import React, { FC } from "react";
import styles from "./index.module.css";
import { Text } from "../Text";
import { content } from "../../content";
import Image from "next/image";
// import logo from "../Header/logo.svg";
import backIcon from "./backIcon.svg";
import { scroller } from "react-scroll";
import cn from "classnames";
import rusImg from "../../images/headerBlock/rus.png";
import { ELang } from "../../types";

interface IProps {
  isOpen: boolean;
  callback: () => void;
  lang: ELang;
  setLang: (lang: ELang) => void;
}

export const MobileMenu: FC<IProps> = ({ isOpen, callback, lang, setLang }) => {
  const localContent = content[lang];
  return (
    <div className={cn(styles.container, { [styles.hidden]: !isOpen })}>
      <div className={styles.row}>
        <span onClick={callback}>
          <Image src={backIcon} alt={"back"} />
        </span>
        <Text text={localContent.welcomeBlock.menu} className={styles.title} />
        {/* <Image src={logo} alt="logo" width={83} height={76} /> */}
      </div>
      <div>
        {localContent.header.navigation.map(({ title, id }) => (
          <Text
            key={id}
            text={title}
            className={styles.navElement}
            onClick={() => {
              callback();
              scroller.scrollTo(id, {
                duration: 500,
                delay: 500,
                smooth: true,
                offset: -40,
              });
            }}
          />
        ))}
      </div>
      <div className={styles.langContainer}>
        <Image src={rusImg} alt="rusImg" onClick={() => setLang(ELang.RUS)} />
      </div>
    </div>
  );
};
