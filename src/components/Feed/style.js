import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  background: #f4f8fb;
  padding-right: ${props => props.theme.horizontalPadding};
  padding-left: ${props => props.theme.horizontalPadding};
  padding-top: 5vw;
  padding-bottom: 5vw;
`;

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, [col] 1fr);
    grid-gap: 2rem;
  }
  max-width: 1040px;
  margin-left: auto;
  margin-right: auto;
`;

export { Container, Wrapper };
