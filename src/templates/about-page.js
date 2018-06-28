import React, { Fragment } from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import { HTMLContent } from '../components/Content';
import BlogPost from '../components/BlogPost';

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Fragment>
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <BlogPost contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
    </Fragment>
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
