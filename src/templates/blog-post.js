import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import { HTMLContent } from '../components/Content';
import BlogPost from '../components/BlogPost';

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPost
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
    />
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
