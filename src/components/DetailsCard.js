import React from "react";
import { useLocation } from "react-router-dom";
import '../details.css'
import Data from "../data";
import Header from "./Header";
import Footer from "./Footer";
function DetailsCard() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  return (
    <>
      <Header/>
    <div id="details-card">
      <img src={Data[id].image} alt="" />
      <div id="text"
      ><h2>{Data[id].name}</h2>
      <p><span id='desc'>Description: </span>{Data[id].details}</p>
      <p><span id='year'>Year: </span>{Data[id].year}</p>
      <button id="watch">Watch Now</button>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}
export default DetailsCard;
