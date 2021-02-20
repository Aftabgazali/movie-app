import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
function PlayingMovies({ title, image }) {
  return (
    <StyledMovie>
      <img src={image} />
      <h3>{title}</h3>
    </StyledMovie>
  );
}
const StyledMovie = styled(motion.div)`
  min-height: 50vh;
  box-shadow: 0px 0px 30px rgba(1, 180, 228, 0.8);
  overflow: hidden;
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    height: 70vh;
  }
  h3 {
    color: rgb(13, 37, 63);
    text-decoration: none !important;
  }
  p {
    color: white;
    text-decoration: none !important;
  }
  text-align: center;
  border-radius: 2rem;
`;

export default PlayingMovies;
