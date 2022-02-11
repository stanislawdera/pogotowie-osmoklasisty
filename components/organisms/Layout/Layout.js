import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyle";
import { theme } from "styles/theme";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
