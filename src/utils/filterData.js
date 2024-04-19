export const filterMovies = (movies, genre, time) => {
  const [hours, minutes] = time.split(":").map(Number);
  const newDate = configureDate(hours, minutes);
  const minTime = newDate.setTime(newDate.getTime() + 30 * 60 * 1000);
  return movies
    .filter((movie) => {
      delete movie.showingAt;
      return movie.genres.some(g => g.toLowerCase() === genre.toLowerCase());
    })
    .filter((movie) => {
      const showtimes = movie.showings.map((showing) => {
        const [showHours, showMinutes] = showing.split(":").map(Number);
        const newDate = configureDate(showHours, showMinutes);
        return newDate.getTime();
      });

      const ss = showtimes.filter((showtime) => showtime >= minTime);
      const result = showtimes.find((showtime) => showtime >= minTime);
      movie.showingAt = result;
      return movie;
    })
    .filter((movie) => {
      return movie.showingAt;
    })
    .sort((a, b) => b.rating - a.rating);
};

const configureDate = (hh,mm) => {
  const currentDate = new Date();
  return (
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      hh,
      mm
    )
  )
}
