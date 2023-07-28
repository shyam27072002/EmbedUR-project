import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Body from "../components/Body";
import { Provider } from "react-redux";
import CarouselComponent from "../components/CarouselComponent";
export default function Home() {
  return (
    <div className="home">
      <Header />
      {/* Carousel Banner */}
      <CarouselComponent />
      <Body />
      
        
      
    </div>
  );
}
