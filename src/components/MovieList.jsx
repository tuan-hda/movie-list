import React, { useEffect, useState } from "react";
import "../App.css";
import MovieCard from "./MovieCard";
import mockData from "../MOCK_DATA.json";
import SearchBar from "./SearchBar";

const MovieList = () => {
  const [movieList, setMovieList] = useState();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setMovieList(mockData);
  }, []);

  const filterMovie = () => {
    setMovieList(mockData.filter((movie) => movie.Title.toLowerCase().includes(searchValue.toLowerCase())));
  };

  return (
    <div className='app'>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Movie List
      </h1>

      <SearchBar searchValue={searchValue} handleChange={handleChange} filterMovie={filterMovie} />

      <div className='movie-list'>
        {movieList?.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
