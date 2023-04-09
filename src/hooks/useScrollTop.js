import React, { useEffect, useState } from "react";

const useScrollTop = () => {
  const [isScrolledTop, setIsScrolledTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 72) setIsScrolledTop(true);
      else setIsScrolledTop(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return [isScrolledTop];
};

export default useScrollTop;
