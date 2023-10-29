// Define the base URL for making API requests
const BASE_URL = 'https://api.themoviedb.org/3';
// Define the API key to be used in API requests
const API_KEY = '?api_key=256931b667b455c0d040d58938728ff6';

// Define a generic function for making API requests with error handling
async function fetchWithErrorHandling(url = '', config = {}) {
  // Send a request to the specified URL with the given configuration
  const response = await fetch(url, config);
  // Check if the response status is okay (HTTP status code 200)
  return response.ok
    ? await response.json() // If the response is okay, parse and return JSON
    : Promise.reject(new Error('Not found')); // If not okay, reject the promise with an error
}

// Function to fetch trending movies
export function fetchTrendingMovies(page = '1') {
  // Define the path parameters for trending movies
  const PATH_PARAMS = '/trending/movie/week';
  // Make an API request to fetch trending movies using the provided page
  return fetchWithErrorHandling(
    `${BASE_URL}${PATH_PARAMS}${API_KEY}&page=${page}`
  );
}

// Function to fetch movies based on a search query
export function fetchMovies(searchQuery, page = '1') {
  // Define the path parameters for searching movies
  const PATH_PARAMS = '/search/movie';
  // Define additional search parameters for language and adult content
  const searchParams = '&language=en-US&include_adult=false';
  // Make an API request to search for movies based on the provided query and page
  return fetchWithErrorHandling(
    `${BASE_URL}${PATH_PARAMS}${API_KEY}&query=${searchQuery}&page=${page}${searchParams}`
  );
}

// Function to fetch details of a specific movie
export function fetchMovieDetails(movie_id) {
  // Define the path parameters for fetching movie details
  const PATH_PARAMS = '/movie/';
  // Define additional search parameters for language
  const searchParams = '&language=en-US';
  // Make an API request to fetch details of the specified movie
  return fetchWithErrorHandling(
    `${BASE_URL}${PATH_PARAMS}${movie_id}${API_KEY}${searchParams}`
  );
}

// Function to fetch credits (cast and crew) of a specific movie
export function fetchMovieCredits(movie_id) {
  // Define the path parameters for fetching movie credits
  const PATH_PARAMS = '/movie/';
  // Define additional search parameters for language
  const searchParams = '&language=en-US';
  // Make an API request to fetch credits of the specified movie
  return fetchWithErrorHandling(
    `${BASE_URL}${PATH_PARAMS}${movie_id}/credits${API_KEY}${searchParams}`
  );
}

// Function to fetch reviews of a specific movie
export function fetchMovieReviews(movie_id, page = '1') {
  // Define the path parameters for fetching movie reviews
  const PATH_PARAMS = '/movie/';
  // Define additional search parameters for language
  const searchParams = '&language=en-US';
  // Make an API request to fetch reviews of the specified movie with the provided page
  return fetchWithErrorHandling(
    `${BASE_URL}${PATH_PARAMS}${movie_id}/reviews${API_KEY}${searchParams}&page=${page}`
  );
}
//This module provides functions for making various requests to The Movie Database (TMDb) API, such as fetching trending movies, searching for movies, retrieving movie details, credits, and reviews.
//The fetchWithErrorHandling function is a common utility used for handling API requests and error responses.Each function is tailored to a specific type of API request and includes necessary parameters and search options.
