import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faPhoneAlt,
  faRocket,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import Container from "../../../UI/Container/Container";
import classes from "./Contact.module.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <Container cssClass={classes.contact}>
      <h3>Formas de contato</h3>
      <div>
        <div>
          <FontAwesomeIcon icon={faWhatsapp} />
          <a href="tel:1125396713">11 2539-6713</a>
          <div>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            <p>
              Avenida Casa Verde 3087, Casa Verde - São Paulo. CEP: 02519-200
            </p>
          </div>
        </div>
      </div>
      <div>
        <h4>Nossos e-mails de contato</h4>
        <div>
          <FontAwesomeIcon icon={faStore} />
          <a href="mailto:comercial@skaudas.com.br">comercial@skaudas.com.br</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhoneAlt} />
          <a href="mailto:ouvidoria@skaudas.com.br">ouvidoria@skaudas.com.br</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faRocket} />
          <a href="mailto:recrutamento@skaudas.com.br">
            recrutamento@skaudas.com.br
          </a>
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
