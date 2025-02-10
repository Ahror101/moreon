import React from "react";
import "./style.css";

const Effect = ({ top, left, className }) => {
  return <div className={`effect ${className}`} style={{ top: top, left: left }}></div>;
};

export default Effect;
