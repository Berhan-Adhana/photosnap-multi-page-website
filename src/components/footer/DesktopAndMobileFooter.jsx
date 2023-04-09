import React from "react";
import SocialIcons from "./SocialIcons";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";
import Logo from "../shared/Logo";
import getYear from "../../util/getYear";

const DesktopAndMobileFooter = ({ logo, socialMedia, menu }) => {
  return (
    <div className="md:hidden flex lg:flex lg:flex-row lg:justify-between flex-col items-center lg:items-center justify-center py-[56px] h-[539px] lg:h-[250px] lg:py-[64px]">
      <div className="flex flex-col  lg:justify-between items-start gap-y-8 h-full">
        <Logo logo={logo} />
        <SocialMedia socialMedia={socialMedia} />
      </div>
      <div className="flex flex-col   text-white mt-[49px] lg:mt-0  gap-x-[13.33px] gap-y-5">
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className=" transition-colors uppercase duration-300 font-bold text-white text-[15px] leading-[19.53px] tracking-[2.5px] hover:text-lightGrey"
          >
            {item.item}
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-between items-center h-full gap-y-[34px] mt-[119px]  lg:gap-y-0 lg:mt-0">
        <Link className="btn w-[168px] btn-transparent-whiteArrow text-white  lg:self-start ">
          GET AN INVITE
        </Link>
        <p className="text-white lg:self-end opacity-50 mix-blend-normal text-[15px] leading-[20px]">
          {`Copyright ${getYear()}. All Rights Reserved`}
        </p>
      </div>
    </div>
  );
};

export default DesktopAndMobileFooter;
