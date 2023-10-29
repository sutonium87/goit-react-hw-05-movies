// Import PropTypes for type checking
import PropTypes from 'prop-types';

// This functional component acts as a wrapper that renders its children
export default function Wrapper({ children }) {
  return <div>{children}</div>;
}

// Define the expected prop types for this component
Wrapper.propTypes = {
  children: PropTypes.node,
};

// This module exports a simple functional component called Wrapper.
//  The component takes a single prop, children, which represents the child elements to be wrapped.
// It renders these child elements within a < div >.
// The PropTypes library is used to specify the expected prop types for the children prop.This component serves as a generic wrapper that can be used to group and style child components or elements within a parent component.
