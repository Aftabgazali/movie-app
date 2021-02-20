import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import PlayingMovies from "./PlayingMovies";
function NowPlayingMovies() {
  const { popular, topRated, upcoming, searched, nowPlaying } = useSelector(
    (state) => state.movies
  );
  return (
    <StyledNowPlaying>
      <h2>Now Playing Movies</h2>
      <StyleMovie>
        {nowPlaying &&
          nowPlaying.map((data) => (
            <PlayingMovies
              title={data.title}
              image={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
            />
          ))}
      </StyleMovie>
    </StyledNowPlaying>
  );
}
const StyledNowPlaying = styled(motion.div)`
  padding: 0rem 4rem;
  h2 {
    padding: 4rem 0rem;
    text-decoration: none !important;
    color: white;
  }
`;
const StyleMovie = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-gap: 2rem;
`;

export default NowPlayingMovies;
