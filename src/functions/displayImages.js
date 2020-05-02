import PanelRemoveImage from "../components/PanelRemoveImage";
import React from "react";

export default function displayImages(images, view, path) {
  let imagesCol = Object.values(images);
  imagesCol = [...imagesCol];
  imagesCol = imagesCol.sort((a, b) => a.order - b.order);
  imagesCol = imagesCol.map(({ id, url, name, order }) => (
    <PanelRemoveImage
      key={id}
      id={id}
      url={url}
      name={name}
      view={view}
      path={path}
      order={order}
      imgName={name}
    />
  ));
  return imagesCol;
}
