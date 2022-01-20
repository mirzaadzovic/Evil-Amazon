import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { IconButton } from "@mui/material";
import "./HeaderBasket.css";
import { Link } from "react-router-dom";

const HeaderBasket = ({ count }) => {
  return (
    <Link to="/checkout" class="headerBasket">
      <IconButton>
        <ShoppingBasketIcon className="headerBasket__icon" />
        <span class="headerBasket__count">{count}</span>
      </IconButton>
    </Link>
  );
};

export default HeaderBasket;
