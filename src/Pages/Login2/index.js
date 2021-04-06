import React from 'react';

import { Container,Screen, Titulo, Envelocro, InsideScreen, InnerBox, Croquete} from './styles';

function Login2() {
    return (
      <>
      <Croquete>
        <Container>
          <Envelocro>
          <Titulo>
          Task Manager Login Panel
        </Titulo>
        <Screen>
          <InsideScreen>
            <InnerBox>
              <form action="/login">
                <field>
                  <input
                    type="Email"
                    placeholder=" "
                  />
                  <label for="email" class="label">Email</label>
                </field>
                <field>
                  <input
                    type="Password"
                    placeholder=" "
                  />
                  <label for="password" class="label">Senha</label>
                </field>

                <button type="submit">Entrar</button>
              </form>
              </InnerBox>
          </InsideScreen>
        </Screen>
          </Envelocro>
        
        </Container>
        </Croquete>
      </>
    );
  }
  
  export default Login2;