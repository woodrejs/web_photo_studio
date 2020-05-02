import React from "react";
import "../styles/Error.scss";

const Error = () => {
  return (
    <div className="error">
      <div className="error__box">
        <h1 className="error__title">404</h1>
        <span className="error__txt">Nie ma takiej strony :(</span>
      </div>
    </div>
  );
};

export default Error;
