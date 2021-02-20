import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { searchMovies, loadMovies } from "../Actions/movieAction";
function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const buttonHandler = (e) => {
    e.preventDefault();
    dispatch(searchMovies(textInput));
    dispatch(loadMovies());
    setTextInput("");
  };
  return (
    <StyledNav>
      <h2>🔎 Search Movie 🔎</h2>
      <form>
        <input value={textInput} onChange={inputHandler} type="text"></input>
        <button onClick={buttonHandler} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
}
const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  min-height: 30vh;
  text-align: center;
  input {
    width: 40%;
    padding: 0.5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    outline: none;
  }
  h2 {
    padding-right: 2rem;
    color: white;
  }
  button {
    border: none;
    outline: none;
    font-size: 1.3rem;
    padding: 0.5rem;
    color: white;
    border-radius: 1rem;
    margin-left: 1rem;
    background: rgb(13, 37, 63);
  }
`;

export default Nav;
