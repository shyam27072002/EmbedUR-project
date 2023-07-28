import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const cart = useSelector((state) => state.cart.cart);
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate("/cart")
    }
  return (
    <>
    <div className="header">
      {/* image logo */}
      <div>
        <img
          style={{ width: 120, height: 40, marginTop: 10 }}
          className="image"
          src="https://static.vecteezy.com/system/resources/thumbnails/006/624/464/small_2x/shopping-concept-with-bags-background-illustration-eps-10-free-vector.jpg"
        />
      </div>
      {/* search  bar */}
      <div className="headerInputCointainer">
        <input
          type="text"
          className="headerInput"
          placeholder="search items for products"
        />
        <SearchIcon style={{ color: "white", marginLeft: 4, marginTop: 2 }} />
      </div>
      <div>
        <h4 className="headerText">Hello makkale</h4>
        <h4 className="headerText"> Accounts & List</h4>
      </div>
      <div>
        <h4 className="headerText">REturns</h4>
        <h4 className="headerText"> Orders</h4>
      </div>
      <div onClick={navigateToCart} style={{ position: "relative" ,cursor:"pointer" }}>
        <h4>
          <ShoppingCartIcon style={{ color: "white" }} />
        </h4>
        <span
          style={{
            position: "absolute",
            left: 14,
            right: 14,
            backgroundColor: "white",
            width: 14,
            height: 14,
            borderRadius: 7,
            fontSize: 12,
            fontWeight: 400,
            top: 0,
            textAlign: "center",
          }}
        >
          {cart.length}
        </span>
      </div>
      {/* place and number */}
      <div>
        <h4 className="headerText">India</h4>
        <h4 className="headerText"> 2345667433</h4>
      </div>
    </div>
    {/* botttom part */}
    <div className="headerBottom">
        <MenuIcon style={{color:'white'}}/>
        <p className="headerBottomText">Healthy Products</p>
        <p className="headerBottomText">sell</p>
        <p className="headerBottomText">lifeStyle</p>
        <p className="headerBottomText">Buy</p>
        <p className="headerBottomText">cloths</p>
        <p className="headerBottomText">super sales</p>
        <p className="headerBottomText">trending</p>

    </div>
    </>
  );
}
