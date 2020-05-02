import React from "react";

const FormNameInput = React.forwardRef((props, ref) => {
  return (
    <>
      <input
        id="name"
        className="form__input"
        type="text"
        name="name"
        ref={ref}
        placeholder="imię i nazwisko"
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

export default FormNameInput;
