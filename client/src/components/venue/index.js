import React from 'react';
import { Link } from 'react-router'
import Image from './field'
import '../../styles/Venue.css';

export default ({ children }) => (
  <div className="Venue">
    <Link to="/venue/book" className="bookLink">BOOK HERE</Link>
    <h3 className="venue-heading">
      Venue 1
    </h3>
    <Image className="venue-image" />
    <p className="venue-info">
      <em>Info:</em> This is general information about the venue.
    </p>
    { children }
  </div>
);
