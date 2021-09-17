import { createGlobalStyle } from 'styled-components';

import mosquitoBackgroud from '../assets/Background.png';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: #ffffff url(${mosquitoBackgroud}) left bottom;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding:40px 20px;
    height: 100%;
  }
`;
