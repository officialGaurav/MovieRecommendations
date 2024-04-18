import React from "react";
import { convertTimeStampToReadableFormat } from "../utils/dateTime";

const Movie = ({ movie }) => {
  return (
    <li key={movie.name}>
      <h3>{movie.name}</h3>
      <p>Rating: {movie.rating}</p>
      <p>Showing at {convertTimeStampToReadableFormat(movie.showingsAt)}</p>
    </li>
  );
};

export default Movie;
