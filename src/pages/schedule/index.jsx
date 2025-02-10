import React from "react";
import "./style.css";
import Effect from "../../components/effect";

const Schedule = () => {
  return (
    <div className="schedule">
      <Effect left="20%" top="25%" />
      <Effect left="70%" top="35%" />
      <div className="mask">
        <div className="content">
          <div className="text">
          <h1 className="title">Расписание</h1>
          <p className="description">
            Описание расписания 2 <br /> строчкиописание расписания 2 строчки
          </p>
          </div>
          <div className="image">
            <img src={require("../../assets/schedule/gantel.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
