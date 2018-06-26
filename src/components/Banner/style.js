import styled, { css } from 'styled-components';
import banner from '../../assets/images/banner.jpg';

const Container = styled.section`
  width: 100%;
  padding-top: 40px;
  text-align: center;
  padding-bottom: 100px;
  position: relative;
  + main {
    > div {
      margin-top: -120px;
    }
  }
  @media (min-width: 768px) {
    padding-bottom: 140px;
    + main {
      > div {
        margin-top: -160px;
      }
    }
    &:after {
      content: '';
      background: url(${banner});
      opacity: 0.15;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin-top: -100px;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 650px;
  padding-right: ${props => props.theme.horizontalPadding};
  padding-left: ${props => props.theme.horizontalPadding};
  margin-right: auto;
  margin-left: auto;
`;

export { Container, Wrapper };
