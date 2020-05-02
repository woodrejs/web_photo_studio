import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Sessions from "../pages/Sessions";
import Session from "../pages/Session";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import Error from "../pages/Error";

const Main = ({ home, sessions, config }) => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sessions" exact component={Sessions} />
        <Route
          path="/sessions/:name"
          render={(props) => <Session info={props} />}
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default Main;
