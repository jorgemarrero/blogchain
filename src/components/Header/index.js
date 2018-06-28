import React, { Fragment } from 'react';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = () => (
  <Fragment>
    <Desktop />
    <Mobile />
  </Fragment>
);

export default Header;
