import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const HeroBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId?.key +
          "?autoplay=1&mute=1&loop=1&color=white&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default HeroBackground;
