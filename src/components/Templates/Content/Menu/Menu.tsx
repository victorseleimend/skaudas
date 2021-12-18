import { useEffect, useState } from "react";
import MenuItems from "./MenuItems";

import Breadcrumb from "../../../UI/Breadcrumb/Breadcrumb";
import Container from "../../../UI/Container/Container";

import classes from "./Menu.module.css";
import MenuModule from "./MenuModule/MenuModule";

const Menu = () => {
  const redirectHandler = (link: string) => {
    if (link === "app") {
      window.open(
        "https://play.google.com/store/apps/details?id=com.br.skaudas"
      );
    } else {
      window.open("https://deliveryapp.neemo.com.br/delivery/11159/menu");
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Breadcrumb links={["/", "/cardapio"]} />
      <Container cssClass={classes.menu}>
        <div className={classes.specs}>
          <h3>Tamanhos</h3>
          <div>
            <div>
              <h4>Pequena</h4>
              <p>25CM</p>
            </div>
            <div>
              <h4>Média</h4>
              <p>35CM</p>
            </div>
            <div>
              <h4>Grande</h4>
              <p>40CM</p>
            </div>
          </div>
        </div>
        <div className={classes.specs}>
          <h3>Espessuras</h3>
          <div>
            <div>
              <h4>Fina</h4>
              <p>2MM</p>
            </div>
            <div>
              <h4>Média</h4>
              <p>4MM</p>
            </div>
            <div>
              <h4>Grossa</h4>
              <p>6MM</p>
            </div>
          </div>
        </div>
        {MenuItems.map((m) => (
          <MenuModule key={m.id} m={m} />
        ))}
        <div className={classes.text}>
          <h3>Monte sua pizza!</h3>
          <p>
            Além de todo esse cardápio, você ainda pode escolher montar a sua
            própria pizza! Peça já em nosso{" "}
            <button type="button" onClick={redirectHandler.bind(this, "app")}>
              app
            </button>{" "}
            ou{" "}
            <button type="button" onClick={redirectHandler.bind(this, "menu")}>
              menu digital
            </button>
            .
          </p>
        </div>
      </Container>
    </>
  );
};

export default Menu;
