import styled from "styled-components";

export const StyledPopNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
`;
