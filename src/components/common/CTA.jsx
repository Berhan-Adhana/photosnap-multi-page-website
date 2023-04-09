import React from "react";
import { Link } from "react-router-dom";
import beta from "../../assets/shared/mobile/bg-beta.jpg";
import betaTablet from "../../assets/shared/tablet/bg-beta.jpg";
import betaDesktop from "../../assets/shared/desktop/bg-beta.jpg";
const CTA = () => {
  return (
    <div className="w-full h-[288px] md:h-[280px] relative before:content-[''] before:absolute before:bg-mainAccent before:h-[4px] before:w-[128px] before:top-0 before:left-4 md:before:left-0 md:before:top-[50%] md:before:-translate-y-[50%] md:before:h-[280px] md:before:w-[4px] mt-[64px] md:mt-[112px] lg:mt-[160px] ">
      <picture>
        <source media="(min-width: 1024px)" srcSet={betaDesktop} />
        <source media="(min-width:768px)" srcSet={betaTablet} />
        <img src={beta} alt="beta" className="w-full object-cover h-full" />
      </picture>
      <div className="w-full absolute z-[999] top-[50%] -translate-y-[50%] px-10 flex flex-col gap-y-6  md:flex-row md:items-center  md:justify-between  lg:px-[165px] ">
        <h1 className="text-white md:w-[400px] ">
          We’re in beta. Get your invite today!
        </h1>
        <Link className="btn  md:w-[168px] btn-transparent-whiteArrow ">
          GET AN INVITE
        </Link>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-overlay h-full w-full" />
    </div>
  );
};

export default CTA;
