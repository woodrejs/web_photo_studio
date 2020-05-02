import React, { Component } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Hamburger from "../components/Hamburger";

const Header = ({ click, view }) => {
  return (
    <div className="menuContainer">
      <div className="menuContainer__div">
        <Link to="/">
          <img
            className="menuContainer__logo"
            src={logo}
            alt="logo_icon"
            id="logo"
          />
        </Link>
        <Menu />
      </div>
      <Footer />
      <Hamburger view={view} click={click} />
    </div>
  );
};

export default Header;
