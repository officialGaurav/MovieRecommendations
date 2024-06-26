import React from "react";
import { convertTimeStampToReadableFormat } from "../utils/dateTime";

const Movie = ({ movie }) => {
  return movie.showingAt && (
    <li key={movie.name}>
      <h3>{movie.name}</h3>
      <p>Rating: {movie.rating}</p>
      <p>Showing at {convertTimeStampToReadableFormat(movie.showingAt)}</p>
    </li>
  );
};

export default Movie;
