import Link from "next/link";
import styled from "styled-components";

export const Card = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const HoverableCard = styled(Card)`
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
    transform: translateY(-2px);
  }
`;

export const UnstyledLink = styled.a`
  text-decoration: none !important;
  color: inherit !important;
  display: block !important;
`;
