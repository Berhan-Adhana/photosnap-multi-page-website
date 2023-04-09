import React from "react";
import PricePlan from "./PricePlan";

const PricingGrid = ({ plans, isMonthly }) => {
  return (
    <div className="flex flex-col items-center gap-y-6 lg:flex-row lg:gap-x-[30px] lg:justify-center mt-6">
      {plans.map((plan, index) => {
        return (
          <PricePlan
            key={index}
            isMonthly={isMonthly}
            plan={plan}
            isBgBlack={index === 1 ? true : false}
          />
        );
      })}
    </div>
  );
};

export default PricingGrid;
