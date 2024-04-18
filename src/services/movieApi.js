//const API_URL = "https://pastebin.com/raw/cVyp3McN";

export const fetchMovies = async () => {
  //return await axios.get(API_URL);
  return fetch('src/services/MovieData.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
};