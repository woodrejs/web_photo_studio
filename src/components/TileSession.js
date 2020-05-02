import React from "react";
import "../styles/TileSession.scss";
import { Link } from "react-router-dom";

const TileSession = ({ name, photos, delay }) => {
  //set first photo from session on thumbnail
  const path = `/sessions/${name}`;
  let thumbnailUrl = null;
  if (photos) {
    const images = Object.values(photos);
    thumbnailUrl = images[0].url;
  }

  return (
    <div
      className="tile"
      style={{ animation: `showUp 0.8s ${delay / 10}s forwards` }}
    >
      <Link className="tile__link" to={path}></Link>
      <div className="tile__container">
        <span className="tile__span">{name}</span>
      </div>
      <div className="tile__mask"></div>
      <img className="tile__image" src={thumbnailUrl} alt="thumbnail_img" />
    </div>
  );
};

export default TileSession;
