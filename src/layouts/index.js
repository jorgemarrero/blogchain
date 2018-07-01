import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { ThemeProvider } from 'styled-components';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import baseStyles from '../assets/baseStyle';
import theme from '../assets/themeStyle';

const TemplateWrapper = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    });
  }

  render() {
    baseStyles();

    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div
          className={`${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}
        >
          <Helmet title="Blogchain | Novedades y objetividad sobre el mundo blockchain" />
          <div id="wrapper">
            <Header onToggleMenu={this.handleToggleMenu} />
            {children()}
            {/* <Contact /> */}
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    );
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
