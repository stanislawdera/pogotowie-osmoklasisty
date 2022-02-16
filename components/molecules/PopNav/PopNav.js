import React from "react";
import { StyledPopNav } from "./PopNav.styles";

export default function PopNav({ isOpen = false }) {
  return <StyledPopNav isOpen={isOpen}></StyledPopNav>;
}
