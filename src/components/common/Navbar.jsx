import React, { useEffect, useState } from "react";
import useScrollTop from "../../hooks/useScrollTop";
import DesktopNav from "../navbar/DesktopNav";
import MobileNav from "../navbar/MobileNav";

import logo from "../../assets/shared/desktop/logo.svg";
import { menu } from "../../data";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolledTop] = useScrollTop();

  const onMenuclose = () => setMenuOpen(false);
  const onMenuopen = () => setMenuOpen(true);
  return (
    <header className="h-[72px] flex items-center overflow-hidden relative">
      <DesktopNav logo={logo} menu={menu} />
      <MobileNav
        logo={logo}
        menu={menu}
        isScrolledTop={isScrolledTop}
        isMenuOpen={isMenuOpen}
        onMenuclose={onMenuclose}
        onMenuopen={onMenuopen}
      />
    </header>
  );
};

export default Navbar;
