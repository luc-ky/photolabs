import React, { useCallback, useState } from "react";

import { FavIcon } from "./FavIcon";
import { FavBadge } from "./FavBadge";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({
  photoId,
  favouritePhotos,
  isFavourite,
  addFavourite,
  delFavourite,
}) => {
  // function to toggle favourite photo
  const toggleFavourite = () => {
    if (isFavourite) {
      delFavourite(photoId);
    } else {
      addFavourite(photoId);
    }
  };

  return (
    <div className="photo-list--fav-icon" onClick={toggleFavourite}>
      <div className="photo-list--fav-icon-svg">
        {isFavourite ? (
          <FavBadge favouritePhotos={favouritePhotos} isPhoto={true} />
        ) : (
          <FavIcon />
        )}
      </div>
    </div>
  );
};

export default PhotoFavButton;
