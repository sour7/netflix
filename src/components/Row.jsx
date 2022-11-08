import axios from "axios";
import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchUrl, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((res) => setMovies(res.data.results));
  }, [fetchUrl]);
  // console.log("movies", movies.results);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <p className="text-white font-bold md:text-xl p-4">{title}</p>
      <div className="relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="h-full w-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movies item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
