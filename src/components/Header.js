import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar fixed-top">
    <Link className="navbar-brand" to="/">
      Dog app
    </Link>
    <Link to="/favorites">Favorites</Link>
  </nav>
);

export default Header;
