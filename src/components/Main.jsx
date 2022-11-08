import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../request";
const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);
  // console.log("movies", movies);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  // console.log("movie", movie);
  return (
    <div className="w-full h-[550px] text-white border-yellow-300 border-2 ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.original_title}
        />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl">{movie?.original_title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 border-gray-300 text-black px-5 py-2">
              Play Now
            </button>
            <button className="border  border-gray-300 text-white px-5 py-2 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-slate-400 text-sm">
            Released Date: {movie?.release_date}
          </p>
          <p className="text-slate-400 text-sm">
            Ratings: {movie?.vote_average}
          </p>
          <p className="w-full md:w-[70%] lg:w-[35%]">
            {movie?.overview?.substring(0, 150)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
