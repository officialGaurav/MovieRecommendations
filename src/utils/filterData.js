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
  console.log("newDate", JSON.stringify(newDate));
  return movies
    .filter((movie) => {
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
      console.log("result", result);
      movie.showingsAt = result;
      return movie;
    })
    .sort((a, b) => b.rating - a.rating);
};
