import React from "react";

const Line = ({ background }) => {
  return <div className={`w-full h-[1px] bg-${background} `} />;
};

export default Line;
