import React from "react";

import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, username, imageSource, hideUserName } = props;

  return (
    <article className="photo-list--item">
      <PhotoFavButton />
      <img
        src={imageSource}
        alt={`${username}'s photo`}
        className="photo-list--image"
      />
    </article>
  );
};

export default PhotoListItem;
