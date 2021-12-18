import SkaudasWhiteLogo from "../../../../images/skaudas-logo-branca.svg";

import classes from "./Copyright.module.css";

import Container from "../../../UI/Container/Container";

const Copyright = () => {
  return (
    <Container cssClass={`${classes.organizer} ${classes.copyright}`}>
      <img src={SkaudasWhiteLogo} alt="Logo da Skaudas" />
      <p>
        <small>&copy; 2021 - Skaudas Alimentos Ltda.</small> Todos os direitos
        reservados. Desenvolvido por <span>Victor Seleimend</span>.
      </p>
    </Container>
  );
};

export default Copyright;
