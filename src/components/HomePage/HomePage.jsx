// Import the 'TrendingMovies' component from the './TrendingMovies/TrendingMovies' module.
import TrendingMovies from './TrendingMovies/TrendingMovies';

// Define and export the 'HomePage' component as the default export of this module.
export default function HomePage() {
  // Return the 'TrendingMovies' component. This means that when the 'HomePage' component is rendered,
  // it will display the 'TrendingMovies' component as its content.
  return <TrendingMovies />;
}
