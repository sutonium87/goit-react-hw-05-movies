// Import necessary modules from the React library and other dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App'; // Import the main application component
import 'modern-normalize/modern-normalize.css'; // Import a CSS reset stylesheet
import './index.css'; // Import the main CSS styling for the application

// Create a root instance using ReactDOM, and render the app to the element with the 'root' id
ReactDOM.createRoot(document.getElementById('root')).render(
  // Use React.StrictMode for development mode checks and optimizations
  <React.StrictMode>
    {/* Wrap the entire app with BrowserRouter to enable client-side routing */}
    <BrowserRouter>
      {/* Render the main App component, which serves as the root of the application */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// This module is the entry point of a React application.
// It imports the necessary modules, including React, ReactDOM, BrowserRouter, and the main App component.
// It also includes CSS reset styles and the main application styling.The application's root element with the id 'root' is selected, and the App component is rendered within a BrowserRouter, wrapped in React.StrictMode.
// This code sets up the application and is responsible for rendering it within the web page.
