import React from "react";
import Feature from "../shared/Feature";

const FeaturesGrid = ({ features }) => {
  return (
    <div className="grid mb-[80px] md:mb-[120px] grid-cols-1 lg:grid-cols-3 lg:gap-x-[30px]  gap-y-[56px] mt-[80px] app-container items-center">
      {features.map((feature, index) => (
        <Feature feature={feature} key={index} />
      ))}
    </div>
  );
};
export default FeaturesGrid;
