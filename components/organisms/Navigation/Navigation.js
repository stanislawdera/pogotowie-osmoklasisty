import React, { useState } from "react";
import { Navbar } from "components/atoms/Navbar/Navbar.styles";
import MenuButton from "components/atoms/MenuButton/MenuButton";
import PopNav from "components/molecules/PopNav/PopNav";
import routes from "./routes";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = async () => {
    await setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <Navbar>
      <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <PopNav isOpen={isMenuOpen} items={routes} />
    </Navbar>
  );
}
