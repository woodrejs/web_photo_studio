import React from "react";
import "../styles/Hamburger.scss";

const Hamburger = ({ view, click }) => {
  if (view) {
    return (
      <div className="hamburger" onClick={click}>
        <div className="hamburger__box">
          <div className="hamburger__line hamburger__line--top"></div>
          <div className="hamburger__line hamburger__line--mid"></div>
          <div className="hamburger__line hamburger__line--bot"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hamburger hamburger--active" onClick={click}>
        <div className="hamburger__box hamburger__box--active">
          <div className="hamburger__line hamburger__line--top hamburger__line--topActive"></div>
          <div className="hamburger__line hamburger__line--mid hamburger__line--midActive"></div>
          <div className="hamburger__line hamburger__line--bot hamburger__line--botActive"></div>
        </div>
      </div>
    );
  }
};

export default Hamburger;
