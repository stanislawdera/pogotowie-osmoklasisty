import Link from "next/link";
import React from "react";
import { StyledNavbar, NavbarItem, NavbarButton } from "./Navbar.styles";

export default function Navbar({ items = [] }) {
  return (
    <StyledNavbar>
      {items.map((item) => (
        <li key={item.url}>
          <Link href={item.url} passHref>
            {item.style == "button" ? (
              <NavbarButton>{item.name}</NavbarButton>
            ) : (
              <NavbarItem>{item.name}</NavbarItem>
            )}
          </Link>
        </li>
      ))}
    </StyledNavbar>
  );
}
