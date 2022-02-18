import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyle";
import { theme } from "styles/theme";
import Header from "../Header/Header";

export default function Layout({
  children,
  title = "",
  content = "",
  noHeader = false,
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!noHeader && <Header title={title} content={content} />}
      {children}
    </ThemeProvider>
  );
}
