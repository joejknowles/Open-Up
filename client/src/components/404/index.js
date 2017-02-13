import React from 'react';
import { Link } from 'react-router';
import '../../styles/App.css';

export default () => (
  <div className="App">
    <h3>Page not found</h3>
    <Link to="venue">Home</Link>
  </div>
);
