import React from "react";

const InputPassword = React.memo(
  React.forwardRef(({ children }, ref) => {
    return (
      <>
        <label htmlFor="password" className="log__label">
          {children}
        </label>
        <input
          id="password"
          className="log__input"
          name="password"
          type="password"
          ref={ref}
        />
      </>
    );
  })
);
export default InputPassword;
