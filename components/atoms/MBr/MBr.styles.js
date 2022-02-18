import styled from "styled-components";

export const MBr = styled.br`
  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;
