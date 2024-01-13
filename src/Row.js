import React from "react";

import axios from "./axios";
import "./Row.css";
// this is a component
import { useState, useEffect } from "react";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    //if [] then run only once when the row loads

    //if [variable] then run when row loads and run when variable value changes
    async function fetchData() {
      //it take some time in fetching from tmdb

      //axios gives instance and remaining from prop fetchUrl passed from Row
      const request = await axios.get(fetchUrl);
      // we are gonna set that data in movies

      setMovies(request.data.results);
      return request;
    }

    console.log(movies); // created using useState

    fetchData();
    //eternal variable in useEffect ust be put in like [fetchUrl] as it

    //is dependency in this way useEffect refires the code when fetchUrl

    //changes
  }, [fetchUrl]); //The effect will re-run if any of the variables in
  //  the dependency array change between renders.

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
