import React from 'react';
import { Container, Header } from './style';
import Content from '../Content';

const BlogPost = ({
  content, contentComponent, title, date,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        <p>
          <small>{date}</small>
        </p>
      </Header>
      <PostContent content={content} />
    </Container>
  );
};

export default BlogPost;
