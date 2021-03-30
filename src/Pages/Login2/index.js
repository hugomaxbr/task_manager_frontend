import React from 'react';

import { Container,Screen, Titulo, Envelocro, InsideScreen, InnerBox} from './styles';

function Login2() {
    return (
      <>
        <Container>
          <Envelocro>
          <Titulo>
          Task Manager Login Panel
        </Titulo>
        <Screen>
          <InsideScreen>
            <InnerBox></InnerBox>
          </InsideScreen>
        </Screen>
          </Envelocro>
        
        </Container>
      </>
    );
  }
  
  export default Login2;