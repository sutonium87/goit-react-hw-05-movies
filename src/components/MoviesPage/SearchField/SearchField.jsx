// Import necessary modules and components
import { useState } from 'react'; // Import the 'useState' hook from React
import s from './SearchField.module.css'; // Import CSS modules for styling
import { toast } from 'react-toastify'; // Import the 'toast' component from 'react-toastify'
import sprite from '../../images/icons.svg'; // Import an SVG sprite for icons

// Define the 'SearchField' component as the default export
function SearchField(props) {
  // Define state to store the search query input
  const [searchQuery, setSearchQuery] = useState('');

  // Handle changes in the search query input
  const handleSearchQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase()); // Convert input to lowercase and update the state
  };

  // Handle the form submission
  const handleSubmit = event => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (searchQuery.trim() === '') {
      setSearchQuery(''); // Clear the search query input
      return toast.info('Input your search query'); // Display an informational toast message
    }

    props.onSubmit(searchQuery); // Call the 'onSubmit' function with the search query
    setSearchQuery(''); // Clear the search query input
  };

  // Render the search input form
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        autoComplete="off"
        name="searchQuery"
        placeholder="Search movie..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />

      <button type="submit" className={s.button}>
        <svg className={s.icon} width="16" height="16" aria-label="logo">
          <use href={`${sprite}#search`}></use>
        </svg>
      </button>
    </form>
  );
}

export default SearchField; // Export the 'SearchField' component as the default export

// This module defines a React component called `SearchField` for handling movie search queries.
//  It provides an input field where users can type their search queries and a submit button.The component uses the `useState` hook to manage the search query's state. When a user submits the form, the component calls a provided `onSubmit` function with the search query. Additionally, it includes CSS styling, imports the `toast` component for displaying messages, and uses an SVG sprite for an icon.
