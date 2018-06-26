import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

import { ContainerMobile, HamburgerContainer, Logo, Content, StyledLink as Link } from './style';

const hamburgerWidth = 22;

export default class HeaderMobile extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <ContainerMobile>
        <HamburgerContainer>
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick}
            width={hamburgerWidth}
            height={18}
            strokeWidth={3}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.4}
          />
        </HamburgerContainer>
        <Content visible={!this.state.open} extraWidth={hamburgerWidth}>
          <Logo>
            blog<span>chain</span>
          </Logo>
        </Content>

        <Content visible={this.state.open} extraWidth={hamburgerWidth}>
          <Link to="/" href="/" exact activeClassName="active" onClick={this.handleClick}>
            Blog
          </Link>
          <Link to="/about" href="/about" exact activeClassName="active" onClick={this.handleClick}>
            Nosotros
          </Link>
        </Content>
      </ContainerMobile>
    );
  }
}
