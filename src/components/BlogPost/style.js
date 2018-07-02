import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  padding-bottom: 3rem;
  .content {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
    > * {
      img {
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        max-height: 60vh;
        box-shadow: 0 0 1px rgba(39, 44, 49, 0.1), 0 3px 16px rgba(39, 44, 49, 0.07);
        object-fit: cover;
        @media (min-width: 768px) {
          position: initial;
          margin-left: 0;
          margin-right: 0;
        }
      }
    }
  }
`;

const Header = styled.div`
  max-width: 1040px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  text-align: center;
`;

const Date = styled.small`
  text-transform: capitalize;
`;

const Author = styled.div`
  font-style: italic;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
`;

export { Container, Header, Date, Author };
