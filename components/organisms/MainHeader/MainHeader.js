import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import React from "react";
import { StyledMainHeader } from "./MainHeader.styles";

export default function MainHeader() {
  return (
    <StyledMainHeader>
      <Wrapper>
        <h1>Pogotowie Ósmoklasisty</h1>
        <p>Warsztaty przygotowujące do Egzaminu&nbsp;Ósmoklasisty</p>
      </Wrapper>
    </StyledMainHeader>
  );
}
