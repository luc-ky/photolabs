import React from "react";

import useApplicationData from "../hooks/useApplicationData";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topics, selectedTopic, setSelectedTopic } = props;

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const topicItems = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      label={topic.title}
      link="#"
      onClick={() => handleTopicClick(topic)}
      active={selectedTopic && selectedTopic === topic.id}
    />
  ));

  return <div className="top-nav-bar--topic-list">{topicItems}</div>;
};

export default TopicList;
