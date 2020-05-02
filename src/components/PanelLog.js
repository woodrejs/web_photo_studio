import React, { useState, useCallback, useRef, useMemo } from "react";
import * as firebase from "firebase";
import InputUser from "./InputUser";
import InputPassword from "./InputPassword";
import IncorrectTxt from "./IncorrectTxt";
import "../styles/PanelLog.scss";

const PanelLog = ({ click }) => {
  const user = useRef(null);
  const password = useRef(null);

  const [correctUser, setCorrectUser] = useState(true);
  const [correctPassword, setCorrectPassword] = useState(true);

  const infoTxt = useMemo(() => {
    return {
      user: "Podano błędny login. Spróbuj jeszcze raz.",
      password: "Podano błędne hasło. Spróbuj jeszcze raz.",
    };
  }, []);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const db = firebase.database();
    const ref = db.ref();
    //get password from db & make validation
    ref.once("value", (snapshot) => {
      const passwordPattern = new RegExp(`^${snapshot.val().admin}$`);
      const userPattern = /^admin$/;
      const userTest = userPattern.test(user.current.value);
      const passwordTest = passwordPattern.test(password.current.value);

      if (userTest && passwordTest) {
        click();
      } else {
        setCorrectUser(userTest);
        setCorrectPassword(passwordTest);
      }
    });
  }, []);

  return (
    <div className="log">
      <form onSubmit={handleSubmit} className="log__form">
        <InputUser ref={user}>użytkownik</InputUser>
        <IncorrectTxt correct={correctUser}>{infoTxt.user}</IncorrectTxt>

        <InputPassword ref={password}>hasło</InputPassword>
        <IncorrectTxt correct={correctPassword}>
          {infoTxt.password}
        </IncorrectTxt>

        <input type="submit" value="zaloguj" className="log__btn" />
      </form>
    </div>
  );
};

export default PanelLog;
