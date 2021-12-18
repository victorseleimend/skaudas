import { FC } from "react";

import classes from "./FooterButton.module.css";

const FooterButton: FC<{ onClickHandler: () => void }> = ({
  children,
  onClickHandler,
}) => {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={classes.footerButton}
    >
      {children}
    </button>
  );
};

export default FooterButton;
