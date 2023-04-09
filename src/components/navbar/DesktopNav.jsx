import React from "react";
import { Link } from "react-router-dom";
import Logo from "../shared/Logo";

const DesktopNav = ({ logo, menu }) => {
  return (
    <nav className="hidden h-[72px]  md:flex justify-between items-center  w-full app-container   ">
      <Logo logo={logo} />
      <ul className="flex gap-x-[37px]">
        {menu.map((item, index) => {
          return index === 0 ? null : (
            <Link
              key={index}
              to={item.link}
              className=" transition-colors duration-300 hover:text-lightGrey"
            >
              {item.item}
            </Link>
          );
        })}
      </ul>
      <Link className="btn btn-black h-10 flex items-center justify-center">
        GET AN INVITE
      </Link>
    </nav>
  );
};

export default DesktopNav;
