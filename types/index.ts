import { StaticImageData } from "next/image";

export enum EFonts {
  KAZIMIR = "Kazimir",
  Austin = "Austin",
}

export enum ERooms {
  BALCONY = "balcony",
  KITCHEN = "kitchen",
  TOILET = "toilet",
  hall = "hall",
  BEDROOM = "bedroom",
}

export interface IApartmentSchema {
  id: string;
  img: StaticImageData;
  fullImg: StaticImageData;
}

export enum EBlocks {
  ABOUT = "about",
  WELCOME = "welcome",
  ADVANTAGES = "advantages",
  CHESS = "chess",
  ROOM_SELECTOR = "roomSelector",
  GALLERY = "gallery",
  BUILDINGS = "buildings",
  LOCATION = "location",
  FOOTER = "footer",
}

export enum ELang {
  RUS = "rus",
}
