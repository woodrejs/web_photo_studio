import React, { useState, useCallback, useRef, useMemo } from "react";
import * as firebase from "firebase";
import InputUser from "./InputUser";
import InputPassword from "./InputPassword";
import IncorrectTxt from "./IncorrectTxt";
import "../styles/PanelLog.scss";
require("dotenv").config();

const PanelLog = ({ click }) => {
  const inputUser = useRef(null);
  const inputPassword = useRef(null);

  const [userOk, setUserOk] = useState(true);
  const [passwordOk, setPasswordOk] = useState(true);

  const infoTxt = useMemo(() => {
    return {
      user: "Podano błędny login. Spróbuj jeszcze raz.",
      password: "Podano błędne hasło. Spróbuj jeszcze raz.",
    };
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const inputPasswordValue = inputPassword.current.value;
    const inputUserValue = inputUser.current.value;
    const ifUserOk = inputUserValue === process.env.REACT_APP_LOGIN;
    const ifPasswordOk = inputPasswordValue === process.env.REACT_APP_PASSWORD;

    if (ifUserOk && ifPasswordOk) {
      click();
    } else {
      setUserOk(ifUserOk);
      setPasswordOk(ifPasswordOk);
    }
  }, []);

  return (
    <div className="log">
      <form onSubmit={handleSubmit} className="log__form">
        <InputUser ref={inputUser}>użytkownik</InputUser>
        <IncorrectTxt correct={userOk}>{infoTxt.user}</IncorrectTxt>

        <InputPassword ref={inputPassword}>hasło</InputPassword>
        <IncorrectTxt correct={passwordOk}>{infoTxt.password}</IncorrectTxt>

        <input type="submit" value="zaloguj" className="log__btn" />
      </form>
    </div>
  );
};

export default PanelLog;
