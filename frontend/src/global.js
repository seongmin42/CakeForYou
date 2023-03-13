import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  @font-face {
    font-family: 'Nanum GarMaesGeur';
    src: url('./fonts/Nanum GarMaesGeur.ttf') format('truetype');
`;

export default GlobalStyle;
