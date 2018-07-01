import React from 'react';
import moment from 'moment';

import { Container, Header, Date } from './style';
import Content from '../Content';

const BlogPost = ({
  content, contentComponent, title, date,
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
    </Container>
  );
};

export default BlogPost;
