import styled from "styled-components";

export const StyledNavbar = styled.ul`
  /* Don't display on mobile */
  display: none;

  ${({ theme }) => theme.media.desktop} {
    display: flex;
  }
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const NavbarItem = styled.a`
  display: block;
  text-decoration: none;
  color: white;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
  margin-left: ${({ theme }) => theme.spacing.xxl};

  &:hover {
    opacity: 1;
  }
`;

export const NavbarButton = styled(NavbarItem)`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: white;
  color: black;
  border-radius: 5px;
`;
