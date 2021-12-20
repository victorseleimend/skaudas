import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import useInitModal from "../../hooks/useInitModal";
import Overlay from "../Overlay/Overlay";
import classes from "./InitModal.module.css";

import pizzaPromo from "../../../images/pizzas.png";
import calzonesPromo from "../../../images/calzones.png";
import pepsiPromo from "../../../images/pepsi.png";

const InitModal = () => {
  const { modalIsVisible, setModalIsVisible } = useInitModal();

  const disableModalHandler = () => {
    setModalIsVisible(false);
  };

  return createPortal(
    modalIsVisible && (
      <>
        <Overlay isModal onClickHandler={disableModalHandler} />
        <div className={classes.initModal}>
          <button type="button" onClick={disableModalHandler}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className={classes.promo}>
            <div>
              <h1>ATENÇÃO!!!</h1>
              <h2>Promoção de inauguração</h2>
              <p>Válido até 31/03/2022</p>
            </div>
            <div className={classes.modalContent}>
              <div>
                <h3>Compre</h3>
                <div>
                  <div>
                    <img src={pizzaPromo} alt="Pizza" />
                    <p>Duas pizzas de 35CM</p>
                  </div>
                  <p>ou</p>
                  <div>
                    <img src={calzonesPromo} alt="Calzone" />
                    <p>Dois calzones de 35CM</p>
                  </div>
                </div>
              </div>
              <div>
                <h3>Ganhe</h3>
                <div>
                  <div>
                    <img src={pepsiPromo} alt="Refrigerante" />
                    <p>
                      Refrigerante de 2 litros (Pepsi, Fanta Laranja e Fanta
                      Uva)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
    document.getElementById("content")!
  );
};

export default InitModal;
