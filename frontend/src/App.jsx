import React, { useState } from "react";

import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";

const App = () => {
  const {
    topics,
    photos,
    selectedPhoto,
    favouritePhotos,
    openModal,
    closeModal,
    addFavourite,
    delFavourite
  } = useApplicationData();

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