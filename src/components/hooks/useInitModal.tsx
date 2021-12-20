import { useContext } from "react";
import { initModalCtx } from "../context/InitModalProvider";

const useInitModal = () => {
  const { modalIsVisible, setModalIsVisible } = useContext(initModalCtx);
  return { modalIsVisible, setModalIsVisible };
};

export default useInitModal;
