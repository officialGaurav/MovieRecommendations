//import axios from "axios";

const API_URL = "https://pastebin.com/raw/cVyp3McN";

export const fetchMovies = async () => {
  try {
    //const response = await axios.get(API_URL);
    const response = [
      {
      "name": "Moonlight",
      "rating": 98,
      "genres": [
      "Drama"
      ],
      "showings": [
      "18:30:00+11:00",
      "20:30:00+11:00"
      ]
      },
      {
      "name": "Zootopia",
      "rating": 92,
      "genres": [
      "Action & Adventure",
      "Animation",
      "Comedy"
      ],
      "showings": [
      "19:00:00+11:00",
      "21:00:00+11:00"
      ]
      },
      {
      "name": "The Martian",
      "rating": 92,
      "genres": [
      "Science Fiction & Fantasy"
      ],
      "showings": [
      "17:30:00+11:00",
      "19:30:00+11:00"
      ]
      },
      {
      "name": "Shaun The Sheep",
      "rating": 80,
      "genres": [
      "Animation",
      "Comedy"
      ],
      "showings": [
      "19:00:00+11:00"
      ]
      }
      ]
    console.log("response", response);
    return response;
  } catch (error) {
    throw error;
  }
};

//export default fetchMovies;
