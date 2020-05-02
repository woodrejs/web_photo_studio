import React from "react";
import "../styles/Contact.scss";
import FormContact from "../components/FormContact";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__data">
          <h3 className="contact__title">dane konaktowe</h3>
          <span className="contact__info">Agnieszka podolan </span>
          <span className="contact__info">Tel: 733783939</span>
          <span className="contact__info">
            Mail: agapodofotografie@gmail.com
          </span>
        </div>
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
