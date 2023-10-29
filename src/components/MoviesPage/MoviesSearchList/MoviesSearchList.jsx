// Import necessary modules and components
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/movies-api'; // Import a function to fetch movies
import MoviesList from 'components/MoviesList/MoviesList'; // Import the MoviesList component
import MoviesListItem from '../../MoviesListItem/MoviesListItem'; // Import the MoviesListItem component
import normalizedData from '../../services/normalized-data'; // Import a function for normalizing data
import { toast } from 'react-toastify'; // Import the toast notification library

// Define the 'MoviesSearchList' component as the default export
export default function MoviesSearchList({ searchQuery }) {
  // Define state to store the list of movies
  const [movies, setMovies] = useState([]);

  // Effect to fetch and display movies based on the search query
  useEffect(() => {
    if (searchQuery === '') {
      return; // Do nothing if the search query is empty
    }

    // Fetch movies based on the search query
    fetchMovies(searchQuery).then(data => {
      if (data.total_results > 0) {
        // If there are search results, normalize and set the movie data
        setMovies(normalizedData(data.results));
      } else {
        // If no results, clear the list and show an error message using toast
        setMovies([]);
        return toast.error(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      }
    });
  }, [searchQuery]);

  // Return the MoviesList component with MoviesListItem to display the movies
  return (
    <MoviesList>
      <MoviesListItem data={movies} />
    </MoviesList>
  );
}

// Define the propTypes for the 'MoviesSearchList' component
MoviesSearchList.propTypes = {
  searchQuery: PropTypes.string,
};

// In summary, this code defines a React component called MoviesSearchList.
// This component takes a searchQuery prop and fetches a list of movies based on the query.
// If there are search results, it normalizes the data and displays the movies.
// If there are no results, it shows an error message using the toast library.
// The component uses the MoviesList and MoviesListItem components to render the list of movies
