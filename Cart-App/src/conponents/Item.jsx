import React, { useContext } from "react";
import {cartContext} from "../contexts/CartContext";
import "../App.css";

const Item = (props) => {
  const cart = useContext(cartContext);
  console.log("cart",cart)

  return (
    <div className="main-box">
      <div className="desc-box">
        <h2>{props.name}</h2>
        <h3>Price: {props.price}</h3>
      </div>

      <div className="btn-box">
        <button
          onClick={() => {
            cart.setCartItems([...cart.cartItems,{ name: props.name,price: props.price}])
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Item;
