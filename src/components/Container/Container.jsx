// Import the 'PropTypes' library to specify the expected prop types.
import PropTypes from 'prop-types';

// Import the CSS module for styling.
import s from './Container.module.css';

// Define the 'Container' component that takes a 'children' prop.
export default function Container({ children }) {
  return (
    // Render a div element with styling from the 's.containerW' class.We render the children prop inside the <div>. This allows us to nest other components or content within the Container.
    <div className={s.containerW}>{children}</div>
  );
}

// Define the expected prop types for the 'Container' component.
Container.propTypes = {
  children: PropTypes.node,
};
// This module defines a React component called Container, which serves as a container for wrapping and styling content in a web application. It imports the PropTypes library to specify the expected prop types and uses a CSS module (s) for styling.
// The Container component takes a single prop, children, which represents the content that will be wrapped within the container. It renders a <div> element with a specific CSS class (s.containerW) to apply styling.
// Additionally, it defines the expected prop types for the Container component, specifying that the children prop should be a node, allowing it to accept any valid React node as its content. This Container component can be used to structure and style content in a web application.
