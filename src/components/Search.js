import React, { useState } from "react";
import "../styles.css";
import Data from "../data";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import welcome from '../assets/movie.png'
function Search() {
  const [movieName, setMovieName] = useState("");
  const searchName = (e) => {
    setMovieName(e.target.value);
  };
  const filteredMovies = Data.filter((movie) => {
    const { name } = movie;
    return name.toLowerCase().includes(movieName.toLowerCase());
  });
  return (
    <>
      <Header/>
      <div id="main-content">
      <div className="welcome">
      </div> <img src={welcome} alt="welcome" id="welcome-imge" />
      <input
        type="text"
        id="search-second"
        onChange={searchName}
        placeholder="What is Your favorite Movie ?"
      />
      <div className="row" id="row-card">
      <h3 id="majd">The Most Popular</h3>
        {filteredMovies.map((movie, index) => (
          <div key={index} className="col-md-4 mb-4" id="card-col">
            <div id="card">
              <img
                src={movie.image}
                alt={movie.name}
                className="card-img-top movie-image"
              />
              <div className="card-body" id="card-body">
                <Link to={`/details?id=${encodeURIComponent(index)}`} className="card-title" id="title">{movie.name}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
    
  );
}
export default Search;
