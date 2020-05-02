import React from "react";
import "../styles/BtnChangeOrderView.scss";

const BtnChangeOrderView = ({ save, click, view }) => {
  const showBtn = () => {
    if (view)
      return (
        <button className="btnChangeOrderView" onClick={save}>
          Zapisz
        </button>
      );
    else
      return (
        <button className="btnChangeOrderView" onClick={click}>
          zmień kolejność
        </button>
      );
  };
  return showBtn();
};

export default BtnChangeOrderView;
