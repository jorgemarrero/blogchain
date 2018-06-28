import React from 'react';
import Link from 'gatsby-link';
import { Container, Image, Content, Footer, Info } from './style';

const Article = ({ post }) => {
  console.log(post);
  return (
    <Container>
      <Link to={post.frontmatter.path}>
        <Image src={post.frontmatter.image} />
        <Content>
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.description}</p>
        </Content>
      </Link>
    </Container>
  );
};

export default Article;
