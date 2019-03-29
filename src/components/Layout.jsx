import React from "react";
import { Container, setConfiguration } from "react-grid-system";
import styled, { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

import color from "../shared/colors";
import background from "../assets/tiny-squares.png";

const Layout = ({ children }) => (
  <Page>
    <GlobalStyle />
    <Container>{children}</Container>
  </Page>
);

export default Layout;

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
`;

setConfiguration({
  breakpoints: [768, 992, 1200, 1540],
  containerWidths: [750, 960, 1140, 1140]
});

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};
  
    
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline-color: ${color.secondary};
  }
  
  body {
    font-family: "Lato", sans-serif;
    color: ${color.black};
    background-image: url(${background});
  }
  
  ::selection {
    color: ${color.white};
    background-color: ${color.secondary};
  }
`;
