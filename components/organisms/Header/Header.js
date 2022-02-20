import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import React from "react";
import Navigation from "../Navigation/Navigation";
import { StyledHeader } from "./Header.styles";

export default function Header({ title, content }) {
  return (
    <StyledHeader>
      <Wrapper>
        <Navigation />
        <h1>{title}</h1>
        {content !== "" && <p>{content}</p>}
      </Wrapper>
    </StyledHeader>
  );
}
