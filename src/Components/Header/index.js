import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Container, ChildrenContainer, PowerIcon } from './styles';

function Header({ children}) {
  return (
    <Container>
      <strong>
      {children}
      </strong>
    </Container>
  );
}

export default memo(Header);
