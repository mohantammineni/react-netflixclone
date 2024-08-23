import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addLatestMovies } from "../utils/moviesSlice";

const useLatestMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.latestMovies);
  const getLatestMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const latestMovies = await data.json();
    dispatch(addLatestMovies(latestMovies.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getLatestMovies();
  }, []);
};

export default useLatestMovies;
