import { useEffect } from "react";
import classes from "./Application.module.css";
import Breadcrumb from "../../../UI/Breadcrumb/Breadcrumb";
import Container from "../../../UI/Container/Container";

const App = () => {
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
      <Breadcrumb links={["/", "/app"]} />
      <Container cssClass={classes.application}>
        <h3>Nós temos o nosso próprio app</h3>
        <p>
          Além de estar em todas as maiores plataformas de delivery do Brasil,
          nós ainda temos o nosso próprio app! O nosso app lhe oferece um
          sistema completo e uma interface extremamente amigável, então
          experimente-o agora e você não irá se arrepender.
        </p>
        <button type="button" onClick={redirectHandler.bind(this, "app")}>
          Baixe o App
        </button>
        <h3>Você ainda pode pedir pela web</h3>
        <p>
          Caso você prefira pedir pela web, então nós somos muito felizes em
          dizer que sim, nós também temos um menu virtual onde você possa
          começar a realizar seus pedidos! A Skaudas está aqui para oferecer o
          melhor para o nosso cliente, então comece a pedir por lá!
        </p>
        <button type="button" onClick={redirectHandler.bind(this, "menu")}>
          Menu Virtual
        </button>
      </Container>
    </>
  );
};

export default App;
