import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;
