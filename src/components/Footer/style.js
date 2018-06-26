import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  background: rgb(36, 41, 67);
  padding-right: ${props => props.theme.horizontalPadding};
  padding-left: ${props => props.theme.horizontalPadding};
  padding-top: 5vw;
  padding-bottom: 5vw;
  color: white;
`;

const Wrapper = styled.div`
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-end;
`;

export { Container, Wrapper };
