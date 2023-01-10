import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};
// BrowserRouter, Routes, Route

export default App;
