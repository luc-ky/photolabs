import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  const photoItems = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      username={photo.username}
      imageSource={photo.imageSource}
      hideUserName={photo.hideUserName}
    />
  ));

  return <ul className="photo-list">{photoItems}</ul>;
};

PhotoList.defaultProps = {
  photos: [
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    },
  ],
};

export default PhotoList;
