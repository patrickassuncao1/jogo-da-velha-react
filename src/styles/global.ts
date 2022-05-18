import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body{
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.colors.background};

  }

`;
