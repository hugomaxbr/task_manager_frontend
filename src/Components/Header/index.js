import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Container, ChildrenContainer, AnchorIcon } from './styles';


function Header({ children}) {
  return (
    <Container>
      <div>
        <AnchorIcon/>
        <strong>Task Manager</strong>
      </div>
      <ChildrenContainer>
        {/* <Link to="/">
          <AnchorIcon/>
        </Link> */}
        {children}
      </ChildrenContainer>
    </Container>
  );
}

export default memo(Header);
