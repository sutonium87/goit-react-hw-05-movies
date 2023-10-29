import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import { Link, useLocation } from 'react-router-dom'; // Import React Router components
import s from './MoviesListItem.module.css'; // Import CSS modules for styling

export default function MoviesListItem({ data }) {
  // Extract and define the 'data' prop
  const location = useLocation(); // Get the current location using 'useLocation' hook
  const query = new URLSearchParams(location.search).get('query') ?? ''; // Extract the 'query' parameter from the URL

  return data.map(
    ({ title, id, poster_path, genres, release_date, vote_average }) => (
      // Map over the movie data and render each item
      <li className={s.item} key={id}>
        {/* Create a list item with a unique 'id' as the key */}
        <Link
          to={`/react-hw-05-movies/movies/${id}`}
          state={{ from: location, search: query }}
          className={s.link}
        >
          {/* Create a link to the movie details page */}
          <div className={s.image_wrapper}>
            {/* Create a wrapper for the movie poster */}
            {poster_path ? ( // Check if 'poster_path' exists
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                className={s.image}
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                alt={title}
                className={s.image}
              />
            )}
          </div>
          <div className={s.description}>
            {/* Create a description container for movie details */}
            <h3 className={s.title}>{title}</h3>
            {/* Display the movie title */}
            <ul className={s.genres}>
              {/* Create a list for movie genres */}
              {genres.length > 0 ? ( // Check if there are genres
                genres.map(({ id, name }, index) => (
                  <li className={s.genres__item} key={id}>
                    {(index ? ', ' : '') + name}
                    {/* This code generates a comma-separated list of genre names. The index parameter is used to determine if a comma should be added. If it's the first genre in the list (index === 0), no comma is added.
                     For subsequent genres, a comma and space are added to separate them. */}
                  </li>
                ))
              ) : (
                <p className={s.genres__item}>Other</p>
                // If there are no genres (genres.length > 0 is false), it renders a fallback message.
                //  In this case, it renders a paragraph (<p>) with the text "Other."
              )}
            </ul>
            <p className={s.info}>
              {/* Create a container for additional information */}
              {vote_average !== 0 ? ( // Check if 'vote_average' is not zero
                <span className={s.rating}>
                  <i className="fa fa-star-o"></i>&#160;{vote_average}
                  {/* This code creates a star icon with  Font Awesome library,followed by the value of vote_average to indicate the movie's rating */}
                </span>
              ) : (
                <span className={s.rating}>
                  <i className="fa fa-star-o"></i>&#160;--
                </span>
              )}
              {release_date !== '' ? ( // Check if 'release_date' exists
                <span className={s.date}>{parseInt(release_date)}</span>
              ) : (
                <span className={s.date}>--</span>
              )}
            </p>
          </div>
        </Link>
      </li>
    )
  );
}

MoviesListItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Ensure 'id' is a number and is required
      title: PropTypes.string.isRequired, // Ensure 'title' is a string and is required
    })
  ),
};

// This module defines a React component called MoviesListItem. It receives a data prop, which is an array of movie data. It maps over this data and renders a list item for each movie with details such as title, poster, genres, rating, and release date. Additionally, it handles routing by providing a link to the movie details page.
// The PropTypes at the end of the module define the expected shape of the data prop, specifying that it should be an array of objects with id (a number) and title (a string) properties.
