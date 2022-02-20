import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};

  :hover {
    opacity: 0.9;
  }
`;
