// Import necessary React hooks and components
import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movies-api'; // Import a function to fetch movie details
import { genresNames } from '../services/genres-names'; // Import a list of genre names
import { Link } from 'react-router-dom'; // Import a component for navigation
import s from './MovieDetailsPage.module.css'; // Import CSS modules for styling
import sprite from '../images/icons.svg'; // Import an SVG sprite for icons

// Define the 'MovieDetailsPage' component as the default export
export default function MovieDetailsPage() {
  // Extract 'movieId' from the URL using the 'useParams' hook
  const { movieId } = useParams();

  // Define state variables to store movie details, a reference to the previous page, and search parameters
  const [movie, setMovie] = useState('');
  const [from, setFrom] = useState(null);
  const [searchBack, setSearchBack] = useState('');

  // Initialize navigation and location using 'useNavigate' and 'useLocation' hooks
  const navigate = useNavigate();
  const { state } = useLocation();
  // console.log(state);

  // Define options for date formatting
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  // Effect to extract the previous page reference and search parameters from location state
  useEffect(() => {
    if (state?.from) {
      const { pathname, search } = state.from;
      setFrom(pathname);
      setSearchBack(search);
    }
  }, [state?.from]);
  // In summary, this code captures and remembers the pathname and search properties of the previous route's location using the state.from object.
  // The use of optional chaining ensures that this code won't throw errors if state.from is undefined, making it a safe way to handle this information.

  // Effect to fetch movie details based on 'movieId' from the URL
  useEffect(() => {
    fetchMovieDetails(movieId).then(data => {
      normalizedData(data); // Call a function to normalize genre data
      setMovie(data); // Set the 'movie' state with the fetched movie data
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]); // Trigger the effect when 'movieId' changes

  // Function to normalize movie data, specifically genre information
  function normalizedData(results) {
    createGenres(genresNames, results.genres); // Call a function to create an array of genre names based on genre IDs

    return results; // Return the normalized movie data
  }

  // Function to create an array of genre names based on genre IDs
  function createGenres(arrayID, genresID) {
    let arrayOfGenres = []; // Initialize an empty array to store genre names

    return arrayID.map(element => {
      // Use the map function to iterate through genre names
      if (genresID.includes(element.id)) {
        // Check if the genre IDs include the current genre
        arrayOfGenres.push(element.name); // If so, add the genre name to the array
      }

      return arrayOfGenres; // Return the array of genre names
    });
  }

  // Function to handle the "Go Back" button
  function goBackHandle() {
    if (from === null) {
      // Check if the 'from' reference is null (no previous page)
      navigate('/react-hw-05-movies', { replace: true }); // Navigate to the default movies page and replace the current entry
      return;
    } else {
      navigate(`${from}${searchBack}`); // Navigate back to the previous page with search parameters
    }
  }

  // Function to convert movie runtime to a human-readable format
  function timeConvert(time) {
    let duration = time; // Store the duration in minutes
    let hours = duration / 60; // Convert minutes to hours
    let roundedHours = Math.floor(hours); // Round down to get the whole hours
    let minutes = (hours - roundedHours) * 60; // Calculate the remaining minutes
    let roundedMinutes = Math.round(minutes); // Round minutes to the nearest whole number
    let hoursText =
      roundedHours === 1 ? `${roundedHours} hour ` : `${roundedHours} hours `; // Check if there's only 1 hour
    let minutesText =
      roundedMinutes === 1
        ? `${roundedMinutes} minute`
        : `${roundedMinutes} minutes`; // Check if there's only 1 minute

    if (roundedHours === 0) {
      hoursText = ''; // If there are no whole hours, set the hours text to an empty string
    }
    if (roundedMinutes === 0) {
      minutesText = ''; // If there are no whole minutes, set the minutes text to an empty string
    }

    return hoursText + minutesText; // Return the formatted duration as a string
  }

  return (
    <>
      {movie && ( // Render the following only if 'movie' is available
        <div className={s.details}>
          <div className={s.image_wrapper}>
            {movie.poster_path ? ( // Check if 'poster_path' exists
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className={s.image}
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                alt={movie.original_title}
                className={s.image}
              />
            )}

            <button onClick={goBackHandle} className={s.go_back}>
              <svg
                className={s.go_back__icon}
                width="16"
                height="16"
                aria-label="logo"
              >
                <use href={`${sprite}#arrow-back`}></use>
                {/* Display an SVG icon for "Go Back" --> */}
              </svg>
            </button>
          </div>

          <div className={s.description}>
            <div className={s.title_wrapper}>
              <h2 className={s.title}>{movie.original_title}</h2>
              {/* Display the movie title */}
              {movie.tagline !== '' ? ( // Check if 'tagline' exists and is not empty
                <p className={s.tagline}>"{movie.tagline}"</p>
              ) : (
                //  Display the movie tagline if available
                ''
              )}
            </div>
            <ul className={s.info}>
              {movie.vote_average !== 0 ? ( // Check if 'vote_average' is not zero
                <li className={s.info__item}>
                  User Score:{' '}
                  <span className={s.info__value}>
                    <span className={s.star}>
                      <i className="fa fa-star-o"></i>
                      {/* Display a star icon for user score */}
                    </span>
                    &#160;{movie.vote_average}
                    {/* Display the user score value */}
                  </span>
                </li>
              ) : (
                <li className={s.info__item}>
                  User Score:{' '}
                  <span className={s.info__value}>
                    <span className={s.star}>
                      <i className="fa fa-star-o"></i>
                      {/* Display a star icon for user score */}
                    </span>
                    &#160;--
                  </span>
                </li>
              )}
              {movie.release_date !== '' ? ( // Check if 'release_date' exists and is not empty
                <li className={s.info__item}>
                  Release date:{' '}
                  <span className={s.info__value}>
                    {new Date(movie.release_date).toLocaleDateString(
                      'en-US',
                      options
                    )}
                    {/* Display the formatted release date */}
                  </span>
                </li>
              ) : (
                <li className={s.info__item}>
                  Release date: <span className={s.info__value}>--</span>
                  {/* Display '--' if release date is not available */}
                </li>
              )}
              {movie.budget !== 0 ? ( // Check if 'budget' is not zero
                <li className={s.info__item}>
                  Budget:{' '}
                  <span className={s.info__value}>
                    ${movie.budget.toLocaleString()}
                    {/* Display the budget in USD format */}
                  </span>
                </li>
              ) : (
                ''
              )}
              {movie.revenue !== 0 ? ( // Check if 'revenue' is not zero
                <li className={s.info__item}>
                  Revenue:{' '}
                  <span className={s.info__value}>
                    ${movie.revenue.toLocaleString()}
                    {/* Display the revenue in USD format */}
                  </span>
                </li>
              ) : (
                ''
              )}
              {movie.runtime !== 0 ? ( // Check if 'runtime' is not zero
                <li className={s.info__item}>
                  Runtime:{' '}
                  <span className={s.info__value}>
                    {timeConvert(movie.runtime)}
                    {/* Display the runtime in a human-readable format */}
                  </span>
                </li>
              ) : (
                ''
              )}
              <li className={s.info__item}>
                Genres:{' '}
                <ul className={s.genres}>
                  {movie.genres.length > 0 ? ( // Check if 'genres' array is not empty
                    movie.genres.map(({ id, name }, index) => (
                      <li className={s.genres__item} key={id}>
                        {(index ? ', ' : '') + name}
                        {/* Display genre names with comma separation */}
                      </li>
                    ))
                  ) : (
                    <p className={s.genres__item}>Other</p>
                    // Display 'Other' if no genres are available
                  )}
                </ul>
              </li>
            </ul>

            <p className={s.overview}>{movie.overview}</p>
            {/* Display the movie overview */}

            <div className={s.additional}>
              <Link
                to={`/react-hw-05-movies/movies/${movieId}/cast`}
                className={s.additional__button}
              >
                Cast
                {/* Link to the Cast page */}
              </Link>
              <Link
                to={`/react-hw-05-movies/movies/${movieId}/reviews`}
                className={s.additional__button}
              >
                Reviews
                {/* Link to the Reviews page */}
              </Link>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
}

// This module defines a React component called MovieDetailsPage that is responsible for displaying detailed information about a movie. Here's a summary of what this module does:
// Import necessary React hooks and components.
// Extract information about the movie and the previous route's location.
// Define state variables for movie details, a reference to the previous page, and search parameters.
// Initialize navigation and location hooks for routing.
// Define options for date formatting.
// Use an effect to extract and store information about the previous page and search parameters from the location state.
// Use an effect to fetch movie details based on the movieId from the URL.
// Define functions to normalize movie data, create an array of genre names, handle the "Go Back" button, and convert movie runtime to a human-readable format.
// Render the movie details, including the poster, title, tagline, user score, release date, budget, revenue, runtime, genres, overview, and additional links for Cast and Reviews.
// Use optional rendering (conditional rendering) to ensure that movie details are only displayed when the movie data is available.
// Render an SVG icon for the "Go Back" button.
// Render the child components or content from nested routes using <Outlet />.
// In summary, this module is a React component that displays detailed information about a movie, handles routing, and provides user-friendly formatting for various movie details.
