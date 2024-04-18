export const filterMovies = (movies, genre, time) => {
  const [hours, minutes] = time.split(":").map(Number);
  const currentDate = new Date();
  const newDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    hours,
    minutes
  );
  const minTime = newDate.setTime(newDate.getTime() + 30 * 60 * 1000);
  return movies
    .filter((movie) => {
      delete movie.showingAt;
      return movie.genres.includes(genre);
    })
    .filter((movie) => {
      const showingAt = [];
      const showtimes = movie.showings.map((showing) => {
        const [showHours, showMinutes] = showing.split(":").map(Number);
        const currentDate = new Date();
        const newDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          showHours,
          showMinutes
        );
        return newDate.getTime();
      });

      const ss = showtimes.filter((showtime) => showtime >= minTime);
      showingAt.push(ss);
      const result = showtimes.find((showtime) => showtime >= minTime);
      movie.showingAt = result;
      return movie;
    })
    .filter((movie) => {
      return movie.showingAt;
    })
    .sort((a, b) => b.rating - a.rating);
};
