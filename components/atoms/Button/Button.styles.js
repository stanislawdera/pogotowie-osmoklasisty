import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  display: inline-block;
  text-decoration: none;
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;

  :hover {
    opacity: 0.9;
  }

  :disabled {
    background-color: #b3b3b3;
    cursor: not-allowed;
  }
`;
