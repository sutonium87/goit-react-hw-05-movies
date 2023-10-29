// Import necessary dependencies and components
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/movies-api';
import s from './Cast.module.css';

// Define the 'Cast' component as the default export
export default function Cast() {
  // Extract the 'movieId' parameter from the URL using the 'useParams' hook
  const { movieId } = useParams();

  // Define the 'cast' state variable and a 'setCast' function to manage a list of cast members
  const [cast, setCast] = useState([]);

  // Use the 'useEffect' hook to perform side effects when the component is mounted
  useEffect(() => {
    // Call the 'fetchMovieCredits' function to fetch movie cast data for the specified 'movieId'
    fetchMovieCredits(movieId).then(data => {
      // Set the 'cast' state with the cast data received from the API
      setCast(data.cast);
    });
  }, [movieId]);

  // Return JSX for rendering
  return (
    <>
      {cast && (
        // Render a list of cast members if 'cast' data is available
        <ul className={s.cast}>
          {cast.map(({ id, character, original_name, profile_path }) => (
            <li className={s.item} key={id}>
              <a
                className={s.link}
                href={`https://www.google.com/search?q=${original_name
                  .split(' ')
                  .join('+')}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className={s.image_wrapper}>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={original_name}
                      className={s.image}
                    />
                  ) : (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                      alt={original_name}
                      className={s.image}
                    />
                  )}
                </div>
                <div className={s.name_wrapper}>
                  <p className={s.name}>{original_name}</p>
                  <p className={s.character}>{character}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

// In summary, this code is a React component that fetches and displays the cast members of a movie based on the 'movieId' parameter extracted from the URL.
//  It uses React hooks for state management and side effects and renders the cast information with appropriate styling.
