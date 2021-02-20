import react, { useEffect } from "react";
import Home from "./Pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";
import { loadMovies } from "./Actions/movieAction";
import { useDispatch } from "react-redux";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/movie/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
