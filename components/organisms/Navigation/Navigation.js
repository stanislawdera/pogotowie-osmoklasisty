import React, { useState } from "react";
import MenuButton from "components/atoms/MenuButton/MenuButton";
import PopNav from "components/molecules/PopNav/PopNav";
import routes from "./routes";
import { NavWrapper } from "components/atoms/NavWrapper/NavWrapper.styles";
import Navbar from "components/molecules/Navbar/Navbar";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = async () => {
    await setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <NavWrapper>
      {/* For desktop */}
      <Navbar items={routes} />

      {/* For mobile screens */}
      <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <PopNav isOpen={isMenuOpen} items={routes} onItemClick={toggleMenu} />
    </NavWrapper>
  );
}
