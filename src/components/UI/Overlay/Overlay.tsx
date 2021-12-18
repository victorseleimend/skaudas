import { createPortal } from "react-dom";
import useMobileMenu from "../../hooks/useMobileMenu";

import classes from "./Overlay.module.css";

const Overlay = () => {
  const { setMobileMenuIsVisible } = useMobileMenu();

  return createPortal(
    <div
      role="none"
      onClick={() => setMobileMenuIsVisible(false)}
      className={classes.overlay}
    />,
    document.getElementById("layer")!
  );
};
export default Overlay;
