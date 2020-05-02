import React from "react";
import "../styles/About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <h2 className="about__title">o mnie </h2>
        <h5 className="about__quotation">
          <em className="about__quotation--txt">
            „Staraj się pokazać to, czego bez ciebie, nikt by nie zobaczył”.
          </em>
          <em className="about__quotation--author"> Robert Bresson</em>
        </h5>
        <div className="about__text">
          <p className="about__indent">
            Witaj na mojej stronie! Mam na imię Aga i najbardziej kocham tworzyć
            portrety.
          </p>
          <p className="about__indent">
            Moje życie od zawsze opierało się na pracy artystycznej. Inspiruje
            mnie moda, (jestem miłośnikiem vintage) oraz różne dziedziny sztuki.
            Dziś pomaga mi to w kreowaniu rzeczywistości na potrzeby sesji
            zdjęciowych lub produktowych.
          </p>
          <p className="about__indent">
            Można powiedzieć, że moje prace odzwierciedlają mój charakter. Z
            jednej strony eklektyzm, nasycenie z drugiej klasyka, proste ujęcia,
            bez zbędnych dodatków, gdzie przede wszystkim światło buduje
            narrację i klimat. Dzięki tej mieszance mogę dopasować stylistykę do
            danej osoby w komfortowy dla niej sposób. Atmosfera podczas pracy
            jest dla mnie bardzo istotna.
          </p>
          <p className="about__indent">
            Co mnie najbardziej motywuje? Radość po otrzymaniu zdjęć oraz kiedy
            słyszę: „ nie sądziłam, że mogę tak pięknie wyglądać” lub „dziękuję,
            potrzebowałam tego dla siebie”.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
