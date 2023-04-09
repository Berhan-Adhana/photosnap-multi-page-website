import React, { useState } from "react";
import logo from "../../assets/shared/desktop/logo_light.svg";
import { menu, socialMedia } from "../../data";
import { Link } from "react-router-dom";
import Logo from "../shared/Logo";
import SocialIcons from "../footer/SocialIcons";
import DesktopAndMobileFooter from "../footer/DesktopAndMobileFooter";
import TabletFooter from "../footer/TabletFooter";

const Footer = () => {
  return (
    <footer className="bg-black app-container ">
      {/* {Desktop and mobile} */}
      <DesktopAndMobileFooter
        socialMedia={socialMedia}
        logo={logo}
        menu={menu}
      />

      {/* {tablet} */}
      <TabletFooter socialMedia={socialMedia} logo={logo} menu={menu} />
    </footer>
  );
};

export default Footer;
