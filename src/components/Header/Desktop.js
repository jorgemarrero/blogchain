import React, { Fragment } from 'react';

import { WrapperDesktop, ContainerDesktop, Logo, StyledLink as Link } from './style';

const Desktop = () => (
  <ContainerDesktop>
    <WrapperDesktop>
      <Logo>
        blog<span>chain</span>
      </Logo>
      <div>
        <Link to="/" href="/" exact activeClassName="active">
          Blog
        </Link>
        <Link to="/about" href="/about" exact activeClassName="active">
          Nosotros
        </Link>
      </div>
    </WrapperDesktop>
  </ContainerDesktop>
);

export default Desktop;
