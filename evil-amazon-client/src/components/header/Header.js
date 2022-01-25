import React, { useEffect } from "react";
import "./Header.css";
import amazonLogoWhite from "../../assets/amazonLogoWhite.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./headerOption/HeaderOption";
import HeaderBasket from "./headerBasket/HeaderBasket";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectPath } from "../../redux/reducers/pathReducer";
import { selectUser } from "../../redux/reducers/userReducer";
import { logoutUser } from "../../redux/actions/userActions";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ logout, isLoginOrRegisterPage, user }) {
  // Header will not show on login or register page
  if (isLoginOrRegisterPage) return null;

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={amazonLogoWhite} />
      </Link>

      <div className="header__hamburger">
        <MenuIcon />
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {!user ? (
          <Link className="header__login" to="/login">
            <HeaderOption top={"Hello Guest"} bottom={"Sign in"} />
          </Link>
        ) : (
          <Link onClick={logout} to="/" className="header__login">
            <HeaderOption top={"Hello " + user.username} bottom={"Sign out"} />
          </Link>
        )}
        <HeaderOption
          className="header__option"
          top={"Returns"}
          bottom={"& Orders"}
        />
        <HeaderOption
          className="header__option"
          top={"Your"}
          bottom={"Prime"}
        />
      </div>

      <HeaderBasket />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: selectUser(state),
    isLoginOrRegisterPage: selectPath(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logoutUser());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
