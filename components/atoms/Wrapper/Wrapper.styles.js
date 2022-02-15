import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.media.desktop} {
    max-width: 1000px;
    margin: 0 auto;
  }
`;
