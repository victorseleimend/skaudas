import { useState } from "react";

import {
  faStore,
  faPhoneAlt,
  faRocket,
  faMapMarkedAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Container from "../../../UI/Container/Container";

import ContactInfo from "./ContactInfo/ContactInfo";
import SocialMediaInfo from "./SocialMediaInfo/SocialMediaInfo";
import BusinessHoursInfo from "./BusinessHoursInfo/BusinessHoursInfo";

import classes from "./Info.module.css";

const minimumHour = 18;
const maximumHour = 24;
const minimumDay = "Terça";
const maximumDay = "Domingo";

const Info = () => {
  const [inOpeningHour, setInOpeningHour] = useState(false);

  const inOpeningHourTooltip = (
    inOpeningHourHandler: (minHour: number, maxHour: number) => boolean
  ) => {
    setInOpeningHour(() => inOpeningHourHandler(minimumHour, maximumHour));
  };

  const contactNumberHandler = () => {
    window.open("https://api.whatsapp.com/send?phone=551125396713");
  };

  const contactEmailHandler = (type: string) => {
    if (type === "recrutamento") {
      window.location.href = "mailto:recrutamento@skaudas.com.br";
    } else if (type === "comercial") {
      window.location.href = "mailto:comercial@skaudas.com.br";
    } else {
      window.location.href = "mailto:ouvidoria@skaudas.com.br";
    }
  };

  return (
    <Container cssClass={classes.organizer}>
      <div>
        <h3>Contato</h3>
        <address>
          <ul>
            <ContactInfo
              onClickHandler={contactNumberHandler}
              icon={faWhatsapp}
              message="11 2539-6713"
            />
            <ContactInfo
              onClickHandler={() => contactEmailHandler("comercial")}
              icon={faStore}
              message="comercial@skaudas.com.br"
            />
            <ContactInfo
              onClickHandler={() => contactEmailHandler("ouvidoria")}
              icon={faPhoneAlt}
              message="ouvidoria@skaudas.com.br"
            />
            <ContactInfo
              onClickHandler={() => contactEmailHandler("recrutamento")}
              icon={faRocket}
              message="recrutamento@skaudas.com.br"
            />
            <ContactInfo
              icon={faMapMarkedAlt}
              message={`Avenida Casa Verde 3087,
              Casa Verde - São Paulo. CEP: 02519-200`}
            />
          </ul>
        </address>
      </div>
      <div>
        <h3>Redes Sociais</h3>
        <ul>
          <SocialMediaInfo icon={faInstagram} />
          <SocialMediaInfo icon={faFacebook} />
          <SocialMediaInfo icon={faLinkedin} />
        </ul>
      </div>
      <div>
        <h3>Horário de Atendimento</h3>
        <BusinessHoursInfo
          icon={faClock}
          message={`${minimumDay} à ${maximumDay} - ${minimumHour}:00 até as ${
            maximumHour === 24 ? "00" : maximumHour
          }:00`}
          inOpeningHourTooltip={inOpeningHourTooltip}
          inOpeningHour={inOpeningHour}
        />
      </div>
    </Container>
  );
};

export default Info;
