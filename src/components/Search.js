import React, { useState } from "react";
import "../styles.css";
import Data from "../data";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
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
      <div className="welcome"></div>
      <input
        type="text"
        id="search-second"
        onChange={searchName}
        placeholder="what is Your favorit Movie?"
      />
      <div className="row" id="row-card">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="col-md-6 mb-6" id="card-col">
            <div id="card">
              <img
                src={movie.image}
                alt={movie.name}
                className="card-img-top"
              />
              <div className="card-body" id="card-body">
                <Link to={`/details?id=${encodeURIComponent(index)}`} className="card-title" id="title">{movie.name}</Link>
                {/* <p className="card-text">{movie.details}</p> */}
                {/* <p className="card-text">Eposides:{movie.episodes}</p> */}
                {/* <p className="card-text">Year:{movie.year}</p> */}
                {/* <Link to='DetailsCard' className='btn btn-primary'>details</Link> */}
                {/* <Link
                  to={`/details?id=${encodeURIComponent(index)}`}
                  className="btn btn-primary"
                  id="details"
                >
                  Details
                </Link> */}
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
