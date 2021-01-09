import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home.component";
import Series from "./components/series.component";
import Movies from "./components/movies.component";
import Header from "./components/header.component";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/HopperKremer/react-coding-challenge/master/feed/sample.json"
    )
      .then((response) => response.json())
      .then((list) => setList(list.entries));
  }, []);
  console.log(JSON.stringify(list));
  const series = list.filter((item) => item.programType === "series");
  console.log(JSON.stringify(series));
  const movies = list.filter((item) => item.programType === "movie");

  return (
    <Switch>
      {/* <Header /> */}
      {/* <Link className="option" exact to="/">
          Home
        </Link>
        <br />
        <Link className="option" exact to="/series">
          Series
        </Link>
        <Link className="option" exact to="/movies">
          Movies
        </Link> */}
      <Route path="/series" render={() => <Series series={series} />} />
      <Route path="/movies" render={() => <Movies movies={movies} />} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
