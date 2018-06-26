import React, { Component, Fragment } from 'react';
import Script from 'react-load-script';
import Helmet from 'react-helmet';
import graphql from 'graphql';
import Banner from '../components/Banner';
import Feed from '../components/Feed';
import Article from '../components/Article';

export default class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    const handleScriptLoad = () => {
      if (typeof window !== 'undefined' && window.netlifyIdentity) {
        window.netlifyIdentity.on('init', (user) => {
          if (!user) {
            window.netlifyIdentity.on('login', () => {
              document.location.href = '/admin/';
            });
          }
        });
      }
      window.netlifyIdentity.init();
    };

    return (
      <Fragment>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => handleScriptLoad()}
        />
        <Banner />

        <Feed>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'blog-post')
            .map(({ node: post }) => <Article post={{ ...post }} />)}
        </Feed>
      </Fragment>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            image
            templateKey
            description
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
