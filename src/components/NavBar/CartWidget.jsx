import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


function CartWidget() {
  const miContext = useContext(cartContext);

  return (
    <div>
      <Link to="/cart">
        🛒
      </Link>
      <span>{miContext.itemsInCart()}</span>
    </div>
  );
}

export default CartWidget;