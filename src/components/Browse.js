import React from "react";
import Header from "./Header";
import useLatestMovies from "../hooks/useLatestMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import { useSelector } from "react-redux";

const Browse = () => {
  useLatestMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularTvSeries();

  return (
    <div>
      <Header />
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    </div>
  );
};

export default Browse;
