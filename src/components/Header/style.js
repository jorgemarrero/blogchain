import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.header`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 2px -2px;
  display: flex;
  font-family: 'Rosario';
  background-color: rgba(255, 255, 255, 0.9);
`;

const WrapperDesktop = styled.div`
  display: flex;
  height: 100px;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
`;

const ContainerMobile = Container.extend`
  position: relative;
  overflow: hidden;
  height: 68px;
`;

const HamburgerContainer = styled.div`
  position: absolute;
  left: 20px;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  position: absolute;
  transition: opacity 0.4s ease-in-out, left 0.4s linear;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 calc(${props => `${props.extraWidth}px`} + 40px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${props =>
    !props.visible &&
    css`
      left: 100vw;
      opacity: 0;
    `};
`;

const Logo = styled.span`
  font-size: 1.25rem;
  span {
    color: rgb(17, 163, 172);
  }
`;

const StyledLink = styled(Link)`
  background: transparent;
  padding: 0.75rem;
  padding-bottom: 0.5rem;
  margin-top: -0.25rem;
  position: relative;
  color: hsla(0, 0%, 0%, 0.73);
  &:after {
    display: block;
    height: 3px;
    background-color: #eceeef;
    position: absolute;
    left: 0.75rem;
    right: 0.75rem;
    bottom: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    content: '';
  }
  &.active,
  &:hover {
    &:after {
      background-color: rgb(17, 163, 172);
      transform: none;
    }
  }
  ${(props) => {
    return (
      props.active &&
      css`
        &:after {
        }
        `
    );
  }};
`;

export {
  Container,
  WrapperDesktop,
  ContainerMobile,
  Logo,
  HamburgerContainer,
  Content,
  StyledLink,
};
