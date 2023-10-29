// Import the 'useState' and 'useEffect' hooks from React to manage state and perform side effects.
import { useState, useEffect } from 'react';

// Import the 'MoviesList' component from the 'components/MoviesList/MoviesList' module.
import MoviesList from 'components/MoviesList/MoviesList';

// Import the 'MoviesListItem' component from the relative path '../../MoviesListItem/MoviesListItem'.
import MoviesListItem from '../../MoviesListItem/MoviesListItem';

// Import the 'normalizedData' function from the '../../services/normalized-data' module.
import normalizedData from '../../services/normalized-data';

// Import the 'fetchTrendingMovies' function from the '../../services/movies-api' module.
import { fetchTrendingMovies } from '../../services/movies-api';

// Define and export the 'TrendingMovies' component as the default export of this module.
export default function TrendingMovies() {
  // Define a 'movies' state variable and a 'setMovies' function to manage a list of movies.
  const [movies, setMovies] = useState([]);

  // Use the 'useEffect' hook to perform side effects when the component is mounted.
  useEffect(() => {
    // Call the 'fetchTrendingMovies' function to fetch trending movie data from an external source.
    fetchTrendingMovies().then(data => {
      // Normalize and set the movie data in the 'movies' state variable.
      setMovies(normalizedData(data.results));
    });
  }, []);

  // Return JSX that represents the rendering of the 'TrendingMovies' component.
  return (
    <MoviesList>
      {/* Render the 'MoviesListItem' component with the 'movies' data as a prop. */}
      <MoviesListItem data={movies} />
    </MoviesList>
  );
}
// In summary, this component fetches and displays trending movies using React hooks for state and side effects management.
