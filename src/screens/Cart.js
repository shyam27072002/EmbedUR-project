import React from "react";
import "./Cart.css";
import Header from "../components/Header";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';



function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.map((item) => item.price * item.quantity).reduce((curr,prev) => curr + prev,0);
  const orders =[...cart];
  console.log(total);
  const charges =30;
  const dispatch = useDispatch();
  const incrementItemQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decrementItemQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

 
  return (
    <>
      <Header />
      <div className="cart">
        {/* left part */}
        <div className="cartLeft">
          {cart.map((item, index) => (
            <div className="cartContainer">
              {/* image */}
              <div>
                <img src={item.image} style={{ width: 100, height: 100 }} />
              </div>
              {/* describe */}
              <div className="cartDescription">
                <p>
                  {item.title.length > 60
                    ? item.title.substr(0, 60)
                    : item.title}
                </p>
                <p style={{ marginTop: 8 }}>
                  {item.description.length > 80
                    ? item.description.substr(0, 80)
                    : item.description}
                </p>
                <p style={{ marginTop: 8 }}>{item.price}</p>
              </div>
              {/* buttons */}
              <div className="cartButtonContainer">
                <div className="cartButtons">
                  <div
                    onClick={() => decrementItemQuantity(item)}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </div>
                  <div>{item.quantity}</div>
                  <div
                    onClick={() => incrementItemQuantity(item)}
                    style={{ cursor: "pointer" }}
                  >
                    +
                  </div>
                </div>
                <button
                  onClick={() => removeItemFromCart(item)}
                  className="cartButton"
                >
                  {" "}
                  Remove Item
                </button>
                <h5 style={{ marginTop: 7 }}>{item.price * item.quantity}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* right part */}
        {total ===  0 ? (
            <div>
                YOUR CART IS EMPTY
            </div>
        ) : (
            <div className="cartRight">
            {/*location info */}
            <div className="cartRightLocationContainer">
              <div className="cartRightLocation">
                <LocationOnIcon style={{color:"gray"}} />
                <div className="cartRightDescription">
                  <p className="cartRightText">Select your location</p>
                  <p className="cartRightText">
                    Please Select a location so we find you
                  </p>
                  <button className="cartRightButton">Select Location</button>
                </div>
              </div>
              <div className="cartRightLocation">
                <LocationOnIcon style={{color:"gray"}}/>
                <div className="cartRightDescription">
                  <p className="cartRightText">Choose your saved location</p>
                  <button className="cartRightButton">Choose Location</button>
                </div>
              </div>
            </div>
            {/*cupon info */}
            <div className="cartRightCoupen">
            <ConfirmationNumberIcon  style={{color: "gray"}}/>
            <div  style={{marginLeft:10}}>
            <h4 className="cartRightCouponText">Select / Apply Coupon</h4>
            <p className="cartRightCouponsmall"> Apply coupons to avail offers on the product</p>
            </div>
            </div>
            {/*container for checkout */}
  
            
            <div className="cartRightCheckout">
              <div className="cartRightCheckoutpart">
                  <h5>Total Price</h5>
                  <h5>{total}</h5>
              </div>
  
              <div className="cartRightCheckoutpart">
                  <h5>Discount</h5>
                  <h5>-</h5>
              </div>
  
              <div className="cartRightCheckoutpart">
                  <h5>charges</h5>
                  <h5>{charges}</h5>
              </div>
  
              <div className="cartRightCheckoutpart">
                  <h3>Grand Total</h3>
                  <h3>{total + 30}</h3>
              </div>
  
  
            </div>
            <button  className="cartRightCheckoutButton">Place Order</button>
          </div>

        )}
       
      </div>
      
    </>
  );
}

export default Cart;
