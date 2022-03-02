import { Section } from "components/atoms/Section/Section.styles";
import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import React from "react";
import { StyledMainHeader } from "./MainHeader.styles";

export default function MainHeader() {
  return (
    <StyledMainHeader>
      <Wrapper>
        <Section as="div">
          <h1>Pogotowie Ósmoklasisty</h1>
          <p>Warsztaty przygotowujące do Egzaminu&nbsp;Ósmoklasisty</p>
        </Section>
      </Wrapper>
    </StyledMainHeader>
  );
}
