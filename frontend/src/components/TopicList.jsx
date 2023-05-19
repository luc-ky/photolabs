import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {
  const topicItems = topics.map((topic) => (
    <TopicListItem key={topic.id} label={topic.title} link={topic.link} />
  ));

  console.log(topicItems);
  return <div className="top-nav-bar--topic-list">{topicItems}</div>;
};

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: "Nature",
      link: "link placeholder",
    },
    {
      id: 2,
      label: "Food",
      link: "link placeholder",
    },
    {
      id: 3,
      label: "People",
      link: "link placeholder",
    },
  ],
};

export default TopicList;
