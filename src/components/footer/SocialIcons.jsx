import React, { useState } from "react";

const SocialIcons = ({ img, Icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const onHover = () => {
    setIsHovered(true);
  };
  const onUnHover = () => {
    setIsHovered(false);
  };
  return (
    <span onMouseOver={onHover} onMouseLeave={onUnHover}>
      {isHovered ? (
        <img src={img} alt={name} className="w-6 h-6" />
      ) : (
        <Icon className="text-white" size={24} />
      )}
    </span>
  );
};

export default SocialIcons;
