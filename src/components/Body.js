import React, { useEffect, useState } from "react";
import "./Body.css";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import store from "../store"
import { useNavigate } from "react-router-dom";
function Body() {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state)=> state.cart.cart);
  console.log(cart)
  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    fetchProducts();
  }, []);
  const navigate = useNavigate();
  const ShowBot = (item) =>{
    setTimeout(() => {
        navigate("/bot" ,{
            state:{
                order:cart
            }
        })
    },1);}

  return (
  <div className="body">
     <button onClick={ShowBot} className="chatButton"> <img style={{height:150, width:150,borderRadius:100}} src="https://thumbs.dreamstime.com/b/chat-bot-icon-background-virtual-assistant-website-chat-bot-concept-customer-service-vector-chat-bot-icon-background-125190808.jpg" /></button>
    <div className="bodyItems">
        {products.map((item,index) =>(
            <ProductItem item={item} key={item.id} />
            

        ))}
       
    </div>
    
  </div>
) }

export default Body;
