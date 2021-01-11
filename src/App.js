import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home.component";
import Series from "./pages/series.component";
import Movies from "./pages/movies.component";
import Header from "./components/header/header.component";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/arjunuvladimer/react-coding-challenge/master/feed/sample.json"
    )
      .then((response) => response.json())
      .then((list) => setList(list.entries));
  }, []);
  // console.log(JSON.stringify(list));
  const series = list.filter((item) => item.programType === "series");
  // console.log(JSON.stringify(series));
  const movies = list.filter((item) => item.programType === "movie");

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/series" render={() => <Series series={series} />} />
        <Route path="/movies" render={() => <Movies movies={movies} />} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
