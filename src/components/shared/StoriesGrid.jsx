import React from "react";
import Story from "./Story";

const StoriesGrid = ({ stories, isDateDisplay }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {stories.map((story, index) => {
        return (
          <Story key={index} story={story} isDateDisplay={isDateDisplay} />
        );
      })}
    </div>
  );
};

export default StoriesGrid;
