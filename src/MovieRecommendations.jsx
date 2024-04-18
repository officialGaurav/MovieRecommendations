import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import { fetchMovies } from "./services/movieApi";
import { validateGenre, validateTime, filterMovies } from "./utils";

function MovieRecommendations() {
  const [genre, setGenre] = useState("");
  const [time, setTime] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState(null);

  const handleGenreChange = (event) => setGenre(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);

  useEffect(() => {
    try {
      fetchMovies().then((data) => setMoviesData(data));
;    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("An error occurred while fetching movie data.");
    }
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
      setError(validationErrors.join("\n"));
      return;
    }

    try {
      const recommendations = await filterMovies(moviesData, genre, time);
      setRecommendations(recommendations);
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
      {error && <p className="error">{error}</p>}
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((movie) => (
            <Movie key={movie.name} movie={movie} />
          ))}
        </ul>
      ) : (
        <p>No movie recommendations found.</p>
      )}
    </div>
  );
}

export default MovieRecommendations;
