import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  const topicItems = topics.map((topic) => (
    <TopicListItem key={topic.id} label={topic.title} link="#" />
  ));

  console.log(topicItems);
  return <div className="top-nav-bar--topic-list">{topicItems}</div>;
};

export default TopicList;
