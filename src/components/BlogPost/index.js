import React from 'react';
import moment from 'moment';

import { Container, Header, Date, Author } from './style';
import Content from '../Content';

const BlogPost = ({
  content, contentComponent, title, date, author,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        {date && (
          <p>
            <Date>
              {moment(date)
                .locale('es')
                .format('DD MMMM, YYYY')}
            </Date>
          </p>
        )}
      </Header>
      <PostContent content={content} />
      {author && (
        <Author>
          <small>Escrito por: {author}</small>
        </Author>
      )}
    </Container>
  );
};

export default BlogPost;
