import React from "react";

const FormMailInput = React.forwardRef((props, ref) => {
  return (
    <>
      <input
        id="mail"
        className="form__input"
        type="mail"
        name="mail"
        noValidate
        ref={ref}
        placeholder="email"
      />
      <hr className="form__hr" />
      <div className="form__incorrect">
        {!props.ok && (
          <span className="form__incorectMessage">niepoprawne dane</span>
        )}
      </div>
    </>
  );
});

export default FormMailInput;
