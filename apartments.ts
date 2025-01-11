import m_3_1 from "./images/flatsImages/M_3_1.webp";
import m_2_2 from "./images/flatsImages/M_2_2.webp";
import m_1_3 from "./images/flatsImages/M_1_3.webp";
import l_3_4 from "./images/flatsImages/L_3_4.webp";
import l_1_5 from "./images/flatsImages/L_1_5.webp";
import l_3_6 from "./images/flatsImages/L_3_6.webp";
import l_3_7 from "./images/flatsImages/L_3_7.webp";
import l_2_8 from "./images/flatsImages/L_2_8.webp";
import l_1_9 from "./images/flatsImages/L_1_9.webp";
import l_3_10 from "./images/flatsImages/L_3_10.webp";
import l_1_11 from "./images/flatsImages/L_1_11.webp";
import l_3_12 from "./images/flatsImages/L_3_12.webp";
import l_3_13 from "./images/flatsImages/L_3_13.webp";
import l_2_14 from "./images/flatsImages/L_2_14.webp";
import l_1_15 from "./images/flatsImages/L_1_15.webp";
import k_3_16 from "./images/flatsImages/K_3_16.webp";
import k_2_17 from "./images/flatsImages/K_2_17.webp";
import k_3_18 from "./images/flatsImages/K_3_18.webp";
import k_2_19 from "./images/flatsImages/K_2_19.webp";
import k_2_20 from "./images/flatsImages/K_2_20.webp";
import { StaticImageData } from "next/image";

export type TExtraInfo = { title: string; value: number };

export interface IApartmentInfo {
  id: string;
  block: string;
  roomCount: number;
  info: {
    square: number;
    price: number;
    extraInfo: TExtraInfo[];
  };
  schemasImg: { id: string; img: StaticImageData; fullImg: StaticImageData };
}

export const blocksInfo = {
  M: [1, 2, 3],
  K: [2, 3],
  L: [1, 2, 3],
};

export interface IFlatsData {
  id: number;
  roomCount: number;
  totalSquare: number;
  img: StaticImageData;
  rooms: { title: string; value: number }[];
}

export const flatsData: { [key: string]: IFlatsData[] } = {
  K: [
    {
      id: 16,
      roomCount: 3,
      totalSquare: 97.6,
      img: k_3_16,
      rooms: [
        { title: "bedroom", value: 22.3 },
        { title: "bedroom", value: 19.0 },
        { title: "lounge", value: 18.4 },
        { title: "kitchen", value: 14.1 },
        { title: "toilet", value: 3.7 },
        { title: "toilet", value: 2.4 },
        { title: "hall", value: 16.7 },
        { title: "balcony", value: 1.0 },
      ],
    },
    {
      id: 17,
      roomCount: 2,
      totalSquare: 81.6,
      img: k_2_17,
      rooms: [
        { title: "bedroom", value: 14.2 },
        { title: "bedroom", value: 14.2 },
        { title: "kitchen", value: 20.7 },
        { title: "toilet", value: 3.6 },
        { title: "toilet", value: 3.6 },
        { title: "hall", value: 7.2 },
        { title: "balcony", value: 10.7 },
      ],
    },
    {
      id: 18,
      roomCount: 3,
      totalSquare: 97.0,
      img: k_3_18,
      rooms: [
        { title: "bedroom", value: 22.7 },
        { title: "bedroom", value: 16.1 },
        { title: "lounge", value: 18.4 },
        { title: "kitchen", value: 14.1 },
        { title: "toilet", value: 4.5 },
        { title: "toilet", value: 2.9 },
        { title: "hall", value: 17.3 },
        { title: "balcony", value: 1.0 },
      ],
    },
    {
      id: 19,
      roomCount: 2,
      totalSquare: 58.7,
      img: k_2_19,
      rooms: [
        { title: "bedroom", value: 12.8 },
        { title: "lounge", value: 15.3 },
        { title: "kitchen", value: 12.0 },
        { title: "toilet", value: 4.6 },
        { title: "hall", value: 7.5 },
        { title: "balcony", value: 6.5 },
      ],
    },
    {
      id: 20,
      roomCount: 2,
      totalSquare: 57.1,
      img: k_2_20,
      rooms: [
        { title: "bedroom", value: 13.4 },
        { title: "lounge", value: 15.3 },
        { title: "kitchen", value: 12.0 },
        { title: "toilet", value: 4.7 },
        { title: "hall", value: 7.5 },
        { title: "balcony", value: 4.2 },
      ],
    },
  ],
  M: [
    {
      id: 1,
      roomCount: 3,
      totalSquare: 89.8,
      img: m_3_1,
      rooms: [
        { title: "bedroom", value: 16.3 },
        { title: "bedroom", value: 12.5 },
        { title: "lounge", value: 25.5 },
        { title: "kitchen", value: 14.9 },
        { title: "toilet", value: 5.7 },
        { title: "toilet", value: 2.8 },
        { title: "hall", value: 10.1 },
        { title: "balcony", value: 2.0 },
      ],
    },
    {
      id: 2,
      roomCount: 2,
      totalSquare: 87.5,
      img: m_2_2,
      rooms: [
        { title: "bedroom", value: 24.2 },
        { title: "bedroom", value: 14.4 },
        { title: "kitchen", value: 22.5 },
        { title: "toilet", value: 4.5 },
        { title: "toilet", value: 3.9 },
        { title: "hall", value: 8.3 },
        { title: "balcony", value: 9.7 },
      ],
    },
    {
      id: 3,
      roomCount: 1,
      totalSquare: 45.0,
      img: m_1_3,
      rooms: [
        { title: "bedroom", value: 19.6 },
        { title: "kitchen", value: 12.1 },
        { title: "toilet", value: 3.3 },
        { title: "hall", value: 6.8 },
        { title: "balcony", value: 3.2 },
      ],
    },
  ],
  L: [
    {
      id: 4,
      roomCount: 3,
      totalSquare: 99.5,
      img: l_3_4,
      rooms: [
        { title: "bedroom", value: 21.4 },
        { title: "bedroom", value: 20.1 },
        { title: "lounge", value: 14.7 },
        { title: "kitchen", value: 13.0 },
        { title: "toilet", value: 4.9 },
        { title: "toilet", value: 3.5 },
        { title: "toilet", value: 3.3 },
        { title: "hall", value: 16.6 },
        { title: "balcony", value: 2.0 },
      ],
    },
    {
      id: 5,
      roomCount: 1,
      totalSquare: 63.8,
      img: l_1_5,
      rooms: [
        { title: "bedroom", value: 18.8 },
        { title: "kitchen", value: 22.5 },
        { title: "toilet", value: 4.5 },
        { title: "toilet", value: 2.7 },
        { title: "hall", value: 5.6 },
        { title: "balcony", value: 9.7 },
      ],
    },
    {
      id: 6,
      roomCount: 3,
      totalSquare: 89.8,
      img: l_3_6,
      rooms: [
        { title: "bedroom", value: 21.4 },
        { title: "bedroom", value: 15.2 },
        { title: "lounge", value: 19.6 },
        { title: "kitchen", value: 12.1 },
        { title: "toilet", value: 3.9 },
        { title: "toilet", value: 2.8 },
        { title: "toilet", value: 2.4 },
        { title: "hall", value: 10.4 },
        { title: "balcony", value: 2.0 },
      ],
    },
    {
      id: 7,
      roomCount: 3,
      totalSquare: 92,
      img: l_3_7,
      rooms: [
        { title: "bedroom", value: 21.4 },
        { title: "bedroom", value: 15.2 },
        { title: "lounge", value: 19.6 },
        { title: "kitchen", value: 12.1 },
        { title: "toilet", value: 3.9 },
        { title: "toilet", value: 2.8 },
        { title: "toilet", value: 2.4 },
        { title: "hall", value: 10.4 },
        { title: "balcony", value: 4.2 },
      ],
    },
    {
      id: 8,
      roomCount: 2,
      totalSquare: 87.5,
      img: l_2_8,
      rooms: [
        { title: "bedroom", value: 24.2 },
        { title: "bedroom", value: 14.4 },
        { title: "kitchen", value: 22.5 },
        { title: "toilet", value: 4.5 },
        { title: "toilet", value: 3.9 },
        { title: "hall", value: 8.3 },
        { title: "balcony", value: 9.7 },
      ],
    },
    {
      id: 9,
      roomCount: 1,
      totalSquare: 45.0,
      img: l_1_9,
      rooms: [
        { title: "bedroom", value: 19.6 },
        { title: "kitchen", value: 12.1 },
        { title: "toilet", value: 3.3 },
        { title: "hall", value: 6.8 },
        { title: "balcony", value: 3.2 },
      ],
    },
    {
      id: 10,
      roomCount: 3,
      totalSquare: 99.5,
      img: l_3_10,
      rooms: [
        { title: "bedroom", value: 21.4 },
        { title: "bedroom", value: 20.1 },
        { title: "lounge", value: 14.7 },
        { title: "kitchen", value: 13.0 },
        { title: "toilet", value: 4.9 },
        { title: "toilet", value: 3.5 },
        { title: "toilet", value: 3.3 },
        { title: "hall", value: 16.6 },
        { title: "balcony", value: 2.0 },
      ],
    },
    {
      id: 11,
      roomCount: 1,
      totalSquare: 63.8,
      img: l_1_11,
      rooms: [
        { title: "bedroom", value: 18.8 },
        { title: "kitchen", value: 22.5 },
        { title: "toilet", value: 4.5 },
        { title: "toilet", value: 2.7 },
        { title: "hall", value: 5.6 },
        { title: "balcony", value: 9.7 },
      ],
    },
    {
      id: 12,
      roomCount: 3,
      totalSquare: 89.8,
      img: l_3_12,
      rooms: [
        { title: "bedroom", value: 21.4 },
        { title: "bedroom", value: 15.2 },
        { title: "lounge", value: 19.6 },
        { title: "kitchen", value: 12.1 },
        { title: "toilet", value: 3.9 },
        { title: "toilet", value: 2.8 },
        { title: "toilet", value: 2.4 },
        { title: "hall", value: 10.4 },
        { title: "balcony", value: 2.0 },
      ],
    },
    {
      id: 13,
      roomCount: 3,
      totalSquare: 89.8,
      img: l_3_13,
      rooms: [
        { title: "bedroom", value: 21.4 },
        { title: "bedroom", value: 15.2 },
        { title: "lounge", value: 19.6 },
        { title: "kitchen", value: 12.1 },
        { title: "toilet", value: 3.9 },
        { title: "toilet", value: 2.8 },
        { title: "toilet", value: 2.4 },
        { title: "hall", value: 10.4 },
        { title: "balcony", value: 4.2 },
      ],
    },
    {
      id: 14,
      roomCount: 2,
      totalSquare: 87.5,
      img: l_2_14,
      rooms: [
        { title: "bedroom", value: 24.2 },
        { title: "bedroom", value: 14.4 },
        { title: "kitchen", value: 22.5 },
        { title: "toilet", value: 4.5 },
        { title: "toilet", value: 3.9 },
        { title: "hall", value: 8.3 },
        { title: "balcony", value: 9.7 },
      ],
    },
    {
      id: 15,
      roomCount: 1,
      totalSquare: 45.0,
      img: l_1_15,
      rooms: [
        { title: "bedroom", value: 19.6 },
        { title: "kitchen", value: 12.1 },
        { title: "toilet", value: 3.3 },
        { title: "hall", value: 6.8 },
        { title: "balcony", value: 3.2 },
      ],
    },
  ],
};
