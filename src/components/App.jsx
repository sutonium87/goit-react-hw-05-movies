import { lazy, Suspense } from 'react'; // Import 'lazy' and 'Suspense' from React for code splitting.
import { Routes, Route } from 'react-router-dom'; // Import 'Routes' and 'Route' from 'react-router-dom' for routing.
import Wrapper from 'components/Wrapper/Wrapper'; // Import a custom 'Wrapper' component.
import Section from 'components/Section/Section'; // Import a custom 'Section' component.
import Container from 'components/Container/Container'; // Import a custom 'Container' component.
import AppBar from 'components/AppBar/AppBar'; // Import a custom 'AppBar' component.
import { ToastContainer } from 'react-toastify'; // Import 'ToastContainer' from 'react-toastify' for displaying toast messages.
import 'react-toastify/dist/ReactToastify.css'; // Import CSS styles for 'react-toastify'.
import BarLoader from 'react-spinners/BarLoader'; // Import a loading spinner component.
import ScrollToTop from 'react-scroll-up'; // Import 'ScrollToTop' for a scroll-to-top button.
import styles from './services/styles'; // Import custom styles.
import sprite from './images/icons.svg'; // Import an SVG sprite for icons.

// Lazy load components for improved performance.
const HomePage = lazy(() => import('components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('components/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('components/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('components/MovieDetailsPage/Cast/Cast'));
const Reviews = lazy(() =>
  import('components/MovieDetailsPage/Reviews/Reviews')
);

export default function App() {
  //This line defines the App component as the default export for this module. It's a functional component in React.
  return (
    //The beginning of the component's JSX (JavaScript XML) structure. This signals the start of the component's rendering.
    <Wrapper>
      {' '}
      {/* This is an HTML-like JSX tag representing a custom container or wrapper component. It's used to structure and style the content within. */}
      <AppBar /> {/* Display the custom 'AppBar' component. */}
      <Section>
        <Routes>
          {/* A container for defining routing in the application. It allows you to set up different routes and the components to be displayed when those routes are matched. */}
          <Route
            path="/react-hw-05-movies"
            element={
              <Container>
                <Suspense fallback={<BarLoader color="#7fffd4" />}>
                  {/* A component provided by React that allows you to specify fallback content to display while asynchronously loaded components are being fetched. In this case, a loading spinner (BarLoader) with a blue color is set as the fallback content. */}
                  <HomePage />{' '}
                  {/* Display the 'HomePage' component within a 'Container' with a loading spinner fallback. */}
                </Suspense>
              </Container>
            }
          />
          <Route
            path="/react-hw-05-movies/movies"
            element={
              <Container>
                <Suspense fallback={<BarLoader color="#7fffd4" />}>
                  <MoviesPage />{' '}
                  {/* Display the 'MoviesPage' component within a 'Container' with a loading spinner fallback. */}
                </Suspense>
              </Container>
            }
          />
          <Route
            path="/react-hw-05-movies/movies/:movieId"
            element={
              <Container>
                <Suspense fallback={<BarLoader color="#7fffd4" />}>
                  <MovieDetailsPage />{' '}
                  {/* Display the 'MovieDetailsPage' component within a 'Container' with a loading spinner fallback. */}
                </Suspense>
              </Container>
            }
          >
            <Route
              path="/react-hw-05-movies/movies/:movieId/cast"
              element={
                <Suspense fallback={<BarLoader color="#7fffd4" />}>
                  <Cast />{' '}
                  {/* Display the 'Cast' component within a 'Container' with a loading spinner fallback. */}
                </Suspense>
              }
            />
            <Route
              path="/react-hw-05-movies/movies/:movieId/reviews"
              element={
                <Suspense fallback={<BarLoader color="#7fffd4" />}>
                  <Reviews />{' '}
                  {/* Display the 'Reviews' component within a 'Container' with a loading spinner fallback. */}
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<HomePage />} />{' '}
          {/* Handle all other routes by displaying the 'HomePage' component. */}
        </Routes>
      </Section>
      {/* Add a scroll-to-top button with custom styles and an icon from the SVG sprite. */}
      <ScrollToTop showUnder={100} style={styles.upButton}>
        <svg
          style={{ fill: '#7fffd4' }}
          width="16"
          height="16"
          aria-label="logo"
        >
          <use href={`${sprite}#arrow-up`}></use>
        </svg>
      </ScrollToTop>
      {/* Display toast messages using 'ToastContainer' with custom settings. */}
      <ToastContainer autoClose={3000} theme="colored" />
    </Wrapper>
  );
}

// The App component manages the overall structure of the application, routing, lazy loading of components, and toast message display.
//  It serves as the entry point for the application's rendering.
