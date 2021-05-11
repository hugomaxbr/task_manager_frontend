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
                  <label for="email" class="label">Email</label>
                  <input
                    type="Email"
                    placeholder=" "
                  />
                </field>
                <field>
                  <label for="password" class="label">Senha</label>
                  <input
                    type="Password"
                    placeholder=" "
                  />
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