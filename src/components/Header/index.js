import React, { Fragment } from 'react';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = () => (
  <Fragment query="(min-width: 700px)">
    <Desktop />
    <Mobile />
  </Fragment>
);

export default Header;
