import React, { useState } from "react";
import { Navbar } from "components/atoms/Navbar/Navbar.styles";
import MenuButton from "components/atoms/MenuButton/MenuButton";
import PopNav from "components/molecules/PopNav/PopNav";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar>
      <MenuButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <PopNav isOpen={isMenuOpen} />
    </Navbar>
  );
}
