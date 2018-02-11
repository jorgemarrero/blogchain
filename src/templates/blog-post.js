import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content, contentComponent, description, title, helmet, date
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <div id="main" className="alt blog-post">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{title}</h1>
            </header>
            <small>{date}</small>
            <PostContent content={content} />
            </div>
        </section>
      </div>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<BlogPostTemplate
    content={post.html}
    contentComponent={HTMLContent}
    description={post.frontmatter.description}
    helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
    title={post.frontmatter.title}
  />);
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
