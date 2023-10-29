// Import the NavLink component from the "react-router-dom" library.
import { NavLink } from 'react-router-dom';

// Import styles from the "Navigation.module.css" CSS module.
import s from './Navigation.module.css';

// Define a functional component named Navigation, which receives link and title as props.
const Navigation = ({ link, title }) => {
  return (
    <nav>
      {/* Use the NavLink component to create a navigation link. */}
      <NavLink
        to={link} // The "to" prop specifies the destination link.
        end // The "end" prop indicates that this link should only match when the full path matches.
        className={({ isActive }) => (isActive ? s.link__active : s.link)} // The "className" prop specifies the CSS class to apply based on whether the link is active or not.It uses conditional (ternary) expression.
      >
        {title} {/* Display the title text of the navigation link. */}
      </NavLink>
    </nav>
  );
};

// Export the Navigation component as the default export of this module.
export default Navigation;

// In summary, this code defines a React functional component named Navigation.
// It uses the NavLink component from the "react-router-dom" library to create navigation links.
// The component receives link and title as props to specify the destination link and the link's displayed title.
// The s.link and s.link__active classes from the CSS module determine the styling of the link based on whether it's active or not.
// The end prop is used to make sure the link matches only when the full path matches.
