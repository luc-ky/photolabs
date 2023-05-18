import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, username, imageSource, hideUserName } = props;
  return (
    <article className="photo-list--item">
      <img
        src={imageSource}
        alt={`${username}'s photo`}
        className="photo-list--image"
      />
    </article>
  );
};

PhotoListItem.defaultProps = {
  username: "Jacob",
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;
