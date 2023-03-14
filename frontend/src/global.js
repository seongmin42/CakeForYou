import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  @font-face {
    font-family: 'Nanum GarMaesGeur';
    src: url('../public/fonts/Nanum GarxMaesGeur.ttf') format('truetype');
`;

export default GlobalStyle;
