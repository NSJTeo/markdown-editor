import { createGlobalStyle } from 'styled-components';
import RobotoSlabBoldWoff2 from '../assets/fonts/RobotoSlab-Bold.woff2';
import RobotoSlabBoldWoff from '../assets/fonts/RobotoSlab-Bold.woff';
import RobotoSlabLightWoff2 from '../assets/fonts/RobotoSlab-Light.woff2';
import RobotoSlabLightWoff from '../assets/fonts/RobotoSlab-Light.woff';
import RobotoSlabRegularWoff2 from '../assets/fonts/RobotoSlab-Regular.woff2';
import RobotoSlabRegularWoff from '../assets/fonts/RobotoSlab-Regular.woff';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto Slab Bold";
    src: url(${RobotoSlabBoldWoff2}) format("woff2"),
      url(${RobotoSlabBoldWoff}) format("woff");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto Slab Light";
    src: url(${RobotoSlabLightWoff2}) format("woff2"),
      url(${RobotoSlabLightWoff}) format("woff");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto Slab Regular";
    src: url(${RobotoSlabRegularWoff2}) format("woff2"),
      url(${RobotoSlabRegularWoff}) format("woff");
    font-weight: 400;
    font-style: normal; 
  }

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
