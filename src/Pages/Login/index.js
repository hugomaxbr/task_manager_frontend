import React from 'react';

import { Container, Form, Field } from './styles';
import { Button } from '../../Components/Button/styles';
import Header from '../../Components/Header/index';


function Login() {
  return (
    <>
      <Header children="Login">
      </Header>
      <Container>
        <Form action="/login">
          <Field>
            <input
              type="Email"
              placeholder=" "
            />
            <label for="email" class="label">Email</label>
          </Field>
          <Field>
            <input
              type="Password"
              placeholder=" "
            />
            <label for="password" class="label">Senha</label>
          </Field>

          <Button type="submit">Entrar</Button>
        </Form>
      </Container>

    </>
  );
}

export default Login;