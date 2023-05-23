import React, { useReducer, useEffect } from "react";
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  SET_SELECTED_TOPIC: "SET_SELECTED_TOPIC",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favouritePhotos: [...state.favouritePhotos, action.payload.photoId],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.filter(
          (id) => id !== action.payload.photoId
        ),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload.photos,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload.topics,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: action.payload.photoId,
      };
    case ACTIONS.SET_SELECTED_TOPIC:
      return {
        ...state,
        selectedTopic: action.payload.topic.id,
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
    selectedTopic: "",
    favouritePhotos: [],
    photos: [],
    topics: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { photoId: photo },
    });
  };

  const closeModal = () => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { photoId: null },
    });
  };

  const addFavourite = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
  };

  const delFavourite = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
  };

  const setSelectedTopic = (topic) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: { topic } });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/topics")
      .then((res) => {
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: { topics: res.data },
        });
      })
      .catch((error) => {
        console.log("Error fetching topics:", error);
      });

    let url = `http://localhost:8001/api/${
      state.selectedTopic ? `topics/photos/${state.selectedTopic}` : "photos"
    }`;

    axios
      .get(url)
      .then((res) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photos: res.data },
        });
      })
      .catch((error) => {
        console.log(
          state.selectedTopic
            ? "Error fetching photos by topic:"
            : "Error fetching photos:",
          error
        );
      });
  }, [state.selectedTopic]);

  return {
    selectedPhoto: state.selectedPhoto,
    favouritePhotos: state.favouritePhotos,
    photos: state.photos,
    topics: state.topics,
    openModal,
    closeModal,
    addFavourite,
    delFavourite,
    selectedTopic: state.selectedTopic,
    setSelectedTopic,
  };
}
