import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

import { Container, Header, Date, Author } from './style';
import Content from '../Content';

const BlogPost = ({
  content, contentComponent, title, date, author, timeToRead,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        {date && (
          <p>
            <Date>
              <span role="img" aria-label="icono de calendario">
                📅
              </span>
              {moment(date)
                .locale('es')
                .format('DD MMMM, YYYY')}{' '}
              /{' '}
              <span role="img" aria-label="icono de calendario">
                ⏱️{' '}
              </span>
              {timeToRead} minutos
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
