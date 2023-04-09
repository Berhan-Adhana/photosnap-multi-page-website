import React from "react";
import { features } from "../data";
import FeaturesGrid from "../components/home/FeaturesGrid";
import SnapCard from "../components/shared/SnapCard";
import image from "../assets/features/mobile/hero.jpg";
import imageTablet from "../assets/features/tablet/hero.jpg";
import imageDesktop from "../assets/features/desktop/hero.jpg";
import CTA from "../components/common/CTA";

const featuresData = {
  image: image,
  imageTablet: imageTablet,
  imageDesktop: imageDesktop,
  title: "FEATURES",
  isReversed: true,
  desc: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
};

const Features = () => {
  return (
    <div>
      <SnapCard data={featuresData} bgIsBlack={true} />
      <FeaturesGrid features={features} />
      <CTA />
    </div>
  );
};

export default Features;
