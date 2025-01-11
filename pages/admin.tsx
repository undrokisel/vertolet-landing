import React from "react";
import { ChessBlockMobile } from "../blocks/ChessBlockMobile";
import { ELang } from "../types";

export default function Admin() {
  return (
    <div>
      <ChessBlockMobile lang={ELang.RUS} />
    </div>
  );
}
