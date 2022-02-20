import styled from "styled-components";

export const Col = styled.div`
  width: 100%;
  ${({ theme }) => theme.media.desktop} {
    width: ${({ width = "50%" }) => width};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;
