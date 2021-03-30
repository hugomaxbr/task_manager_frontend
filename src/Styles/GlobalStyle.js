import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Share Tech Mono', monospace;
  }

  body {
    min-height: 100vh;
  }

  button, input {
    outline: none;
    border: 0;
  }
`;







