import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { MdDelete } from "react-icons/md";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  //   useEffect(() => {
  //     onSnapshot(
  //       doc(db, "users", `${user?.email}`, (doc) => {
  //         console.log("heelo", doc.data());
  //         setMovies(doc.data()?.savedMovies);
  //       })
  //     );
  //   }, []);
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      console.log("Current data: ", doc.data()?.savedMovies);
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);
  //   console.log("movies", movies);
  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (id) => {
    try {
      const result = movies.filter((item) => item.id !== id);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-[50vh] p-4">
      <p className="text-white font-bold md:text-xl p-4">MY SHOWS </p>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="h-full w-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <div className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                <p className="white-space-normal text-sm md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                <div
                  className="absolute top-4 left-5 text-gray-300 text-xl "
                  onClick={() => deleteShow(item.id)}
                >
                  <MdDelete />
                </div>
                <p className="absolute top-4 right-5 text-gray-300">
                  {item.ratings}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedShows;
