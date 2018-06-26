import React from 'react';
import MediaQuery from 'react-responsive';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = () => (
  <MediaQuery minDeviceWidth={700}>
    {(matches) => {
      if (matches) {
        return <Desktop />;
      }
      return <Mobile />;
    }}
  </MediaQuery>
);

export default Header;
