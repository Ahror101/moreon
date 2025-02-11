import React from "react";
import "./style.css";
import Banner from "../../components/banner";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import background from "../../assets/clubCards/background.png";

const ClubCards = () => {
  return (
    <Banner
      links={{ link1: "Клубные карты" }}
      title="Клубные карты"
      description='С клубной картой Мореон Фитнес вы становитесь членом клуба
            профессионалов и любителей спорта и здорового образа жизни.
            Сотрудников и клиентов Мореон Фитнес объединяет общая идея -
            "Присоединись к уникальности – стань уникальным!".'
      button="Выбрать клубную карту"
      background={background}
    />
  );
};

export default ClubCards;
