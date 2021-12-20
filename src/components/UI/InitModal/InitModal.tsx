import { useEffect } from "react";
import { createPortal } from "react-dom";
import useInitModal from "../../hooks/useInitModal";
import Card from "../Card/Card";
import Overlay from "../Overlay/Overlay";
import classes from "./InitModal.module.css";

const InitModal = () => {
  const { modalIsVisible, setModalIsVisible } = useInitModal();

  const disableModalHandler = () => {
    setModalIsVisible(false);
  };

  return createPortal(
    modalIsVisible && (
      <>
        <Overlay isModal onClickHandler={disableModalHandler} />
        <Card cssClass={classes.initModal}>
          <button type="button" onClick={disableModalHandler}>
            X
          </button>
        </Card>
      </>
    ),
    document.getElementById("content")!
  );
};

export default InitModal;
