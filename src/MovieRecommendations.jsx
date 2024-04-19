import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import { fetchMovies } from "./services/movieApi";
import { validateGenre, validateTime, filterMovies } from "./utils";
import './styles.css';

function MovieRecommendations() {
  const [genre, setGenre] = useState("");
  const [time, setTime] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const handleGenreChange = (event) => setGenre(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);

  useEffect(() => {
    fetchMovies()
    .then((data) => setMoviesData(data))
    .catch(error => {
      console.error("Error fetching movies:", error);
      setError("An error occurred while fetching movie data.");
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const validationErrors = [];
    if (!validateGenre(genre)) {
      validationErrors.push("Genre is required and must be a string");
    }
    if (!validateTime(time)) {
      validationErrors.push("Time is required and must be in HH:MM format");
    }

    if (validationErrors.length > 0) {
      setError(validationErrors);
      return;
    }

    try {
      const recommendations = await filterMovies(moviesData, genre, time);
      setRecommendations(recommendations);
      recommendations.length ? setNotFound(false) : setNotFound(true);
    } catch (error) {
      console.error("Error fetching recommendations movies:", error);
      setError("An error occurred while fetching movie recommendations data.");
    }
  };

  return (
    <div className="App">
      <h1>Movie Recommendations</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={handleGenreChange}
        />
        <label htmlFor="time">Time:</label>
        <input type="text" id="time" value={time} onChange={handleTimeChange} />
        <button type="submit">Find Movies</button>
      </form>
      {error && <p><ul> {error?.map((e) => <li className="customListItem error">{e}</li>)} </ul></p>}
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((movie) => (
            <Movie key={movie.name} movie={movie} />
          ))}
        </ul>
      ) : (
        notFound && <p>No movie recommendations found.</p>
      )}
    </div>
  );
}

export default MovieRecommendations;
