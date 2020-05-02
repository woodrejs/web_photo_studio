import React, { useState, useEffect, useCallback } from "react";
import "../styles/App.scss";
import "../styles/keyFrames.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import AsideMenu from "../components/AsideMenu";
import * as firebase from "firebase";
import { connect } from "react-redux";
import addSessions from "../actions/sessions.actions";
import addHome from "../actions/home.action";

const App = ({ config, addSessions, addHome, sessionsList, homeList }) => {
  const [show, setShow] = useState(true);

  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  useEffect(() => {
    //set sessions and home in store
    const db = firebase.database();
    const ref = db.ref();
    ref.on("value", (snapshot) => {
      const data = snapshot.val();

      if (data.sessions) {
        const sessions = Object.values(data.sessions);
        addSessions(sessions);
      } else addSessions(null);

      if (data.home) {
        const home = Object.values(data.home.photos);
        addHome(home);
      } else addHome(null);
    });
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <header className="app__header">
          <Header click={handleClick} view={show} />
        </header>
        <main className="app__main">
          <Main home={homeList} sessions={sessionsList} config={config} />
        </main>
        <aside className="app__aside">
          <AsideMenu view={show} click={handleClick} />
        </aside>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  sessionsList: state.sessions,
  homeList: state.home,
});
const mapDispatchToProps = (dispatch) => ({
  addSessions: (sessions) => dispatch(addSessions(sessions)),
  addHome: (home) => dispatch(addHome(home)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
