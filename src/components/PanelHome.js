import React, { useState } from "react";
import displayImages from "../functions/displayImages";
import InputAddImages from "./InputAddImages";
import BtnChangeOrderView from "./BtnChangeOrderView";
import addImage from "../functions/addImage";
import saveOrder from "../functions/saveOrder";

const PanelHome = ({ images }) => {
  const [view, setView] = useState(false);
  const [show, setShow] = useState(true);
  const path = "home";

  const handleBtnOrderSave = () => {
    const inputs = document.querySelectorAll(`input[type=number]`);
    const path = `home/photos`;
    saveOrder(inputs, path);
    setView(!view);
  };
  const Images = () => {
    if (images) return displayImages(images, view, path);
    else return null;
  };

  return (
    <div>
      <div id="panelHome">
        <span onClick={() => setShow(!show)}>Home</span>
        <BtnChangeOrderView
          view={view}
          click={() => setView(!view)}
          save={handleBtnOrderSave}
        />
        <InputAddImages
          change={(e) => addImage(e, images, path)}
          name={"home"}
        />
      </div>
      {show && <ul id="home">{Images()}</ul>}
    </div>
  );
};

export default PanelHome;
