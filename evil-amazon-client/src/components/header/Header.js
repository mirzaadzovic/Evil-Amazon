import React from "react";
import "./Header.css";
import amazonLogoWhite from "../../assets/amazonLogoWhite.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./headerOption/HeaderOption";
import HeaderBasket from "./headerBasket/HeaderBasket";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPath } from "../../redux/reducers/pathReducer";

function Header() {
  const isLoginOrRegisterPage = useSelector(selectPath);

  // Header will not show on login or register page
  if (isLoginOrRegisterPage) return null;

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
        <Link className="header__login" to="/login">
          <HeaderOption top={"Hello Guest"} bottom={"Sign in"} />
        </Link>
        <HeaderOption top={"Returns"} bottom={"& Orders"} />
        <HeaderOption top={"Your"} bottom={"Prime"} />
      </div>

      <HeaderBasket />
    </div>
  );
}

export default Header;
