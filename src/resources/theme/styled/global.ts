import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme: any }>`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    letter-spacing: .8px;
  }
`;
