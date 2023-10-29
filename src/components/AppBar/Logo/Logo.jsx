import { NavLink } from 'react-router-dom'; // Import 'NavLink' from 'react-router-dom' for creating navigation links.
import sprite from '../../images/icons.svg'; // Import an SVG sprite that contains the logo icon.
import s from './Logo.module.css'; // Import styles from the 'Logo.module.css' module.

// Define a functional component 'Logo' that takes a 'link' prop.
export default function Logo({ link }) {
  return (
    <NavLink className={s.logo} to={link}>
      {/* Create a navigation link using 'NavLink', with the 'link' prop as the target route. Apply the 's.logo' class from the imported styles. */}
      <svg className={s.icon} width="24" height="24" aria-label="logo">
        {/* Create an SVG element with a 's.icon' class and set its dimensions. */}
        <use href={`${sprite}#logo`}></use>
        {/* Use the SVG sprite by referencing the 'logo' icon from the 'sprite'. */}
      </svg>
      <p className={s.text}>MovieHub</p>
      {/* Display the text 'MovieHub' with a 's.text' class for styling. */}
    </NavLink>
  );
}
// This code defines a component called Logo that renders a navigation link containing a logo icon and the text "MovieHub."
// The logo is styled using CSS classes from an imported stylesheet, and the link destination is specified via the link prop.
