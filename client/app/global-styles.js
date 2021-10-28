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

  .container {
      width: 480px;
      height: 800px;
      background: #0e0e0e;
      margin:  0 auto;
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0px 0px 20px 0px black;
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }

  .container_heading {
    color: #fdfdfd;
    font-family: Acme;
    font-size: 38px;
    letter-spacing: 2px;
    word-spacing: 10px;

    text-align: left;
  }

  .button {
    width: 80%;
    height: 80px;
    margin-bottom: 20px;

    background: linear-gradient(to right, #ba26e1, #d93eaf);
    border: none;
    border-radius: 20px;
    color: white;

    font-family: Acme;
    font-size: 24px;

    box-shadow: 0px 0px 20px 0px #c51ec394;
  }

  .container p {
    color: white;
    font-family: KleeRegular;
    font-size: 16px;
    margin-top: 0px;
    width: 90%;
  }
`;

export default GlobalStyle;
