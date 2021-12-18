import Copyright from "./Copyright/Copyright";
import Info from "./Info/Info";

import Card from "../../UI/Card/Card";
import Navbar from "../../UI/Navbar/Navbar";
import Container from "../../UI/Container/Container";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <Card>
        <Info />
        <Container cssClass={classes.organizer}>
          <Navbar />
        </Container>
      </Card>
      <div className={classes.customizer}>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
