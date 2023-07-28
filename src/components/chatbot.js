import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ChatMessage from "./ChatMessage";
import { analyze } from "../utils";
import logo from "../components/bot.gif"
import "./chat.css"
import Header from "./Header";
import { useSelector } from "react-redux";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "How can i call you ? ",
    },
  ]);
  const [text,setText] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.map((item) => item.price * item.quantity).reduce((curr,prev) => curr + prev,0);
  const orders =[...cart];
  console.log(total);
  const onSend = () => {
    let list = [...messages, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text,cart,total);
      list = [...list , { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: 'HI '+text,
        },
        {
          message: "How can i help you ?",
        },
      ];
    }
    setMessages(list);
    setText("");
    setTimeout(() => {
      document.querySelector("#copyright").scrollIntoView();},1);
  };
 
  return (
    <div>
      <Header />
      <div className="d-flex align-items-center justify-content-center">
        <img
          src={logo}
          alt="logo"
          height={'120em'}
          width={'auto'}
        />
        <h1 className="text-primary">ChatBot</h1>
      </div>
      <div className="chat-message">
        {messages.length > 0 &&
          messages.map((data) => <ChatMessage {...data} />)}
        <div className="d-flex mt-2">
          <input
            type="test"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="sendButton" variant="primary" onClick={onSend}>
            send
          </button>
        </div>
        <div id="copyright">for enquiry contact shyamramesh2002@gmail.com</div>
      </div>
    </div>
  );
}
