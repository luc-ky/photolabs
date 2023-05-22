import React from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {
    id,
    username,
    imageSource,
    hideUserName,
    isFavourite,
    favouritePhotos,
    addFavourite,
    delFavourite,
    openModal
  } = props;

  const handleClick = () => {
    openModal(id);
  };

  return (
    <article className="photo-list--item">
      <PhotoFavButton
        photoId={id}
        favouritePhotos={favouritePhotos}
        isFavourite={favouritePhotos.includes(id)}
        addFavourite={addFavourite}
        delFavourite={delFavourite}
      />
      <img
        src={imageSource}
        alt={`${username}'s photo`}
        className="photo-list--image"
        onClick={handleClick}
      />
    </article>
  );
};

export default PhotoListItem;
