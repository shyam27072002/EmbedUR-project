import React from "react";
import Chatbot from "./components/chatbot";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

import store from "./store";
import { Provider } from "react-redux";
import { Routes } from "react-router-dom";
import Home from "./screens/Home";

import Cart from "./screens/Cart";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bot" element={<Chatbot />} />
      </Routes>
      </Provider>
    </Router>
  );
}

export default App;
