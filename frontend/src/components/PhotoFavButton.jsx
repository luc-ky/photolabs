import React, { useCallback, useState } from "react";

import { FavIcon } from "./FavIcon";
import { FavBadge } from "./FavBadge";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [like, setLike] = useState(false);
  const toggleLike = () => setLike((previousLike) => !previousLike);

  return (
    <div className="photo-list--fav-icon" onClick={toggleLike}>
      <div className="photo-list--fav-icon-svg">
        {like ? <FavBadge /> : <FavIcon />}
      </div>
    </div>
  );
}

export default PhotoFavButton;
