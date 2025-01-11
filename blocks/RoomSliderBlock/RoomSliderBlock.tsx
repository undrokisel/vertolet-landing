import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.css";
import { Text } from "../../components/Text";
import { content } from "../../content";
import { EBlocks, ELang } from "../../types";
import { Select, MenuItem, FormControl } from "@mui/material";
import { blocksInfo, flatsData } from "../../apartments";
import cn from "classnames";
import { FlatsSlider } from "../../components/FlatsSlider";
import { useIsMobile } from "../../utils/getIsMobile";
import { Element } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import { MobileFlatsSlider } from "../../components/MobileFlatsSlider";

interface IProps {
  lang: ELang;
}

export const RoomSliderBlock: React.FC<IProps> = ({ lang }) => {
  const [selectedBlock, setSelectedBlock] = useState<string>("K");
  // @ts-ignore
  const flatsSize = blocksInfo[selectedBlock];
  const [selectedFlatSize, setSelectedFlatSize] = useState(flatsSize[0]);
  const localContent = content[lang].flatsSlider;
  const filteredFlats = useMemo(
    () =>
      flatsData[selectedBlock].filter(
        (flat) => flat.roomCount === selectedFlatSize
      ),
    [selectedBlock, selectedFlatSize]
  );

  useEffect(() => {
    setSelectedFlatSize(flatsSize[0]);
  }, [selectedBlock]);

  const isMobile = useIsMobile();
  return (
    <Element name={EBlocks.ROOM_SELECTOR} className={styles.container}>
      <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
        <Text text={localContent.title} className={styles.title} title />
        <div className={styles.row}>
          <FormControl variant="standard" className={styles.formColor}>
            <Select
              value={selectedBlock}
              className={styles.select}
              onChange={(event) =>
                setSelectedBlock(event.target.value as string)
              }
            >
              <MenuItem value="M" className={styles.select}>
                {localContent.block} M
              </MenuItem>
              <MenuItem value="K" className={styles.select}>
                {localContent.block} K
              </MenuItem>
              <MenuItem value="L" className={styles.select}>
                {localContent.block} L
              </MenuItem>
            </Select>
          </FormControl>
          <div className={styles.flatSizeContainer}>
            {flatsSize?.map((size: number) => (
              <div
                key={size}
                className={cn(styles.flatSize, {
                  [styles.selected]: selectedFlatSize == size,
                })}
                onClick={() => setSelectedFlatSize(size)}
              >
                <Text
                  text={size.toString()}
                  className={styles.flatSizeNumber}
                />
                <Text
                  text={localContent.flatsCount}
                  className={styles.flatSizeNumber}
                />
              </div>
            ))}
          </div>
        </div>
        {isMobile ? (
          <MobileFlatsSlider flats={filteredFlats} lang={lang} />
        ) : (
          <FlatsSlider flats={filteredFlats} lang={lang} />
        )}
      </ScrollAnimation>
    </Element>
  );
};
