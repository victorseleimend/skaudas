import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPhoneVolume,
  faHandshake,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Container from "../../../UI/Container/Container";
import classes from "./Contact.module.css";

const Contact = () => {
  const [view, setView] = useState(false);

  const contactNumberHandler = () => {
    window.open("https://api.whatsapp.com/send?phone=551125396713");
  };

  const addressView = () => {
    setView((v) => !v);
  };

  return (
    <Container cssClass={classes.contact}>
      <h3>Formas de contato</h3>
      <div>
        <button type="button" onClick={contactNumberHandler}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </button>
        <button type="button" onClick={addressView}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </button>
      </div>
      {view && (
        <p>Avenida Casa Verde 3087, Casa Verde - São Paulo. CEP: 02519-200</p>
      )}
      <div>
        <h4>Nossos e-mails de contato</h4>
        <div className={classes.emails}>
          <div>
            <a href="mailto:comercial@skaudas.com.br">
              <FontAwesomeIcon icon={faEdit} />
            </a>
            <p>Comercial</p>
          </div>
          <div>
            <a href="mailto:ouvidoria@skaudas.com.br">
              <FontAwesomeIcon icon={faPhoneVolume} />
            </a>
            <p>Ouvidoria</p>
          </div>
          <div>
            <a href="mailto:recrutamento@skaudas.com.br">
              <FontAwesomeIcon icon={faHandshake} />
            </a>
            <p>Recrutamento</p>
          </div>
        </div>
      </div>
      <div className={classes.sm}>
        <h4>Redes sociais</h4>
        <div>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
