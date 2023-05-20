import React from "react";
import { Link } from "react-router-dom";
import useViewportWidth from "../../hooks/useViewportWidth";
import Button from "../common/Button";

const SnapCard = ({ data, bgIsBlack = false, index = 0 }) => {
  const [viewportWidth] = useViewportWidth();
  return (
    <article
      className={`flex flex-col ${
        index === 0 ? "md:h-[650px]" : "md:h-[600px]"
      } ${data.isReversed ? "md:flex-row-reverse" : "md:flex-row "}`}
    >
      <div className=" md:w-1/3 lg:w-3/5">
        {viewportWidth >= 1024 && (
          <img
            src={data.imageDesktop}
            alt=""
            className=" object-cover h-full"
          />
        )}

        {viewportWidth >= 768 && viewportWidth < 1024 && (
          <img
            src={data.imageTablet}
            alt=""
            className=" object-cover h-full "
          />
        )}
        {viewportWidth < 768 && (
          <img src={data.image} alt="" className=" object-cover w-full  " />
        )}
      </div>

      <div
        className={`${
          index === 0 || bgIsBlack
            ? "bg-black before:content-[''] before:absolute before:bg-mainAccent before:h-[4px] before:w-[128px] before:top-0 before:left-4 md:before:left-0 md:before:top-[50%] md:before:-translate-y-[50%] md:before:h-[304px] md:before:w-[4px]"
            : "bg-background"
        } px-6 py-[72px] flex flex-col gap-y-4 items-start md:justify-center relative md:w-2/3 lg:w-2/5`}
      >
        <h1
          className={`${
            index === 0 || bgIsBlack ? "text-white " : "text-black"
          } uppercase`}
        >
          {data.title}
        </h1>
        <p
          className={`${
            index === 0 || bgIsBlack ? "text-white " : "text-black"
          } opacity-60 mix-blend-normal`}
        >
          {data.desc}
        </p>
        {/* <Link
          className={`${
            index === 0 || bgIsBlack
              ? "btn-transparent-whiteArrow w-[205px]"
              : "btn-transparent-blackArrow w-[205px]"
          } btn`}
        >
          VIEW THE STORIES
        </Link> */}
        <Button
        transparent
        blackArrow={!(index === 0 || bgIsBlack)}
        whiteArrow={index === 0 || bgIsBlack}
        // className="w-[205px]"
        >
          VIEW THE STORIES
        </Button>
      </div>
    </article>
  );
};

export default SnapCard;
