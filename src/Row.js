import React, { useEffect, useState } from "react";
import axios from "./axios"; // use the custom axios made
import "./row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //when the row loads we will make the request to the tmdb to get the movies
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
      // request is made to the below url
      // http://api.themoviedb.org/3/trending/all/week?api_key=75f048c63819009bf5fda243344f1a5e&language=en-US
    }
    fetchData();
  }, [props.fetchUrl]); // if [], run once when the row loads, dont ren again, if[movies], it will run whenever the movies changes

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row__posts">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
