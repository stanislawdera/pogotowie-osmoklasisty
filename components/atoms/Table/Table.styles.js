import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #ddd;
    padding: ${({ theme }) => theme.spacing.md};
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    text-align: left;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
