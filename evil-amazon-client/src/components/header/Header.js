import React from "react";
import "./Header.css";
import amazonLogoWhite from "../../assets/amazonLogoWhite.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./headerOption/HeaderOption";
import HeaderBasket from "./headerBasket/HeaderBasket";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={amazonLogoWhite} />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <HeaderOption top={"Hello"} bottom={"Sign in"} />
        <HeaderOption top={"Returns"} bottom={"& Orders"} />
        <HeaderOption top={"Your"} bottom={"Prime"} />
        <HeaderBasket count={0} />
      </div>
    </div>
  );
}

export default Header;
