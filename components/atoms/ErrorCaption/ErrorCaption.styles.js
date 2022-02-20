import styled from "styled-components";

export const ErrorCaption = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding-top: ${({ theme }) => theme.spacing.sm};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
