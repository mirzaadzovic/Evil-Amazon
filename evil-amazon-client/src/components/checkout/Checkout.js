import React from "react";
import { connect } from "react-redux";
import { getBasket } from "../../redux/reducers/basketReducer";
import "./Checkout.css";
import CheckoutProduct from "./checkoutProduct/CheckoutProduct";
import Subtotal from "./subtotal/Subtotal";

function Checkout({ basket }) {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt="ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/amazoncards/desktop-CBCC-unloggedin-header.png"
        />

        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>

        <div className="checkout__products">
          {basket.map((item, idx) => (
            <CheckoutProduct key={idx} item={item} />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: getBasket(state),
  };
};

export default connect(mapStateToProps)(Checkout);
