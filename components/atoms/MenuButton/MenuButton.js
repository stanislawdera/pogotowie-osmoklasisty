import React from "react";
import { StyledMenuButton } from "./MenuButton.styles";

export default function MenuButton({ isOpen = false, onClick = () => {} }) {
  return (
    <StyledMenuButton onClick={onClick}>
      <div className={isOpen ? "active" : ""} />
      <div className={isOpen ? "active" : ""} />
      <div className={isOpen ? "active" : ""} />
    </StyledMenuButton>
  );
}
