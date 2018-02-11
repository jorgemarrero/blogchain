import React, { Component } from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import Helmet from 'react-helmet';
import graphql from 'graphql';

import Banner from '../components/Banner';

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
      <div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => handleScriptLoad()}
        />
        <Banner />
        <div id="main">
          <section id="one" className="tiles">
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'blog-post')
              .map(({ node: post }) => (
                <article style={{ backgroundImage: `url(${post.frontmatter.image})` }}>
                  <header className="major">
                    <h3>{post.frontmatter.title}</h3>
                    <p>{post.frontmatter.description}</p>
                  </header>
                  <Link to={post.frontmatter.path} className="link primary" />
                  {/* <Link to="/landing" className="link primary"></Link> */}
                </article>
              ))}
          </section>
        </div>
      </div>
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
