import styled from "styled-components";

export const Alert = styled.div`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  border-radius: 3px;
  border: 1px #ffd0d0 solid;
  background-color: ${({ theme }) => theme.colors.errorLight};
  color: ${({ theme }) => theme.colors.error};

  ${({ theme }) => theme.media.desktop} {
    margin-left: ${({ theme }) => theme.spacing.sm};
  }
`;
