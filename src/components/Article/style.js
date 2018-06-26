import styled, { css } from 'styled-components';

const radius = '5px';

const Container = styled.article`
  background: #fff 50%;
  background-size: cover;
  border-radius: ${radius};
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);
  transition: all 0.5s ease;
  margin-bottom: 1.5rem;
  display: flex;
  a {
    min-height: 300px;
    background-image: none;
    position: relative;
  }
  &:hover {
    box-shadow: 0 0 1px rgba(39, 44, 49, 0.1), 0 3px 16px rgba(39, 44, 49, 0.07);
    transition: all 0.3s ease;
    transform: translate3D(0, -1px, 0);
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    a {
      > div {
        div:last-child {
          position: absolute;
          bottom: 24px;
        }
      }
    }
    &:nth-child(7n + 1) {
      grid-column: col / span 3;

      a {
        > img {
          position: absolute;
          max-width: 60%;
          margin-bottom: 0;
          height: 100%;
          border-top-right-radius: 0;
          border-bottom-left-radius: ${radius};
        }
        > div {
          margin-left: 60%;
          padding: 32px;
          h2 {
            font-size: 1.4rem;
          }
          div:last-child {
            position: absolute;
            bottom: 32px;
          }
        }
      }
    }
  }
`;

const Content = styled.div`
  padding: 0 24px 24px;
  color: hsla(0, 0%, 0%, 0.73);
  h2 {
    font-size: 1.1rem;
    color: rgb(17, 163, 172);
    margin-top: 0;
  }
`;

const Footer = styled.div`
  padding: 0 24px;
  min-height: 36px;
  width: 100%;
`;

const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: ${radius};
  border-top-right-radius: ${radius};
`;

const Info = styled.div`
  font-size: 0.8rem;
  color: #a1a1a1;
  span + span {
    &:before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 5px;
      height: 5px;
      margin: -4px 10px 0 6px;
      border-radius: 50%;
      margin-right: 6px;
      background-color: #a1a1a1;
    }
  }
`;

export { Container, Image, Content, Footer, Info };
