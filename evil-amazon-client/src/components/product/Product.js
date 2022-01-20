import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";

const Product = ({ title, price, img, rating }) => {
  const stars = Array(rating) // creates array with 'rating' number of stars
    .fill()
    .map((_, idx) => <StarIcon className="product__star" key={idx} />);
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

      <button className="amazon-btn">Add to basket</button>
    </div>
  );
};

export default Product;
