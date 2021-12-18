import { faEye, faStar, faFlag } from "@fortawesome/free-solid-svg-icons";
import classes from "./About.module.css";
import AboutContent from "./AboutContent/AboutContent";
import Title from "../../../../UI/Title/Title";

import Container from "../../../../UI/Container/Container";
import EnterpriseAbout from "./EnterpriseAbout/EnterpriseAbout";

const About = () => {
  return (
    <div className={classes.about}>
      <Container>
        <h3>Sobre nós</h3>
        <AboutContent />
      </Container>
      <div>
        <Container>
          <EnterpriseAbout
            title="Missão"
            icon={faFlag}
            message="Oferecer produtos diferenciados, promovendo ao consumidor
            sensações ao despertar os sabores."
          />
          <EnterpriseAbout
            title="Visão"
            icon={faEye}
            message="Ser uma empresa do setor de alimentos, reconhecida pelo consumidor
            pela qualidade e por despertar os sentidos dos sabores."
          />
          <EnterpriseAbout
            title="Valores"
            icon={faStar}
            message=" Ética, sustentabilidade, qualidade, respeito, pontualidade,
            responsabilidade, cordialidade."
          />
        </Container>
      </div>
    </div>
  );
};

export default About;
