import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, favouritePhotos, addFavourite, delFavourite, openModal } = props;

  const photoItems = photos.map((photo) => (
    <PhotoListItem
      username={photo.user.username}
      name={photo.user.name}
      city={photo.location.city}
      country={photo.location.country}
      imageSource={photo.urls.regular}
      userAvatar={photo.user.profile}
      hideUserName={photo.hideUserName}
      key={photo.id}
      id={photo.id}
      favouritePhotos={favouritePhotos}
      isFavourite={favouritePhotos.includes(photo.id)}
      addFavourite={addFavourite}
      delFavourite={delFavourite}
      openModal={openModal}
    />
  ));

  return <ul className="photo-list">{photoItems}</ul>;
};

export default PhotoList;
