import React, { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favouritePhotos: [...state.favouritePhotos, action.payload.photoId]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.filter(
          (id) => id !== action.payload.photoId
        )
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload.photos
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload.topics
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: action.payload.photoId
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default function useApplicationData() {
  const initialState = {
    selectedPhoto: null,
    favouritePhotos: [],
    photos: [],
    topics: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { photoId: photo } });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { photoId: null } });
  };

  const addFavourite = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
  };

  const delFavourite = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
  };

  return {
    selectedPhoto: state.selectedPhoto,
    favouritePhotos: state.favouritePhotos,
    photos: state.photos,
    topics: state.topics,
    openModal,
    closeModal,
    addFavourite,
    delFavourite
  };
}