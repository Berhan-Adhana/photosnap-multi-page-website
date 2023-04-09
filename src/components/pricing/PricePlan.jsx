import React from "react";

const PricePlan = ({ plan, isBgBlack, isMonthly = false }) => {
  return (
    <article
      className={`relative pt-[56px] pb-10 flex flex-col items-center md:items-start lg:items-center  px-10 w-[318px] lg:w-[350px]  md:w-full shadow-sm transition-all duration-500 ${
        isBgBlack
          ? "bg-black before:content-[''] before:absolute before:bg-mainAccent before:left-0 before:h-[4px] before:w-[318px]  md:before:w-full lg:before:w-[350px] before:top-0   "
          : "bg-bgcontainer"
      }`}
    >
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start  md:w-full lg:flex-col lg:items-center ">
        <div className="text-center md:text-left lg:text-center md:w-[270px] ">
          <h2 className={`${isBgBlack ? "!text-white" : "!text-black"}`}>
            {plan.name}
          </h2>
          <p
            className={`mt-[18px] opacity-60 mix-blend-normal ${
              isBgBlack ? "!text-white" : "!text-black"
            }`}
          >
            {plan.desc}
          </p>
        </div>
        {/* price */}
        <div className="text-center md:text-right lg:text-center md:self-end lg:self-center ">
          <h1
            className={`mt-10 lg:mt-10 ${
              isBgBlack ? "!text-white" : "!text-black"
            } md:mt-0`}
          >{` $ ${isMonthly ? plan.monthlyPrice : plan.yearlyPrice}`}</h1>
          <span
            className={`opacity-60 mix-blend-normal ${
              isBgBlack ? "!text-white" : "!text-black"
            }`}
          >
            {`per ${isMonthly ? "month" : "year"}`}
          </span>
        </div>
      </div>
      <button
        className={`btn ${
          isBgBlack
            ? "!text-black bg-white hover:bg-lightGrey"
            : "!text-white bg-black hover:bg-lightGrey hover:!text-black"
        } w-[245px] h-10 mt-10`}
      >
        PICK PLAN
      </button>
    </article>
  );
};

export default PricePlan;
