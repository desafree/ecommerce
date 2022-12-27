import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    text-align: left;
    color: #F2F2F2;
    background-color: #f8f8fb;
    min-height: 100vh;
  }
`;
