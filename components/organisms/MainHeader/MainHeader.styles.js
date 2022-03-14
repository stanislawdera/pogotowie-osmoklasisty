import styled from "styled-components";

export const StyledMainHeader = styled.header`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url("/images/pattern.png");
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  line-height: 1;

  & h1 {
    color: white;
    font-weight: black;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding-bottom: ${({ theme }) => theme.spacing.lg};
  }

  & p {
    font-weight: bold;
    color: white;
  }

  ${({ theme }) => theme.media.desktop} {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
      padding-bottom: ${({ theme }) => theme.spacing.xl};
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`;
