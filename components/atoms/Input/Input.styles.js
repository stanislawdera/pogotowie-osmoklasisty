import styled from "styled-components";

export const Input = styled.input`
  border: solid 1px #c9c9c9;
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing.md};

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
