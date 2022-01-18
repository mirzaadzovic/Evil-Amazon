import React from "react";
import "./Product.css";

const Product = ({ title, price, img }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
          <small>€</small>
        </p>

        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>

      <img src={img} />

      <button>Add to basket</button>
    </div>
  );
};

export default Product;
