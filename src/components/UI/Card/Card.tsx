import { FC } from "react";
import classes from "./Card.module.css";

const Card: FC<{ cssClass?: string }> = ({ children, cssClass }) => {
  const classNames = `${classes.card} ${cssClass}`;
  return <div className={classNames}>{children}</div>;
};

Card.defaultProps = {
  cssClass: "",
};

export default Card;
