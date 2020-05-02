import React from "react";
import "../styles/AsideMenu.scss";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const AsideMenu = ({ view, click }) => {
  if (view) {
    return (
      <>
        <div className="asideMenu">
          <Menu />
          <Footer />
        </div>
        <div className="asideMenu__mask"></div>
      </>
    );
  } else {
    return (
      <>
        <div className="asideMenu  asideMenu--active">
          <Menu />
          <Footer />
        </div>
        <div
          className="asideMenu__mask asideMenu__mask--active"
          onClick={click}
        ></div>
      </>
    );
  }
};

export default AsideMenu;
