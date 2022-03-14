import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.md};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
`;
