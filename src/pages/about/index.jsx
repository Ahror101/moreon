import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about">
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

export default About;
