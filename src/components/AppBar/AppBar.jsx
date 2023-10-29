// Import the 'Logo' component from the 'Logo' module within the same directory.
import Logo from './Logo/Logo';

// Import the 'Navigation' component from the 'Navigation' module within the 'components/AppBar' directory.
import Navigation from 'components/AppBar/Navigation/Navigation';

// Import the CSS module for styling.
import s from './AppBar.module.css';

// Define the functional component 'AppBar'.
export default function AppBar() {
  return (
    // Render the header element with CSS styling from the 's.header' class.
    <header className={s.header}>
      {/* Create a container with the 's.navigation' class for the logo and navigation links. */}
      <div className={s.navigation}>
        {/* Render the 'Logo' component and pass the 'link' prop with the specified URL. */}
        <Logo link={'/react-hw-05-movies'} />

        {/* Create a menu container with the 's.menu' class for navigation links. */}
        <div className={s.menu}>
          {/* Render the 'Navigation' component with the 'link' and 'title' props for the "Home" page. */}
          <Navigation link={'/react-hw-05-movies'} title={'Home'} />

          {/* Render the 'Navigation' component with the 'link' and 'title' props for the "Movies" page. */}
          <Navigation link={'/react-hw-05-movies/movies'} title={'Movies'} />
        </div>
      </div>
    </header>
  );
}
// This code defines the AppBar component that represents the application's header.
// It includes a logo and navigation links for the "Home" and "Movies" pages.
// Styling is applied using CSS modules (s.header, s.navigation, s.menu) to control the appearance of these elements.
