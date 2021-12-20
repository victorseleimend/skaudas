import { FC } from "react";
import { createPortal } from "react-dom";
import useMobileMenu from "../../hooks/useMobileMenu";

import classes from "./Overlay.module.css";

const Overlay: FC<{ onClickHandler: () => void; isModal?: boolean }> = ({
  onClickHandler,
  isModal,
}) => {
  return createPortal(
    <div
      role="none"
      style={{ zIndex: isModal ? 999 : 2 }}
      onClick={onClickHandler}
      className={classes.overlay}
    />,
    document.getElementById("layer")!
  );
};

Overlay.defaultProps = {
  isModal: false,
};

export default Overlay;
