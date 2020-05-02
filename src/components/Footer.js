import React from "react";
import "../styles/Footer.scss";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a className="footer__link" href="https://www.instagram.com/aga_podo/">
          <img
            className="footer__socialIcon"
            src={instagram}
            alt="instagram_logo"
          />
        </a>
        <a
          className="footer__link"
          href="https://www.facebook.com/Aga-Podo-Fotografie-102625577997648/"
        >
          <img
            className="footer__socialIcon"
            src={facebook}
            alt="facebook-logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
