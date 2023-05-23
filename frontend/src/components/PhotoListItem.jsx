import React from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {
    id,
    username,
    userAvatar,
    name,
    city,
    country,
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
      <div className="photo-list--user-details">
        <img className="photo-list--user-profile" src={userAvatar} alt="" />
        <div className="photo-list--user-info">
          {username}
          <div className="photo-list--user-location">
            {city}, {country}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
