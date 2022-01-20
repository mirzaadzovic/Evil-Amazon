import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { IconButton } from "@mui/material";
import "./HeaderBasket.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCount } from "../../../redux/reducers/basketReducer";

const HeaderBasket = () => {
  const count = useSelector(getCount);
  console.log(count);
  return (
    <Link to="/checkout" className="headerBasket">
      <IconButton>
        <ShoppingBasketIcon className="headerBasket__icon" />
        <span className="headerBasket__count">{count}</span>
      </IconButton>
    </Link>
  );
};

export default HeaderBasket;
