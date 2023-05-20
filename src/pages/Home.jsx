import React from "react";
import { Link } from "react-router-dom";
import SnapCard from "../components/shared/SnapCard";
import Story from "../components/shared/Story";
import Feature from "../components/shared/Feature";
import FeaturesGrid from "../components/home/FeaturesGrid";
import { features, homeData, stories } from "../data";
import StoriesGrid from "../components/shared/StoriesGrid";

const Home = () => {
  const featuredStories = stories.filter((story) => story.isFeatured === true);
  const featuresData = features.filter((feature, index) => index < 3);

  return (
    <div className="flex flex-col">
      {homeData.map((data, index) => {
        return <SnapCard key={index} data={data} index={index} />;
      })}
      <StoriesGrid stories={featuredStories} isDateDisplay={false} />
      <FeaturesGrid features={featuresData} />
    </div>
  );
};

export default Home;
