import React from "react";
import menuButton from "../../assets/shared/mobile/menu.svg";
import closeButton from "../../assets/shared/mobile/close.svg";
import { Link } from "react-router-dom";
import Logo from "../shared/Logo";

const MobileNav = ({
  logo,
  isMenuOpen,
  isScrolledTop,
  onMenuclose,
  onMenuopen,
  menu,
}) => {
  return (
    <nav
      className={`flex md:hidden  ${isMenuOpen ? "bg-white" : ""}   ${
        isScrolledTop ? "shadow-md bg-white" : "shadow-none"
      }  items-center z-[9999]  justify-between fixed h-[72px]   app-container`}
    >
      <Logo logo={logo} />

      {!isMenuOpen && (
        <img
          src={menuButton}
          alt="menu-bar"
          onClick={onMenuopen}
          className="cursor-pointer"
        />
      )}
      {isMenuOpen && (
        <img
          src={closeButton}
          alt="close button"
          onClick={onMenuclose}
          className="cursor-pointer"
        />
      )}
      <div
        className={` app-container  fixed top-[60px] z-[9999] transition-all duration-500 ${
          isMenuOpen ? "right-0" : "-right-[100%]"
        } pt-8 flex flex-col items-center  gap-y-5 bg-white`}
      >
        <ul className="flex flex-col items-center justify-center gap-x-[37px] gap-y-5 ">
          {menu.map((item, index) => {
            return index === 0 ? null : (
              <Link
                key={index}
                to={item.link}
                className=" transition-colors duration-300 font-bold text-[15px] leading-[19.53px] tracking-[2.5px] hover:text-lightGrey"
              >
                {item.item}
              </Link>
            );
          })}
        </ul>
        <div className="h-[2px]  w-full bg-lightGrey" />
        <Link className="btn btn-black w-full h-12 flex items-center justify-center mb-8">
          GET AN INVITE
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
