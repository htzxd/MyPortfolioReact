import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    
    background-color: ${({ theme })=> theme.colors.bg_secondary};
  }

  body, h1, h2, p, a {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme })=> theme.colors.text_color};
  }
`