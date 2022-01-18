import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { IconButton } from "@mui/material";
import "./HeaderBasket.css";
const HeaderBasket = ({ count }) => {
  return (
    <div class="headerBasket">
      <IconButton>
        <ShoppingBasketIcon className="headerBasket__icon" />
        <span class="headerBasket__count">{count}</span>
      </IconButton>
    </div>
  );
};

export default HeaderBasket;
