import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const MoviePopup = ({ movie, onClose }) => {
  if (!movie) return null;

  const backdropUrl = `${CDN_IMG_URL}${movie.backdrop_path}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full overflow-hidden">
        <div
          className="relative"
          style={{
            backgroundImage: `url(${backdropUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-6 backdrop-brightness-50 backdrop-blur-lg text-white">
            <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
            <p className="text-sm mb-2">
              Original Title: {movie.original_title}
            </p>
            <p className="text-sm mb-2">Release Date: {movie.release_date}</p>
            <p className="text-sm mb-2">
              Rating: {movie.vote_average} ({movie.vote_count} votes)
            </p>
            <p className="text-sm mb-2">Popularity: {movie.popularity}</p>
            <p className="text-sm mb-4">
              Language: {movie.original_language.toUpperCase()}
            </p>
            <p className="text-sm mb-4">Genres: {movie.genre_ids.join(", ")}</p>
          </div>
        </div>
        <div className="p-6 bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-sm text-gray-700">{movie.overview}</p>
          <button
            onClick={onClose}
            className="mt-6 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;
