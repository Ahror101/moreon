import React from "react";
import "./style.css";

const Effect = ({ top, left }) => {
  return <div className="effect" style={{ top: top, left: left }}></div>;
};

export default Effect;
