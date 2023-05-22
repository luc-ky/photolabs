import React from "react";

import PhotoFavButton from "../components/PhotoFavButton";
import PhotoList from "../components/PhotoList";
import "../styles/PhotoDetailsModal.scss";

const PhotoDetailsModal = (props) => {
  const {
    isFavourite,
    favouritePhotos,
    addFavourite,
    delFavourite,
    openModal,
    closeModal,
    photoId,
    photos
  } = props;

  const photo = photos.find((photo) => photo.id === photoId);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal--close-button"
        onClick={closeModal}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal--images">
        <PhotoFavButton
          photoId={photoId}
          favouritePhotos={favouritePhotos}
          isFavourite={favouritePhotos.includes(photoId)}
          addFavourite={addFavourite}
          delFavourite={delFavourite}
        />
        <img
          className="photo-details-modal--image"
          src={photo.urls.small}
          alt={photo.description}
        />
        <header className="photo-details-modal--header">Similar Photos</header>
        <PhotoList
          photos={photos}
          favouritePhotos={favouritePhotos}
          addFavourite={addFavourite}
          delFavourite={delFavourite}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
