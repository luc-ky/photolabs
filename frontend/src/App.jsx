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

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        openModal={openModal}
        favouritePhotos={favouritePhotos}
        setFavouritePhotos={setFavouritePhotos}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photoId={selectedPhoto}
          photos={photos}
          closeModal={closeModal}
          favouritePhotos={favouritePhotos}
        />
      )}
    </div>
  );
};

export default App;