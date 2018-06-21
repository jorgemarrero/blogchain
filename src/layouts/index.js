import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import baseStyles from '../assets/style';

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
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
      >
        <Helmet title="Blogchain Blog" />
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {children()}
          {/* <Contact /> */}
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    );
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
