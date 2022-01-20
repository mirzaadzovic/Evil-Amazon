import React from "react";
import "./HeaderOption.css";
const HeaderOption = ({ top, bottom }) => {
  return (
    <div className="headerOption">
      <span className="headerOption__lineOne">{top}</span>
      <span className="headerOption__lineTwo">{bottom}</span>
    </div>
  );
};

export default HeaderOption;
