Movie Recommendations React App with Validation and Testing
This project provides a React application for recommending movies based on genre and showtime availability. It incorporates user input validation and unit tests for a robust and maintainable solution.

Functionality
The program takes two inputs:

genre (string): The desired genre of the movie.
time (string): The current time in the format "HH:MM".

Features:
Recommends movies based on user-specified genre.
- Filters recommendations based on showtimes at least 30 minutes after the user-provided time.
- Sorts recommendations by rating (highest-rated first).
- Displays validation errors for empty genre or invalid time format.
- Includes unit tests for the core functionality.

Technologies:
React
@testing-library/react (for testing React components)
@testing-library/jest-dom (for additional matchers in Jest)

Project Structure:
```
movie-recommendations/
  ├── src/
  │   ├── MovieRecommendations.js/
  │   ├── components/
  │   │   └── Movie.jsx/
  │   ├── services/
  │   │   └── movieApi.js/
  │   ├── utils/
  │   │   └── dateTime.js/
  │   │   └── filterData.js/
  │   │   └── index.js/
  │   │   └── validation.js/
  │   └── MovieRecommendations.test.js/
  ├── package.json/
  └── README.md
```


Explanation:
- MovieRecommendations.jsx: This file is the main component of the React application. It fetches movie data, handles user input, displays recommendations, and uses components for better organization.
- Movie.jsx: This component displays information about a single recommended movie.
- movieApi.js: This file handles fetching movie data from the provided API endpoint.
- validation.js: This file contains utility functions for validating user input.
- filterData.js:  This file likely contains functions related to filtering a list of movies based on specific criteria. 
  - Functions to filter movies by genre and time.
  - Logic to handle filter.
  - The ability to search movies by genre and time.
- datetime.js: This file contains utility function of datatime
- index.js: This file contains export all utility using one file.
- MovieRecommendations.test.js: This file contains unit tests for the App component.
  
Running the Application:
- Clone or download the project
- Install dependencies using 
```
npm install
```
- Start the development server using 
```
npm run dev
```
- Test using 
```
npm test
```

Enter a genre in the "Genre" field.
Enter a time in HH:MM format (24-hour clock) in the "Time" field.
Click the "Find Movies" button.
The application will display recommended movies matching the criteria, sorted by rating.
If no movies match the criteria, a message indicating "no movie recommendations" will be displayed.
