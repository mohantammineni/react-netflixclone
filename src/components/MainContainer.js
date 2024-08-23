import React from "react";
import { useSelector } from "react-redux";
import HeroTitle from "./HeroTitle";
import HeroBackground from "./HeroBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.latestMovies);
  if (!movies) return;
  const heroMovie = movies[11];
  const { original_title, overview, id } = heroMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <HeroTitle title={original_title} overview={overview} />
      <HeroBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
