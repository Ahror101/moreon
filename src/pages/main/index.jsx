import React from "react";
import "./style.css";
import Effect from "../../components/effect";

const Main = () => {
  return (
    <div className="main">
      <Effect left="30%" top="25%" className="effect1" />
      <Effect left="70%" top="45%" className="effect2" />
      <div className="mask">
        <div className="content">
          <h1 className="title">Moreon Fitness</h1>
          <p className="subtitle">откроет для вас</p>
          <p className="subtitle">новые возможности</p>
          <p className="description">
            500 000 м2 фитнес зала, 100 500 тренажеров VIP уровня, Бассейны и
            СПА центр, гибкая клубная карта, персональные тренировки и все самые
            продвинутые программы 2022 года ждут вас в Moreon Fitness
          </p>
          <div className="buttons">
            <button className="btn teal">Узнать подробнее</button>
            <button className="btn gray">Рассчитать стоимость</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
