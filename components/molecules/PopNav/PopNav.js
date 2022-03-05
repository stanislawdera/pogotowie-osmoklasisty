import { UnstyledLink } from "components/atoms/Card/Card.styles";
import Link from "next/link";
import React from "react";
import { PopNavItem, StyledPopNav } from "./PopNav.styles";

export default function PopNav({ isOpen = false, onItemClick, items = [] }) {
  return (
    <StyledPopNav isOpen={isOpen}>
      <ul>
        {items.map((item) => {
          return (
            <PopNavItem key={item.url}>
              <Link href={item.url} passHref>
                <UnstyledLink onClick={onItemClick}>{item.name}</UnstyledLink>
              </Link>
            </PopNavItem>
          );
        })}
      </ul>
    </StyledPopNav>
  );
}
