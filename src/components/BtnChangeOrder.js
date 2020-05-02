import React from "react";
import "../styles/BtnChangeOrder.scss";

const BtnChangeOrder = ({ view, name, order, change, id }) => {
  if (view) {
    return (
      <div className="orderBtn">
        <input
          className={`${name} orderBtn__input`}
          type="number"
          value={order}
          onChange={change}
          name={name}
          id={id}
        />
      </div>
    );
  } else return null;
};
export default BtnChangeOrder;
