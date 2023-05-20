import React, { useState } from "react";

import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, photos, onPhotoClick } = props;
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const addFavourite = (photoId) => {
    setFavouritePhotos((prevFavourites) => [...prevFavourites, photoId]);
  };

  const delFavourite = (photoId) => {
    setFavouritePhotos((prevFavourites) =>
      prevFavourites.filter((id) => id !== photoId)
    );
  };

  const handlePhotoClick = (photoId) => {
    setSelectedPhoto(photoId);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritePhotos={favouritePhotos} />
      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        addFavourite={addFavourite}
        delFavourite={delFavourite}
        onPhotoClick={handlePhotoClick}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photoId={selectedPhoto}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default HomeRoute;
