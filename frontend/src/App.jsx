import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const App = () => {
  const photos = new Array(3);
  const renderedPhotos = photos
    .fill(null)
    .map((_, index) => <PhotoListItem key={index} />);

  return <div className="App">{renderedPhotos}</div>;
};

export default App;
