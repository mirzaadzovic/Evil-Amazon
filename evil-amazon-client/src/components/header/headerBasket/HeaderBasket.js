import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { IconButton } from "@mui/material";
import "./HeaderBasket.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCount } from "../../../redux/reducers/basketReducer";

const HeaderBasket = ({ count }) => {
  return (
    <Link to="/checkout" className="headerBasket">
      <IconButton>
        <ShoppingBasketIcon className="headerBasket__icon" />
        <span className="headerBasket__count">{count}</span>
      </IconButton>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    count: getCount(state),
  };
};
export default connect(mapStateToProps)(HeaderBasket);
