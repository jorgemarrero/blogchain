import React from 'react';
import { Container, Wrapper } from './style';

const Feed = props => (
  <Container>
    <Wrapper>{props.children}</Wrapper>
  </Container>
);

export default Feed;
