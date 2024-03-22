import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --white: #ffffff;
  --green-100: #2fbb4f;
  --blue-100: #00a6fb;
  --blue-200: #0582ca;
  --blue-210: #0d74e7;
  --blue-300: #006494;
  --blue-400: #003554;
  --blue-500: #051923;
  --black-100: #373737;
  --black-200: #24292d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;

  /* @media screen and (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }

  @media screen and (max-width: 720px) {
    font-size: 87.5%; // 14px
  } */
}

body {
  margin: 0;
}

body, input, textarea, button {
  font-family: 'Source Code Pro', monospace, sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 700;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
