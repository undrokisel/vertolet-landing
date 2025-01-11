import chessImg1 from "./images/chessBlock/1.jpg";
// import chessImg2 from "./images/chessBlock/2.jpg";
import advantageImg1 from "./images/advantagesBlock/1.jpg";
import advantageImg2 from "./images/advantagesBlock/2.jpg";
import advantageImg3 from "./images/advantagesBlock/7.jpg";
import welcome1 from "./images/welcomeBlock/1.jpg";
import welcome2 from "./images/welcomeBlock/2.jpg";
import welcome3 from "./images/welcomeBlock/3.jpg";
import welcome4 from "./images/welcomeBlock/4.jpg";
import welcome5 from "./images/welcomeBlock/5.jpg";
import gallery1 from "./images/galleryBlock/1.jpg";
import gallery2 from "./images/galleryBlock/2.jpg";
import gallery3 from "./images/galleryBlock/3.jpg";
import gallery4 from "./images/galleryBlock/4.jpg";
import gallery5 from "./images/galleryBlock/5.jpg";
import { EBlocks } from "./types";

export const content = {
  rus: {
    squareMeasurementUnit: "кв.м",
    priceInUzb: "млн. руб",
    balcony: "Балкон",
    kitchen: "Кухня",
    lounge: "Гостиная",
    toilet: "Санузел",
    hall: "Холл",
    bedroom: "Спальня",
    locationInfoBlock: {
      title: "РАСПОЛОЖЕНИЕ ЖК NOVOGRAD",
      description:
        "Обеспечивает доступ к развитой инфраструктуре — все необходимые для " +
        "комфортной жизни локации в пешей доступности: продовольственные сетевые " +
        "маркеты, школы, детские сады, медицинские клиники, аптеки и общественный транспорт",
    },
    callMeBackModal: {
      title: "ОСТАВИТЬ ЗАЯВКУ",
      description: "Оставьте свой номер, и мы перезвоним Вам.",
      namePlaceholder: "Имя",
      phonePlaceholder: "Номер телефона",
      buttonText: "ЖДУ ЗВОНКА",
    },
    header: {
      navigation: [
        { title: "О комплексе", id: EBlocks.ABOUT },
        { title: "Преимущества", id: EBlocks.CHESS },
        { title: "Блоки", id: EBlocks.ROOM_SELECTOR },
        { title: "Галерея", id: EBlocks.GALLERY },
        // { title: "Ход строительства", id: EBlocks.BUILDINGS },
        { title: "Локация", id: EBlocks.LOCATION },
      ],
      mainPhone: "8-(800)-700-123-234",
      phone: "8-(800)-700-600-500",
      extraPhone: "8-(800)-700-432-999",
      timetable: "Ежедневно с 9:00 до 20:00",
    },
    welcomeBlock: {
      background: [welcome1, welcome2, welcome3, welcome4, welcome5],
      description: "Новоград - элитный квартал для крепкой семьи",
      menu: "МЕНЮ",
      button: "Оставить заявку",
    },
    aboutBlock: {
      title: "О КОМПЛЕКСЕ",
      description:
        "Новоград - это современный комплекс апартаментов бизнес-класса расположенный в престижном районе столицы.\n" +
        "На территории ЖК представлены 3, 5 и 7-этажные жилые дома с просторными террасами " +
        "и балконами. Квартиры имеют площадь от 46 до 200 квадратных метров.",
      advantages: [
        { title: "Планировок", count: "21" },
        { title: "Парковочных мест", count: "325" },
        { title: "Квартир", count: "413" },
      ],
      button: "Подробнее",
    },
    advantagesBlock: [
      {
        title: "КРУГЛОСУТОЧНАЯ ОХРАНА",
        description:
          "На территории  круглосуточное видеонаблюдение, которое обеспечит безопасность жильцам комплекса и их гостям",
        image: advantageImg1,
      },
      {
        title: "БЛАГОУСТРОЕННАЯ ТЕРРИТОРИЯ",
        description:
          "Во дворах предусмотрены зеленые зоны с ландшафтным дизайном, многофункциональные детские площадки, беседки для отдыха, прогулочные дорожки.",
        image: advantageImg2,
      },
      {
        title: "АРИСТОКРАТИЧНОСТЬ В ДЕТАЛЯХ",
        description:
          "Просторные холлы, высококачественная внутренняя декоративная отделка поддерживают ощущения нахождения в царских палатах ",
        image: advantageImg3,
      },
    ],
    chessBlock: {
      title: "ПРЕИМУЩЕСТВА",
      content: [
        // {
        //   title: "Конструкция",
        //   description:
        //     "Монолитная система строительства наших домов позволяет выполнить любую планировку" +
        //     " квартиры, а стены из жженого кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
        //   img: chessImg1,
        //   mobileImg: chessImg1,
        // },
       
      ],
    },
    flatsSlider: {
      block: "Блок",
      title: "БЛОКИ И ПЛАНИРОВКА",
      flatsCount: "комнатная",
      roomCountText: "Количество комнат",
      schemaTitle: "Доступные планировки",
      schemaTitleMobile: "Планировки",
      apartmentDescription: "Общая площадь",
      cost: "Стоимость",
      roomSize: "Размеры комнат",
      squareTitle: "Общая площадь",
      book: "Забронировать",
    },
    galleryBlock: {
      title: "ГАЛЕРЕЯ",
      images: [gallery1, gallery2, gallery3, gallery4, gallery5],
    },
    buildingStepsBlock: {
      title: "ХОД СТРОИТЕЛЬСТВА",
    },
    locationBlock: {
      title: "ОФИС ПРОДАЖ",
      address: "Москва, Новоданиловская, д. 8",
      shortAddress: "Новоданиловская, д. 8",
      phone: "8-(800)-700-600-500",
      mainPhone: "8-(800)-700-123-234",
      extraPhone: "8-(800)-700-432-999",
      mail: "info@vertolet.com",
      buttonText: "Записаться на встречу",
    },
    footerBlock: {
      navigation: [
        { title: "Главная", id: EBlocks.WELCOME },
        { title: "О комплексе", id: EBlocks.ABOUT },
        { title: "Преимущества", id: EBlocks.CHESS },
        { title: "Блоки", id: EBlocks.ROOM_SELECTOR },
        { title: "Галерея", id: EBlocks.GALLERY },
      ],
    },
  },
};
