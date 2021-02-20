import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import GlobalStyles from "./GlobalStyles";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDetails } from "../Actions/movieDetailAction";
function Movie({ name, id, released, image }) {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(fetchDetails(id));
  };
  return (
    <Link to={`/movie/${id}`}>
      <StyledMovie onClick={loadDetailHandler}>
        <img src={`https://image.tmdb.org/t/p/original${image}`} />
        <h3>{name}</h3>
        <p>Released Date: {released}</p>
      </StyledMovie>
    </Link>
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
export default Movie;
