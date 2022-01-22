import React, { useEffect } from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/actions/basketActions";

const Product = (props) => {
  const dispatch = useDispatch();
  const { title, price, img, rating } = props;

  const addItem = () => {
    dispatch(addToBasket(props));
  };

  const stars = Array(rating) // creates array with 'rating' number of stars
    .fill()
    .map((_, idx) => <StarIcon className="product__star" key={idx} />);

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>
            {price}
            <small>€</small>
          </strong>
        </p>
        <div className="product__rating">{stars}</div>
      </div>

      <img src={img} />

      <button className="amazon-btn" onClick={addItem}>
        Add to basket
      </button>
    </div>
  );
};

export default Product;
