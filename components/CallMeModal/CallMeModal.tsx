import React, { useState } from "react";
import styles from "./CallMeModal.module.css";
import { Text } from "../Text";
import { EFonts, ELang } from "../../types";
import { content } from "../../content";
import { Button } from "../Button";
import toggleViewportOverflow from "../../utils/toggleViewportOverflow";
// @ts-ignore
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  lang: ELang;
}

const rodalStyles = {
  height: "fit-content",
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "32px",
  padding: "40px 32px",
};

export const CallMeModal: React.FC<IProps> = ({ isOpen, lang, closeModal }) => {
  const localContent = content[lang].callMeBackModal;
  const handleSubmitForm = () => {
    closeModal();
    toggleViewportOverflow(false);
  };

  const [phone, setPhone] = useState("");
  return (
    <div>
      <Rodal visible={isOpen} onClose={closeModal} customStyles={rodalStyles}>
        <Text text={localContent.title} className={styles.title} title />
        <Text text={localContent.description} className={styles.description} />

        <TextField variant="outlined" label="Имя" className={styles.input} />
        <MuiTelInput
          variant="outlined"
          label="Телефон"
          className={styles.input}
          value={phone}
          onChange={(e) => setPhone(e)}
        />
        <Button
          className={styles.button}
          text={localContent.buttonText}
          fontFamily={EFonts.Austin}
          onClick={handleSubmitForm}
        />
      </Rodal>
    </div>
  );
};
