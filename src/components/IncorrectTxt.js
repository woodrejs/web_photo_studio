import React from "react";

const IncorrectTxt = React.memo(({ correct, children }) => {
  return (
    <div className="log__incorrect">
      {!correct && <span className="log__incorrectTxt">{children}</span>}
    </div>
  );
});
export default IncorrectTxt;
