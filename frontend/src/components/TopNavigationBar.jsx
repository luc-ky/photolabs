import React from "react";

import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const { topics, favouritePhotos } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge favouritePhotos={favouritePhotos} />
    </div>
  );
};

export default TopNavigation;
