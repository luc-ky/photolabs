import React, { useState } from "react";

import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import topics from "./mocks/topics.json";
import photos from "./mocks/photos.json";
import "./App.scss";

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} onPhotoClick={handlePhotoClick} />
      {selectedPhoto && <PhotoDetailsModal photo={selectedPhoto} onCloseModal={handleCloseModal} />}
    </div>
  );
};

export default App;
