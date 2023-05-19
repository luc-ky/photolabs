import React, { useState } from "react";

import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, photos } = props;
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const addFavourite = (photoId) => {
    setFavouritePhotos((prevFavourites) => [...prevFavourites, photoId]);
  };

  const delFavourite = (photoId) => {
    setFavouritePhotos((prevFavourites) =>
      prevFavourites.filter((id) => id !== photoId)
    );
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritePhotos={favouritePhotos} />
      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        addFavourite={addFavourite}
        delFavourite={delFavourite}
      />
    </div>
  );
};

export default HomeRoute;
