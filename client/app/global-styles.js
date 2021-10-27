import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Acme";
    src: url("/Acme.ttf")format("truetype");
  }
  @font-face {
    font-family: "KleeRegular";
    src: url("/KleeRegular.ttf")format("truetype");
  }
  html,
  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #303037;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #303037;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
