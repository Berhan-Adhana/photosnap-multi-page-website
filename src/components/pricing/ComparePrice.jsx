import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Line from "./Line";

const ComparePrice = ({ features }) => {
  return (
    <div className="app-container">
      {/* Mobile  */}
      <div className="block md:hidden">
        <div className="block">
          <h3 className="mb-6 mt-[64px] ">THE FEATURES</h3>
          <Line background="black" />
        </div>
        <Line background="black" />
        {Object.keys(features).map((featureName) => (
          <div key={featureName}>
            <h4 className="block  mt-6 mb-4">{featureName}</h4>
            <ul className="flex justify-between">
              {features[featureName].map((feature) => (
                <li key={feature.name} className="">
                  <span className="block text-[10px] leading-[13px] tracking-[1.66667px] opacity-50 mix-blend-normal">
                    {/* Basic Pro Business */}
                    {feature.name}
                  </span>
                  {feature.isAvailable ? (
                    <AiOutlineCheck size={24} className="mt-4 mb-6  " />
                  ) : (
                    <div className="mt-4 mb-6 w-[130px] "></div>
                  )}
                </li>
              ))}
            </ul>
            <Line background="lightGrey" />
          </div>
        ))}
      </div>
      {/* Desktop and Tablet */}
      <div className="hidden md:block">
        <h1 className="uppercase text-center mb-[56px] mt-[160px]">COMPARE</h1>
        <div className="flex justify-between">
          <h4 className="mb-3 uppercase w-[260px]">THE FEATURES</h4>
          {Object.keys(features).map((featureName, index) => {
            {
              return (
                index === 0 &&
                features[featureName].map((feature, featureIndex) => {
                  return (
                    <div key={feature.name}>
                      <h4 className="uppercase text-black w-[130px] font-bold text-center">
                        {feature.name}
                      </h4>
                    </div>
                  );
                })
              );
            }
          })}
        </div>
        <Line background="black" />
        {Object.keys(features).map((featureName) => (
          <div key={featureName}>
            <ul className="flex justify-between">
              <h4 className="block mt-6 mb-4 w-[260px]  whitespace-nowrap">
                {featureName}
              </h4>

              {features[featureName].map((feature) => (
                <li key={feature.name} className="">
                  {feature.isAvailable ? (
                    <AiOutlineCheck
                      size={24}
                      className="mt-4 mb-6  w-[130px]"
                    />
                  ) : (
                    <div className="mt-4 mb-6  w-[130px]"></div>
                  )}
                </li>
              ))}
            </ul>
            <Line background="lightGrey" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparePrice;
