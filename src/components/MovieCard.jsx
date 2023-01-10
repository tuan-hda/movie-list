import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className='movie'>
      <img
        src={
          movie.Poster === "N/A"
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            : movie.Poster
        }
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
    </Link>
  );
};

export default MovieCard;
