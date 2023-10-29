// Import necessary dependencies and components
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/movies-api';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import s from './Reviews.module.css';

// Define the 'Reviews' component as the default export
export default function Reviews() {
  // Extract the 'movieId' parameter from the URL using the 'useParams' hook
  const { movieId } = useParams();

  // Define the 'reviews' state variable and a 'setReviews' function to manage a list of reviews
  const [reviews, setReviews] = useState([]);

  // Options for formatting the review date and time
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  // Use the 'useEffect' hook to perform side effects when the component is mounted
  useEffect(() => {
    // Call the 'fetchMovieReviews' function to fetch movie reviews data for the specified 'movieId'
    fetchMovieReviews(movieId).then(data => {
      // Set the 'reviews' state with the review data received from the API
      setReviews(data.results);
    });
  }, [movieId]);

  // Function to handle the avatar path for authors
  function avatarHandler(avatar) {
    return avatar.includes('https')
      ? avatar.substring(1)
      : `https://image.tmdb.org/t/p/w500${avatar}`;
  }
  // n summary, the avatarHandler function is used to standardize the format of avatar image URLs.
  //    It checks whether the URL is an external one, and if it is, it trims the first character(if necessary).If the URL is not external, it constructs a full URL based on the base URL and the provided avatar path.
  // This function ensures that the src attribute of the image element receives a valid and consistent URL for displaying avatars.

  // Return JSX for rendering
  return (
    <>
      {reviews.length > 0 ? (
        // Render a list of reviews if 'reviews' data is available
        <ul className={s.reviews}>
          {reviews.map(
            ({ id, author, content, author_details, created_at }) => (
              <li className={s.reviews__item} key={id}>
                <div className={s.author_info}>
                  {author_details.avatar_path ? (
                    <img
                      src={avatarHandler(author_details.avatar_path)}
                      alt={author}
                      className={s.avatar}
                    />
                  ) : (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                      alt={author}
                      className={s.avatar}
                    />
                  )}
                  <div>
                    <h4 className={s.author}>{author}</h4>
                    <p className={s.date}>
                      {new Date(created_at).toLocaleString('en-US', options)}
                      {/* The toLocaleString method takes care of formatting the
                      date and time according to the locale and options
                      provided. This ensures that the date and time will be
                      displayed in a format that is familiar and readable to
                      users in the specified locale (in this case, United States
                      English). */}
                    </p>
                  </div>
                </div>

                {/* Use the 'ReactReadMoreReadLess' component for expanding and collapsing content */}
                <ReactReadMoreReadLess
                  charLimit={300}
                  readMoreText={'Read more ▼'}
                  readLessText={'Read less ▲'}
                  readMoreClassName={s.read_more_less__more}
                  readLessClassName={s.read_more_less__less}
                >
                  {content}
                </ReactReadMoreReadLess>
              </li>
            )
          )}
        </ul>
      ) : (
        // Display a message if there are no reviews available
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
// This React component is responsible for fetching and displaying movie reviews, and it includes the use of state, effects, and conditional rendering.
