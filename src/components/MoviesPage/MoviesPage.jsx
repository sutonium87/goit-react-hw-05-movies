import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchField from './SearchField/SearchField';
import MoviesSearchList from './MoviesSearchList/MoviesSearchList';
import { toast } from 'react-toastify';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Catching search query from address bar
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') ?? '';

  // Catching search query from search bar input field
  const handleSubmit = searchQueryValue => {
    if (searchQuery === searchQueryValue) {
      return toast.info('Input new search query.');
    }

    navigate(`${location.pathname}?query=${searchQueryValue}`);

    setSearchQuery(searchQueryValue);
  };

  // Setting search query from address bar
  useEffect(() => {
    if (query !== '') {
      setSearchQuery(query);
    }
  }, [query]);

  return (
    <>
      {/* Render the SearchField component and provide the handleSubmit function */}
      <SearchField onSubmit={handleSubmit} />

      {/* Render the MoviesSearchList component and pass the current searchQuery */}
      <MoviesSearchList searchQuery={searchQuery} />
    </>
  );
}
// This module manages movie search functionality.
// It imports various hooks and components for routing, searching, and displaying movies.
// The component uses the useState hook to manage the search query's state and useNavigate and useLocation for handling routing.
// It provides a SearchField component for inputting search queries and a MoviesSearchList component to display search results.
// The code also handles query parameters from the URL and updates the search query state accordingly.
// Toast messages are displayed for user notifications during the search process.
