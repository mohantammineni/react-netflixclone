import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MoviePopup from "./MoviePopup";

const MoviesList = ({ title, movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scroll-container">
        <div className="flex">
          {movies?.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
              style={{ cursor: "pointer" }}
            >
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
      {selectedMovie && (
        <MoviePopup movie={selectedMovie} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default MoviesList;
