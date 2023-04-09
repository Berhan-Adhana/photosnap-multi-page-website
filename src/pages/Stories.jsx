import React from "react";
import { stories } from "../data";
import StoriesGrid from "../components/shared/StoriesGrid";
import StoriesHero from "../components/stories/StoriesHero";
import image from "../assets/stories/mobile/moon-of-appalacia.jpg";
import imageTablet from "../assets/stories/tablet/moon-of-appalacia.jpg";
import imageDesktop from "../assets/stories/desktop/moon-of-appalacia.jpg";
const storiesHeroDta = {
  image: image,
  imageTablet: imageTablet,
  imageDesktop: imageDesktop,
  title: "HAZY FULL MOON OF APPALACHIA",
  takenDate: "March 2nd 2020",
  captureBy: "by John Appleseed",
  desc: "The dissected plateau area, while not actually made up of geological 'mountains', is popularly called mountains, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.",
  tag: "LAST MONTH’S FEATURED STORY",
};
const Stories = () => {
  return (
    <div>
      <StoriesHero heroData={storiesHeroDta} />
      <StoriesGrid stories={stories} isDateDisplay={true} />
    </div>
  );
};

export default Stories;
