import React, { Fragment } from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import BlogPost from '../components/BlogPost';

export const AboutPageTemplate = ({ content, contentComponent, title }) => {
  const PostContent = contentComponent || Content;

  return <BlogPost content={content} contentComponent={PostContent} title={title} />;
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Fragment>
      <Helmet title="Nosotros" />
      <AboutPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
      />
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
