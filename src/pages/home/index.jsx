import React from "react";
import Contacts from "../../pages/contact";
import Footer from "../../components/footer";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>Создай тело мечты вместе с Moreon Fitness</h1>
        <ul>
          <li>Гибкая клубная карта</li>
          <li>Персональные тренировки</li>
          <li>Все самые продвинутые программы 2022 года</li>
        </ul>
        <div className="buttons">
          <button>Узнать подробнее</button>
          <button>Рассчитать стоимость</button>
        </div>
        <div className="stats">
          <div>
            <h2>500 000 м²</h2>
            <p>Площадь зала</p>
          </div>
          <div>
            <h2>100 500</h2>
            <p>Тренажеров VIP уровня</p>
          </div>
          <div>
            <h2>Бассейны и СПА центр</h2>
          </div>
        </div>
      </div>
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
