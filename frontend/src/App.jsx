import React from "react";

import HomeRoute from "./components/HomeRoute";
import topics from "./mocks/topics.json";
import photos from "./mocks/photos.json";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} />
    </div>
  );
};

export default App;
