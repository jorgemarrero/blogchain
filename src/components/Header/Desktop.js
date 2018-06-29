import React from 'react';

import { WrapperDesktop, ContainerDesktop, Logo, StyledLink as Link } from './style';

const Desktop = () => (
  <ContainerDesktop>
    <WrapperDesktop>
      <Logo to="/" href="/">
        blog<span>chain</span>
      </Logo>
      <div>
        <Link to="/" href="/" exact activeClassName="active">
          Blog
        </Link>
        <Link to="/nosotros" href="/nosotros" exact activeClassName="active">
          Nosotros
        </Link>
      </div>
    </WrapperDesktop>
  </ContainerDesktop>
);

export default Desktop;
