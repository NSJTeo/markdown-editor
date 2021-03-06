import { createGlobalStyle } from 'styled-components';
import RobotoSlabBoldWoff2 from '../assets/fonts/RobotoSlab-Bold.woff2';
import RobotoSlabBoldWoff from '../assets/fonts/RobotoSlab-Bold.woff';
import RobotoSlabLightWoff2 from '../assets/fonts/RobotoSlab-Light.woff2';
import RobotoSlabLightWoff from '../assets/fonts/RobotoSlab-Light.woff';
import RobotoSlabRegularWoff2 from '../assets/fonts/RobotoSlab-Regular.woff2';
import RobotoSlabRegularWoff from '../assets/fonts/RobotoSlab-Regular.woff';
import RobotoMediumWoff2 from '../assets/fonts/Roboto-Medium.woff2';
import RobotoMediumWoff from '../assets/fonts/Roboto-Medium.woff';
import RobotoRegularWoff2 from '../assets/fonts/Roboto-Regular.woff2';
import RobotoRegularWoff from '../assets/fonts/Roboto-Regular.woff';
import RobotoLightWoff2 from '../assets/fonts/Roboto-Light.woff2';
import RobotoLightWoff from '../assets/fonts/Roboto-Light.woff';
import CommissionerBoldWoff2 from '../assets/fonts/Commissioner-Bold.woff2';
import CommissionerBoldWoff from '../assets/fonts/Commissioner-Bold.woff';
import RobotoMonoRegularWoff2 from '../assets/fonts/RobotoMono-Regular.woff2';
import RobotoMonoRegularWoff from '../assets/fonts/RobotoMono-Regular.woff';

type GlobalStylesProps = {
  darkMode: boolean;
};

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
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
  @font-face {
    font-family: "Roboto Medium";
    src: url(${RobotoMediumWoff2}) format("woff2"),
      url(${RobotoMediumWoff}) format("woff");
    font-weight: 500;
    font-style: normal; 
  }
  @font-face {
    font-family: "Roboto Regular";
    src: url(${RobotoRegularWoff2}) format("woff2"),
      url(${RobotoRegularWoff}) format("woff");
    font-weight: 400;
    font-style: normal; 
  }
  @font-face {
    font-family: "Roboto Light";
    src: url(${RobotoLightWoff2}) format("woff2"),
      url(${RobotoLightWoff}) format("woff");
    font-weight: 300;
    font-style: normal; 
  }
  @font-face {
    font-family: "Commissioner Bold";
    src: url(${CommissionerBoldWoff2}) format("woff2"),
      url(${CommissionerBoldWoff}) format("woff");
    font-weight: 700;
    font-style: normal; 
  }
  @font-face {
    font-family: "Roboto Mono Regular";
    src: url(${RobotoMonoRegularWoff2}) format("woff2"),
      url(${RobotoMonoRegularWoff}) format("woff");
    font-weight: 400;
    font-style: normal; 
  }

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  html {
    background: ${({ darkMode }) => (darkMode ? '#151619' : '#FFF')};
  }
`;
