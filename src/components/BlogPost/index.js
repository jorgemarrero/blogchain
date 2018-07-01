import React from 'react';
import moment from 'moment';

import { Container, Header, Date } from './style';
import Content from '../Content';

const BlogPost = ({
  content, contentComponent, title, date,
}) => {
  const PostContent = contentComponent || Content;
  moment.locale('es');
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        <p>
          <Date>{moment(date).format('DD MMMM, YYYY')}</Date>
        </p>
      </Header>
      <PostContent content={content} />
    </Container>
  );
};

export default BlogPost;
