import React, { useState } from "react";
import "../styles/PanelAddImages.scss";
import BtnChangeOrderView from "./BtnChangeOrderView";
import BtnChangeOrder from "./BtnChangeOrder";
import InputAddImages from "./InputAddImages";
import * as firebase from "firebase";
import saveOrder from "../functions/saveOrder";
import addImage from "../functions/addImage";
import displayImages from "../functions/displayImages";

import removeFromStorage from "../functions/removeFromStorage";
import removeFromDataBase from "../functions/removeFromDataBase";

const PanelAddImages = ({ name, images, path, order, viewSession, id }) => {
  const [view, setView] = useState(false);
  const [show, setShow] = useState(!order);
  const [currOrder, setCurrOrder] = useState(order);

  const handleBtnOrderUpdate = (e) => {
    setCurrOrder(e.target.value);
  };
  const handleBtnAddImage = (e) => {
    addImage(e, images, path);
  };
  const handleBtnRemovePanel = () => {
    const database = firebase.database();
    const databaseRef = database.ref(path);

    if (images) {
      const storage = firebase.storage();
      let photos = Object.values(images);
      photos = [...photos];

      // remove from storage all image, from deleted panel
      photos.forEach(({ url }) => {
        const httpsReference = storage.refFromURL(url);
        removeFromStorage(httpsReference);
      });
    }

    removeFromDataBase(databaseRef); // delete panel from database
  };
  const handleBtnOrderViewChange = () => {
    setView(!view);
  };
  const handleBtnOrderSave = () => {
    const inputs = document.querySelectorAll(`input[type=number]`);
    const path = `sessions/${name}/photos`;
    saveOrder(inputs, path);
    setView(!view);
  };
  const Images = () => {
    if (images) return displayImages(images, view, path);
    else return null;
  };
  const hideImage = () => {
    setShow(!show);
  };

  return (
    <li id={id}>
      <div className="panelAddImages">
        <span className="panelAddImages__name" onClick={hideImage}>
          {name}
        </span>
        <BtnChangeOrder
          view={viewSession}
          order={currOrder}
          change={handleBtnOrderUpdate}
          name={name}
          id={id}
        />
        <BtnChangeOrderView
          view={view}
          click={handleBtnOrderViewChange}
          save={handleBtnOrderSave}
        />
        <InputAddImages
          change={(e) => handleBtnAddImage(e)}
          click={handleBtnRemovePanel}
          name={name}
        />
      </div>
      {show && <ul id={name}>{Images()}</ul>}
    </li>
  );
};

export default PanelAddImages;
