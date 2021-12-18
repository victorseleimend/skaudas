import { FC } from "react";

import { NavLink } from "react-router-dom";

import classes from "./Navlink.module.css";

const Navlink: FC<{
  path: string;
  message: string;
  closeMenuHandler?: () => void;
}> = ({ path, message, closeMenuHandler }) => {
  const activeClassName = (navData: { isActive: boolean }) =>
    navData.isActive ? classes.active : "";

  return (
    <li className={classes.navlink}>
      <NavLink onClick={closeMenuHandler} className={activeClassName} to={path}>
        {message}
      </NavLink>
      <div />
    </li>
  );
};

Navlink.defaultProps = {
  closeMenuHandler: () => {},
};

export default Navlink;
