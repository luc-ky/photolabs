import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  const topicItems = topics.map((topic, index) => (
    <TopicListItem key={index} label={topic.title} link="#" />
  ));

  return <div className="top-nav-bar--topic-list">{topicItems}</div>;
};

export default TopicList;
