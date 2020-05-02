import React, { useRef, useState } from "react";
import MailConfig from "../Config";
import emailjs from "emailjs-com";
import FormNameInput from "./FormNameInput";
import FormMailInput from "./FormMailInput";
import "../styles/FormContact.scss";

const FormContact = () => {
  const nameInput = useRef();
  const mailInput = useRef();
  const messageInput = useRef();

  const [mailOK, setMailOK] = useState(true);
  const [nameOK, setNameOK] = useState(true);

  const handleFormSubmit = (e) => {
    const name = nameInput.current.value;
    const mail = mailInput.current.value;
    const message = messageInput.current.value;

    e.preventDefault();
    //validation
    const namePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    const mailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const correctName = namePattern.test(name);
    const correctMail = mailPattern.test(mail);

    if (correctMail && correctName) {
      // send mail
      const service_id = "default_service";
      const template_params = {
        from_name: name,
        from_mail: mail,
        message_html: message,
      };
      emailjs
        .send(
          service_id,
          MailConfig.template_id,
          template_params,
          MailConfig.user_id
        )
        .catch((err) => console.log(err));

      // clear inputs when email sended
      setMailOK(true);
      setNameOK(true);
      nameInput.current.value = "";
      mailInput.current.value = "";
      messageInput.current.value = "";
      alert("Wiadomość wysłana");
    } else {
      setMailOK(correctMail);
      setNameOK(correctName);
    }
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <FormNameInput ref={nameInput} ok={nameOK} />
      <FormMailInput ref={mailInput} ok={mailOK} />
      <textarea
        id="message"
        className="form__input form__input--text"
        name="message"
        ref={messageInput}
        placeholder="wiadomość"
      />
      <input className="form__btn" type="submit" value="wyślij" />
    </form>
  );
};

export default FormContact;
