import styled from "styled-components";

export const BigText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md} 0;
`;
