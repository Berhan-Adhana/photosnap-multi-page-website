import React from "react";
import SocialIcons from "./SocialIcons";

const SocialMedia = ({ socialMedia }) => {
  return (
    <div className="flex items-center justify-center gap-x-[13.33px] lg:gap-y-[19px] cursor-pointer ">
      {socialMedia.map((social, index) => (
        <SocialIcons
          key={index}
          name={social.name}
          img={social.onHover}
          Icon={social.icon}
        />
      ))}
    </div>
  );
};

export default SocialMedia;
