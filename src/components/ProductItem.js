import React from "react";
import "./ProductItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/CartSlice";

export default function ProductItem({ item }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div className="productItem">
      <img
        style={{
          width: 200,
          height: 200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={item.image}
      />
      <p>{item.title.length > 30 ? item.title.substr(0, 30) : item.title} </p>
      <p>
        {item.description.length > 60
          ? item.description.substr(0, 60)
          : item.description}
      </p>
      <p>{item.price}</p>

      {cart.some((x) => x.id === item.id) ? (
        <button
          onClick={() => removeItemFromCart(item)}
          className="productItemButton1"
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => addItemToCart(item)}
          className="productItemButton1"
        >
          Add to Cart
        </button>
      )}

      <button className="productItemButton2">Buy Now</button>
    </div>
  ); 
}
