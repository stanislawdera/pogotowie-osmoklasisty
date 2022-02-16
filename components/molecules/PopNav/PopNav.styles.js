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

  display: flex;
  align-items: center;
  justify-content: center;

  & > ul {
    list-style: none;
    text-align: center;
  }

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const PopNavItem = styled.li`
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: ${({ theme }) => theme.spacing.md};
`;
