import React from "react";
import "../styles/InputAddImages.scss";

const InputAddImages = ({ change, click, name }) => {
  return (
    <div className="addImg">
      <label className="addImg__label">
        <div className="addImg__btn">dodaj</div>
        <input className="addImg__input" type="file" onChange={change} />
      </label>
      <button className="addImg__rmv" onClick={click}>
        &#10006;
      </button>
    </div>
  );
};

export default InputAddImages;
