import React from "react";
import "./Header.css";
import amazonLogoWhite from "../../assets/amazonLogoWhite.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./headerOption/HeaderOption";
import HeaderBasket from "./headerBasket/HeaderBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={amazonLogoWhite} />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <HeaderOption top={"Hello Guest"} bottom={"Sign in"} />
        <HeaderOption top={"Returns"} bottom={"& Orders"} />
        <HeaderOption top={"Your"} bottom={"Prime"} />
      </div>

      <HeaderBasket count={0} />
    </div>
  );
}

export default Header;
