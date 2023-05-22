import React, { useState } from "react";

import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import topics from "./mocks/topics.json";
import photos from "./mocks/photos.json";
import "./App.scss";

const App = () => {
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

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        openModal={openModal}
        favouritePhotos={favouritePhotos}
        addFavourite={addFavourite}
        delFavourite={delFavourite}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photoId={selectedPhoto}
          photos={photos}
          openModal={openModal}
          closeModal={closeModal}
          favouritePhotos={favouritePhotos}
          addFavourite={addFavourite}
          delFavourite={delFavourite}
        />
      )}
    </div>
  );
};

export default App;