import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tvseries = useSelector((store) => store.tvseries);
  console.log({ tvseries });
  return (
    movies.latestMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MoviesList title={"Popular"} movies={movies.popularMovies} />
          <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MoviesList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          <MoviesList
            title={"Populat TV Series"}
            movies={tvseries.popularTvSeries}
          />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
