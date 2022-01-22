import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import { removeFromBasket } from "../../../redux/actions/basketActions";
import { connect } from "react-redux";

const CheckoutProduct = ({ item, removeItem }) => {
  const stars = Array(item.rating)
    .fill()
    .map((r, idx) => <StarIcon key={idx} className="checkoutProduct__star" />);
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={item.img} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{item.title}</p>
        <p className="checkoutProduct__price">
          <strong>
            {item.price}
            <small>€</small>
          </strong>
        </p>

        <div className="checkoutProduct__Rating">{stars}</div>

        <button className="amazon-btn" onClick={() => removeItem(item)}>
          Remove from basket
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => dispatch(removeFromBasket(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutProduct);
