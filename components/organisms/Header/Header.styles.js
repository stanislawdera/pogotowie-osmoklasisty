import styled from "styled-components";
import { StyledMainHeader } from "../MainHeader/MainHeader.styles";

export const StyledHeader = styled(StyledMainHeader)`
  background: ${({ theme }) => theme.colors.primary};

  & h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.light};
  }

  & p {
    text-align: center;
    color: ${({ theme }) => theme.colors.light};
  }
`;
