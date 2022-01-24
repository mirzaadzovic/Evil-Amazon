import React from "react";
import "./Header.css";
import amazonLogoWhite from "../../assets/amazonLogoWhite.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./headerOption/HeaderOption";
import HeaderBasket from "./headerBasket/HeaderBasket";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectPath } from "../../redux/reducers/pathReducer";
import { selectUser } from "../../redux/reducers/userReducer";
import { logoutUser, userLogoutSucces } from "../../redux/actions/userActions";

function Header({ logout }) {
  const isLoginOrRegisterPage = useSelector(selectPath);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  // Header will not show on login or register page
  if (isLoginOrRegisterPage) return null;

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

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
        {!user ? (
          <Link className="header__login" to="/login">
            <HeaderOption top={"Hello Guest"} bottom={"Sign in"} />
          </Link>
        ) : (
          <a onClick={handleLogout}>
            <HeaderOption top={"Hello " + user.username} bottom={"Sign out"} />
          </a>
        )}
        <HeaderOption top={"Returns"} bottom={"& Orders"} />
        <HeaderOption top={"Your"} bottom={"Prime"} />
      </div>

      <HeaderBasket />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     user: () => selectUser(state),
//     isLoginOrRegisterPage: () => selectPath(state),
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    logout: async () => {
      dispatch(logoutUser());
    },
  };
};
export default connect(null, mapDispatchToProps)(Header);
