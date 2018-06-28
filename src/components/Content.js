import React from 'react';

export default ({ content, className }) => (
  <div className={`content${className ? ` ${className}` : ''}`}>{content}</div>
);
export const HTMLContent = ({ content, className }) => (
  <div
    className={`content${className ? ` ${className}` : ''}`}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);
