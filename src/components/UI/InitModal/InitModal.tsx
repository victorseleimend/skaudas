import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import useInitModal from "../../hooks/useInitModal";
import Overlay from "../Overlay/Overlay";
import classes from "./InitModal.module.css";

import pizzaPromo from "../../../images/pizzas.png";
import calzonesPromo from "../../../images/calzones.png";
import pepsiPromo from "../../../images/pepsi.png";

const InitModal = () => {
  const { modalIsVisible, setModalIsVisible } = useInitModal();
  const [modalNum, setModalNum] = useState(0);

  const disableModalHandler = () => {
    setModalIsVisible(false);
  };

  useEffect(() => {
    if (modalIsVisible) {
      document.querySelector("body")!.style.overflow = "hidden";
    } else {
      document.querySelector("body")!.style.overflow = "auto";
    }
  }, [modalIsVisible]);

  return createPortal(
    modalIsVisible && (
      <>
        <Overlay isModal onClickHandler={disableModalHandler} />
        <div className={classes.initModal}>
          <div>
            <div className={classes.modalBtns}>
              <button
                className={`${modalNum === 0 && classes.activated}`}
                type="button"
                aria-label="botão do primeiro slide da modal"
                onClick={() => setModalNum(0)}
              />
              <button
                className={`${modalNum === 1 && classes.activated}`}
                type="button"
                aria-label="botão do segundo slide da modal"
                onClick={() => setModalNum(1)}
              />
            </div>
            <button type="button" onClick={disableModalHandler}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          {modalNum === 0 ? (
            <div className={classes.open}>
              <h1>INAUGURAÇÃO!!!</h1>
              <h2>Será realizada no dia 15/01/2022</h2>
              <p>Prepare-se para sentir explosões de sabores!</p>
            </div>
          ) : (
            <div className={classes.promo}>
              <div>
                <h1>ATENÇÃO!!!</h1>
                <h2>Promoção de inauguração</h2>
                <p>Válido até 31/03/2022</p>
              </div>
              <div className={classes.modalContent}>
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
                <div>
                  <h3>Após comprar</h3>
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
              </div>
            </div>
          )}
        </div>
      </>
    ),
    document.getElementById("content")!
  );
};

InitModal.defaultProps = {
  open: false,
};

export default InitModal;
