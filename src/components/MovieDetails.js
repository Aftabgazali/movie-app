import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
function MovieDetails() {
  const { detail, images, similar } = useSelector((state) => state.details);
  return (
    <CardShadow>
      <Detail>
        <h2>{detail.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} />
        <p>{detail.overview}</p>
        <h3>Screen Shots</h3>
        {images.data && (
          <Gallery>
            {images.data.backdrops.map((data) => (
              <img src={`https://image.tmdb.org/t/p/w300${data.file_path}`} />
            ))}
          </Gallery>
        )}
        <h2>Similar Movies</h2>
        {similar && (
          <Gallery>
            {similar.map((data) => (
              <img src={`https://image.tmdb.org/t/p/w400${data.poster_path}`} />
            ))}
          </Gallery>
        )}
      </Detail>
    </CardShadow>
  );
}
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 1rem;
`;
const Detail = styled(motion.div)`
  width: 80%;
  background: white;
  min-height: 100vh;
  padding: 2rem 20rem;
  left: 10%;
  position: absolute;
  color: black;
  img {
    width: 100%;
  }
  p,
  h2,
  h3 {
    color: white;
  }
  h2,
  h3 {
    text-aling: center;
  }
  background: #080e29;
`;
const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 2rem;
  h2 {
    text-align: center;
  }
`;

export default MovieDetails;
