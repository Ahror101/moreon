import React from "react";
import "./style.css";

export default function About() {
  return (
    <div className="countainer">
      <div className="over">
        <div className="firstpage">
          <div className="photo">
            <img
              src={require("../../assets/gallery/baground.png")}
              alt=""
              width={1519}
            />
          </div>
          <div className="teks">
            <h1>
              {" "}
              <span>Moreon Fitness</span> <br /> откроет для вас <br /> новые
              возможности
            </h1>
          </div>
          <div className="buttons">
            <button className="first">Узнать подробнее</button>
            <button className="second">Рассчитать стоимость</button>
          </div>
        </div>
      </div>
    </div>
  );
}
