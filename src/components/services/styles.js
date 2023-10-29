const upButton = {
  position: 'fixed' /* Fix the element's position on the viewport */,
  display: 'flex' /* Display as a flexible container */,
  alignItems: 'center' /* Center content vertically */,
  justifyContent: 'center' /* Center content horizontally */,
  width: 40 /* Set a width of 40 units */,
  height: 40 /* Set a height of 40 units */,
  bottom: 30 /* Position from the bottom edge of the viewport */,
  right: 30 /* Position from the right edge of the viewport */,
  borderRadius: 20 /* Apply a border radius to create a circular shape */,
  backgroundColor: '#fff' /* Set background color to white */,
  cursor: 'pointer' /* Change the cursor to a pointer on hover */,
  boxShadow:
    '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)' /* Apply a box shadow for a raised effect */,
  transitionDuration:
    '0.2s' /* Set the duration of transition animations to 0.2 seconds */,
  transitionTimingFunction:
    'linear' /* Use a linear timing function for transitions */,
  transitionDelay: '0s' /* No delay before transitions */,
};

const styles = {
  upButton /* Define an object containing the styles for the 'upButton' */,
};

export default styles; /* Export the 'styles' object for use in other parts of the application */
