import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  const photoItems = photos.map((photo) => (
    <PhotoListItem
      username={photo.user.name}
      imageSource={photo.urls.regular}
      hideUserName={photo.hideUserName}
      key={photo.id}
      id={photo.id}
    />
  ));

  return <ul className="photo-list">{photoItems}</ul>;
};

export default PhotoList;
