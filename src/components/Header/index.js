import React from 'react';
import MediaQuery from 'react-media';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = () => (
  <MediaQuery query="(min-width: 700px)">
    {(matches) => {
      if (matches) {
        return <Desktop />;
      }
      return <Mobile />;
    }}
  </MediaQuery>
);

export default Header;
