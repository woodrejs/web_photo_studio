import React from "react";

const InputUser = React.memo(
  React.forwardRef(({ children }, ref) => {
    return (
      <>
        <label htmlFor="user" className="log__label">
          {children}
        </label>
        <input
          id="user"
          className="log__input"
          name="user"
          type="text"
          ref={ref}
        />
      </>
    );
  })
);
export default InputUser;
