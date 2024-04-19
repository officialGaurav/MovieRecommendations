/* The provided URL (https://pastebin.com/raw/cVyp3McN) doesn't include the necessary CORS headers to allow cross-origin requests from localhost
*/

export const fetchMovies = async () => {
  
  return fetch('src/data/MovieData.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
    throw new Error('There was a problem fetching the data:', error);
  });
};