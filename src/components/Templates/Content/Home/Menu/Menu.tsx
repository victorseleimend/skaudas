import Button from "../../../../UI/Button/Button";
import Container from "../../../../UI/Container/Container";

import classes from "./Menu.module.css";

import MenuImg from "../../../../../images/menu.png";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <Container>
        <div>
          <h3>Cardápio e Promoções</h3>
          <p>Fique atento a mudanças no cardápio e futuras promoções!</p>
          <div>
            <Button path="/cardapio">Veja nosso cardápio</Button>
          </div>
        </div>
        <div>
          <img src={MenuImg} alt="Um cardápio em cima de uma mesa" />
        </div>
      </Container>
    </div>
  );
};

export default Menu;
