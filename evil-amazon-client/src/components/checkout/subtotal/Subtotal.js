import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { getCount } from "../../../redux/reducers/basketReducer";
import "./Subtotal.css";

const Subtotal = () => {
  const count = useSelector(getCount);
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
        value={42.99}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"€"}
        decimalScale={2}
      />
      <button className="amazon-btn">Procced to checkout</button>
    </div>
  );
};

export default Subtotal;
