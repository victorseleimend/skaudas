import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Button.module.css";

const Button: FC<{ path: string; color?: string; bgColor?: string }> = ({
  children,
  path,
  color,
  bgColor,
}) => {
  return (
    <NavLink
      style={{ color, backgroundColor: bgColor }}
      className={classes.button}
      to={path}
    >
      {children}
    </NavLink>
  );
};

Button.defaultProps = {
  color: "#da291c",
  bgColor: "white",
};

export default Button;
