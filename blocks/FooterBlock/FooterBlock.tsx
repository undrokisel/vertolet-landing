import React, { FC } from "react";
import styles from "./index.module.css";
import { content } from "../../content";
import { Text } from "../../components/Text";
import { Element } from "react-scroll";
import { EBlocks, ELang } from "../../types";
import { scroller } from "react-scroll";
import { useIsMobile } from "../../utils/getIsMobile";
import Image from "next/image";

interface IProps {
  lang: ELang;
}

export const FooterBlock: FC<IProps> = ({ lang }) => {
  const localContent = content[lang].footerBlock;
  const isMobile = useIsMobile();
  return (
    <div className="">
      <Element name={EBlocks.FOOTER} className={styles.container}>
        <div className={styles.left} />
        {/* <Image src={} alt="miradorLogo" className={styles.logo} /> */}
        {isMobile ? null : (
          <div className={styles.navigation}>
            {localContent.navigation.map(({ title, id }) => (
              <Text
              title={true}
              text={title}
              className={styles.navigationText}
              key={id}
              onClick={() =>
                scroller.scrollTo(id, {
                  duration: 500,
                  delay: 100,
                  smooth: true,
                  offset: -40,
                })
              }
              />
            ))}
            </div>
        )}
      </Element>
      <div className="">made by Kisel A.V., Onix</div>
    </div>
  );
};
