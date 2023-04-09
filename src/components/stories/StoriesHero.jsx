import React from "react";
import { Link } from "react-router-dom";
import useViewportWidth from "../../hooks/useViewportWidth";

const StoriesHero = ({ heroData }) => {
  const [viewportWidth] = useViewportWidth();
 
  return (
    <div className="relative">
      <div>
        {viewportWidth > 1024 && (
          <img
            src={heroData.imageDesktop}
            alt=""
            className="object-cover w-full h-[650px]"
          />
        )}
        {(viewportWidth >= 768) && (viewportWidth < 1024) && (
          <img
            src={heroData.imageTablet}
            alt=""
            className=" object-cover w-full h-[650px]"
          />
        )}
        {viewportWidth < 768 && (
          <img
            src={heroData.image}
            alt=""
            className=" object-cover w-full h-[317px]"
          />
        )}
      </div>

      <div className="bg-black md:bg-transparent text-white px-[30px] py-12 flex flex-col items-start gap-y-4 md:absolute md:top-0 md:w-[387px] md:left-10 lg:left-[112px]">
        <p>{heroData.tag}</p>
        <h1 className="text-white my-2">{heroData.title}</h1>
        <div>
          <span className="opacity-75 mix-blend-normal">March 2nd 2020</span>{" "}
          <span>by John Appleseed</span>
        </div>
        <p className="opacity-60 mix-blend-normal">{heroData.desc}</p>
        <Link className="btn btn-transparent-whiteArrow">READ THE STORY</Link>
      </div>
    </div>
  );
};

export default StoriesHero;
