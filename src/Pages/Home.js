import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../components/Movies";
import styled from "styled-components";
import { motion } from "framer-motion";
import MovieDetails from "../components/MovieDetails";
import NowPlayingMovies from "../components/NowPlayingMovies";
import { useLocation } from "react-router-dom";
import { loadMovies } from "../Actions/movieAction";
import { Link } from "react-router-dom";
function Home() {
  const loc = useLocation();
  const pathId = loc.pathname.split("/")[2];

  // to send the data from url/api to the state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);
  // to fetch the data from the state.
  // since our movies object contains 3 state variable popular,upcoming and topRated
  const { popular, topRated, upcoming, searched } = useSelector(
    (state) => state.movies
  );

  return (
    <MovieList>
      {pathId && <MovieDetails />}
      {searched && (
        <div>
          <h2>Searched Movies</h2>
          <Movie>
            {searched &&
              searched.map((data) => (
                <Movies
                  name={data.title}
                  released={data.release_date}
                  id={data.id}
                  image={data.poster_path}
                />
              ))}
          </Movie>
        </div>
      )}
      <NowPlayingMovies />
      <h2>Upcoming Movies</h2>
      <Movie>
        {upcoming &&
          upcoming.map((data) => (
            <Movies
              name={data.title}
              released={data.release_date}
              id={data.id}
              image={data.poster_path}
            />
          ))}
      </Movie>

      <h2>Popular Movies</h2>
      <Movie>
        {popular &&
          popular.map((data) => (
            <Movies
              name={data.title}
              released={data.release_date}
              id={data.id}
              image={data.poster_path}
            />
          ))}
      </Movie>
      <h2>Top Rated Movies</h2>
      <Movie>
        {topRated &&
          topRated.map((data) => (
            <Movies
              name={data.title}
              released={data.release_date}
              id={data.id}
              image={data.poster_path}
            />
          ))}
      </Movie>
    </MovieList>
  );
}
const MovieList = styled(motion.div)`
  padding: 0rem 4rem;
  h2 {
    padding: 4rem 0rem;
    text-decoration: none !important;
    color: white;
  }
`;
const Movie = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-gap: 2rem;
`;
export default Home;
