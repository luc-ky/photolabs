import React from "react";

import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const { topics, favouritePhotos, selectedTopic, setSelectedTopic } = props;

  const handleLogoClick = () => {
    window.location.reload();
  };
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo" onClick={handleLogoClick}>PhotoLabs</span>
      <TopicList
        topics={topics}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <FavBadge favouritePhotos={favouritePhotos} />
    </div>
  );
};

export default TopNavigation;
