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
      <BlogPost
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Fragment>
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
