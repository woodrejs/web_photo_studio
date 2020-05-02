import React, { useState, useRef } from "react";
import addSession from "../functions/addSession";
import PanelAddImages from "./PanelAddImages";
import BtnChangeOrderView from "./BtnChangeOrderView";
import NameInput from "./NameInput";
import * as firebase from "firebase";

const PanelAddSessions = ({ sessions }) => {
  const [view, setView] = useState(false);
  const inputRef = useRef();

  const handleBtnOrderSave = () => {
    /// select all inputs from 'PanelAddImage' to get values
    const inputs = document.querySelectorAll(
      "#panelAddSessions_ul .panelAddImages input[type=number]"
    );
    //save those values in obj and add to array
    const inputsArray = [];
    for (const input of inputs) {
      inputsArray.push({
        name: input.name,
        order: input.value,
      });
    }
    //conect with db and update order for each 'PanelAddImage'
    const db = firebase.database();
    const ref = db.ref("sessions");
    inputsArray.forEach(({ name, order }) => {
      ref
        .child(name)
        .update({ order })
        .catch((error) => {
          alert(error.name);
          window.location.href = "/";
        });
    });
    setView(!view);
  };
  const handleBtnAddSession = () => {
    const value = inputRef.current.value;
    if (value.length > 2) {
      const name = value.trim();
      const path = "sessions/";
      let order = 0;
      if (sessions) order = sessions.length + 1;

      addSession(name, path, order);
      inputRef.current.value = "";
    }
  };
  const displaySessions = () => {
    if (sessions) {
      let items = [...sessions];
      items = items.sort((a, b) => a.order - b.order);
      items = items.map(({ id, name, order, photos }) => (
        <PanelAddImages
          key={id}
          id={id}
          name={name}
          images={photos}
          path={`sessions/${name}`}
          viewSession={view}
          order={order}
        />
      ));
      return items;
    } else return null;
  };

  return (
    <div>
      <div id="panelAddSessions" className="sessionInput">
        <span>Sesje</span>
        <NameInput ref={inputRef} click={handleBtnAddSession} />
        <BtnChangeOrderView
          view={view}
          click={() => setView(!view)}
          save={handleBtnOrderSave}
        />
      </div>

      <ul id="panelAddSessions_ul">{displaySessions()}</ul>
    </div>
  );
};

export default PanelAddSessions;
