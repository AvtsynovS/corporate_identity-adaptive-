import { createGlobalStyle } from "styled-components";
import RobotoRegular from "./fonts/Roboto-Regular.ttf";
import RobotoRegularWoff from "./fonts/Roboto-Regular.woff2";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoRegularWoff}) format('woff2'),
       url(${RobotoRegular}) format('TrueType');
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}`;
