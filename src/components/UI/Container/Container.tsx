import { FC } from "react";
import classes from "./Container.module.css";

const Container: FC<{ cssClass?: string }> = ({ children, cssClass }) => {
  const classNames = `${classes.container} ${cssClass}`;
  return <div className={classNames}>{children}</div>;
};

Container.defaultProps = {
  cssClass: "",
};

export default Container;
