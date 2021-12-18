import Button from "../../../../UI/Button/Button";
import classes from "./Application.module.css";
import applicationPhoto from "../../../../../images/application.png";
import Container from "../../../../UI/Container/Container";
import Card from "../../../../UI/Card/Card";

const Application = () => {
  return (
    <Card cssClass={classes.application}>
      <Container>
        <div>
          <img
            src={applicationPhoto}
            alt="Uma pessoa segurando um celular, que em sua tela está repleta de apps"
          />
        </div>
        <div>
          <h3>Peça já a sua!</h3>
          <p>
            Realize seu pedido agora em nosso próprio app ou no menu digital!
          </p>
          <div>
            <Button path="/app" bgColor="#da291c" color="white">
              Peça já!
            </Button>
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default Application;
