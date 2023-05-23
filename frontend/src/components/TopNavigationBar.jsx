import React from "react";

import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const { topics, favouritePhotos, selectedTopic, setSelectedTopic, closeModal } = props;

  // function to reset active topic and show all photos if logo is clicked, close modal if open, then scroll to top
  const handleLogoClick = () => {
    setSelectedTopic(null);
    closeModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
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
