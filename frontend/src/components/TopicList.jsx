import React from "react";

import useApplicationData from "../hooks/useApplicationData";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topics, selectedTopic, setSelectedTopic } = props;

  // function to select active topic then scroll to top
  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const topicItems = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      label={topic.title}
      link="#"
      onClick={() => handleTopicClick(topic)}
      active={selectedTopic && selectedTopic === topic.id} // used to change styling for active topic
    />
  ));

  return <div className="top-nav-bar--topic-list">{topicItems}</div>;
};

export default TopicList;
