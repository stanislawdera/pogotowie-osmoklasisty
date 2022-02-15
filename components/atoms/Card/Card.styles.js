import Link from "next/link";
import styled from "styled-components";

export const Card = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const UnstyledLink = styled.a`
  text-decoration: none !important;
  color: inherit !important;
  display: block !important;
`;
