import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
    background: #232222;
  }

  body {
    min-height: 100vh;
  }

  button, input {
    outline: none;
    border: 0;
  }
`;







