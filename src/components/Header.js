import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Header = props => (
  <header id="header" className="alt wrapper">
    <Link to="/" className="logo">
      <strong>Blogchain</strong>
      <span>.es</span>
    </Link>
    <nav>
      <Link to="/about-us">About Us</Link>
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Header;
