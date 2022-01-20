import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";

const Product = ({ title, price, img, rating }) => {
  const stars = Array(rating).fill(<StarIcon className="product__star" />); // creates array with 'rating' number of stars
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
          <small>€</small>
        </p>
        <div className="product__rating">{stars}</div>
      </div>

      <img src={img} />

      <button>Add to basket</button>
    </div>
  );
};

export default Product;
