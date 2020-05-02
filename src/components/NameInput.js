import React from "react";
import "../styles/NameInput.scss";

const NameInput = React.forwardRef((props, ref) => {
  return (
    <div className="nameInput">
      <input className="nameInput__input" type="text" ref={ref} />
      <button className="nameInput__btn" onClick={props.click}>
        &#x2b;
      </button>
    </div>
  );
});

export default NameInput;
