import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function truncateString(str, maxLength) {
  if (str && str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* background image */}
      <div className="banner__contents">
        {/* Title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        {/* The ?. is used after the movie object to safely access its properties
         (title, name, original_name). If movie is null or undefined, the code will
          gracefully return undefined instead of throwing an error, preventing your
           application from crashing due to attempting to access properties of a
            non-existent object. */}

        <h1 className="banner__description">
          {" "}
          {truncateString(movie?.overview, 150)}
        </h1>

        {/* Description */}
      </div>

      <div className="fadebottom" />
    </header>
  );
}

export default Banner;
