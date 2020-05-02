import React, { useState } from "react";
import "../styles/PanelRemoveImage.scss";
import * as firebase from "firebase";
import BtnChangeOrder from "./BtnChangeOrder";
import removeFromStorage from "../functions/removeFromStorage";
import removeFromDataBase from "../functions/removeFromDataBase";

const PanelRemoveImage = ({ id, url, name, view, path, order, imgName }) => {
  const [currOrder, setCurrOrder] = useState(order);

  const handlerImageRemove = () => {
    const dbPath = `${path}/photos/${id}`;
    const httpsReference = firebase.storage().refFromURL(url);
    const databaseRef = firebase.database().ref(dbPath);

    // delete image from storage
    removeFromStorage(httpsReference);
    // delete image from database
    removeFromDataBase(databaseRef);
  };

  return (
    <li className="imageData">
      <img className="imageData__img" src={url} alt="admin_panel_thumbnail" />
      <BtnChangeOrder
        view={view}
        order={currOrder}
        change={(e) => setCurrOrder(e.target.value)}
        name={name}
        id={id}
      />
      <span className="imageData__span">{imgName}</span>
      <button className="imageData__btn" onClick={handlerImageRemove}>
        &#10006;
      </button>
    </li>
  );
};

export default PanelRemoveImage;
