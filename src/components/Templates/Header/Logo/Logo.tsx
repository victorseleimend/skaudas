import { NavLink } from "react-router-dom";

import SkaudasLogo from "../../../../images/skaudas-logo.svg";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <NavLink to="/">
      <img className={classes.logo} src={SkaudasLogo} alt="Logo da Skaudas" />
    </NavLink>
  );
};

export default Logo;
