import styled from "styled-components";

export const StyledMainHeader = styled.header`
  display: block;
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  line-height: 1;

  & h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: black;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  }

  & p {
    font-weight: bold;
  }
`;
