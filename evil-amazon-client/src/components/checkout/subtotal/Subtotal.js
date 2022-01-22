import React from "react";
import CurrencyFormat from "react-currency-format";
import { connect, useSelector } from "react-redux";
import { getCount, getSubtotal } from "../../../redux/reducers/basketReducer";
import "./Subtotal.css";

const Subtotal = ({ count, subtotal }) => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({count} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value={subtotal}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"€"}
        decimalScale={2}
      />
      <button className="amazon-btn" disabled={!count}>
        Procced to checkout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: getCount(state),
    subtotal: getSubtotal(state),
  };
};

export default connect(mapStateToProps)(Subtotal);
