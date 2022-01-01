import { faFlag, faStar, faEye } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Container from "../../../UI/Container/Container";
import AboutContent from "../Home/About/AboutContent/AboutContent";
import EnterpriseAbout from "../Home/About/EnterpriseAbout/EnterpriseAbout";
import Brand from "./Brand/Brand";
import Breadcrumb from "../../../UI/Breadcrumb/Breadcrumb";

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <Breadcrumb links={["/", "/sobre"]} />
      <Container>
        <h3>Sobre nós</h3>
        <AboutContent about />
      </Container>
      <div>
        <Container>
          <EnterpriseAbout
            title="Missão"
            icon={faFlag}
            message="Oferecer produtos diferenciados com a ambição de despertar os sabores, promovendo sensações de satisfação aos clientes."
          />
          <EnterpriseAbout
            title="Visão"
            icon={faEye}
            message="Ser uma empresa do setor de alimentos reconhecida por despertar os sentidos dos sabores e pela qualidade oferecida aos seus clientes."
          />
          <EnterpriseAbout
            title="Valores"
            icon={faStar}
            message="Ética, sustentabilidade, qualidade, respeito, pontualidade, responsabilidade, cordialidade."
          />
        </Container>
      </div>
      <Container>
        <Brand />
      </Container>
    </div>
  );
};

export default About;
