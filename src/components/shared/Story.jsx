import React from "react";
import { Link } from "react-router-dom";
import useViewportWidth from "../../hooks/useViewportWidth";

const Story = ({ story, isDateDisplay = false }) => {
  const [viewportWidth] = useViewportWidth();
  return (
    <article className="relative hover:-top-6 transition-[top] duration-1000 delay-75">
      <div>
        {viewportWidth >= 768 && (
          <img
            src={story.imageDesktop}
            alt={story.title}
            className=" object-cover relative md:w-[384px] lg:w-[360px] md:h-[500px] "
          />
        )}
        {viewportWidth < 768 && (
          <img
            src={story.image}
            alt={story.title}
            className=" object-cover w-full relative h-[375px]"
          />
        )}
      </div>

      <div className="w-[310px] lg:w-[280px] text-white absolute top-[50%]  z-[100] flex flex-col  gap-y-4 left-[50%] -translate-x-[50%] px-10">
        {isDateDisplay && <p>{story.takenDate}</p>}
        <h3 className="text-white capitalize text-left">{story.title}</h3>
        <p className="text-[13px] leading-[16.93px] text-left">{`by ${story.capturedBy}`}</p>
        {/* Line */}
        <div className="h-[2px] w-full bg-lightGrey " />
        <Link className="btn btn-transparent-whiteArrow">READ STORY</Link>
      </div>
      {/* Overlay */}
      <div className="absolute w-full h-full inset-0 bg-overlay " />
    </article>
  );
};

export default Story;
