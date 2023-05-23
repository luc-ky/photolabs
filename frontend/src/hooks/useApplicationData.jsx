import React, { useState } from "react";

export default function useApplicationData() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const addFavourite = (photoId) => {
    setFavouritePhotos((prevFavourites) => [...prevFavourites, photoId]);
  };

  const delFavourite = (photoId) => {
    setFavouritePhotos((prevFavourites) =>
      prevFavourites.filter((id) => id !== photoId)
    );
  };

  return {
    selectedPhoto,
    favouritePhotos,
    openModal,
    closeModal,
    addFavourite,
    delFavourite,
  };
}