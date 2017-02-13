import React from 'react';
import { Link } from 'react-router'

export default () => (
  <div>
    <h3>
      Venue
    </h3>
    <Link to="venue/book" className="bookLink">book here</Link>
  </div>
);
