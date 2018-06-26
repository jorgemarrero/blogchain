import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Header = props => (
  <header id="header" className="alt wrapper">
    <div className="inner">
      <Link to="/" className="logo">
        <h2>Blogchain</h2>
      </Link>
      <nav>
        <Link to="/about">Sobre Nosotros</Link>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Header;
