import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTvSeries } from "../utils/tvSeriesSlice";

const usePopularTvSeries = () => {
  const dispatch = useDispatch();

  const getPopularTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const popularTvSeries = await data.json();
    dispatch(addPopularTvSeries(popularTvSeries.results));
  };

  useEffect(() => {
    getPopularTvSeries();
  }, []);
};

export default usePopularTvSeries;
