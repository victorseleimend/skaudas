import classes from "./Header.module.css";

import Navbar from "../../UI/Navbar/Navbar";
import Logo from "./Logo/Logo";

import Card from "../../UI/Card/Card";
import Container from "../../UI/Container/Container";

const Header = () => {
  return (
    <header>
      <Card cssClass={classes.header}>
        <Container cssClass={classes.organizer}>
          <Logo />
          <Navbar mobileMenu />
        </Container>
      </Card>
    </header>
  );
};

export default Header;
