/* eslint-disable no-nested-ternary */
import { FC } from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import classes from "./Breadcrumb.module.css";

const Breadcrumb: FC<{ links: string[] }> = ({ links }) => {
  const activeClassName = (navData: { isActive: boolean }) =>
    navData.isActive ? classes.active : "";

  let element = "Home";
  if (links[links.length - 1] === "/sobre") {
    element = "Sobre";
  } else if (links[links.length - 1] === "/app") {
    element = "App";
  } else if (links[links.length - 1] === "/cardapio") {
    element = "Cardápio";
  }

  return (
    <div className={classes.breadcrumb}>
      <Container>
        <div>
          <h4>{element}</h4>
        </div>
        <div>
          {links.map((link) => (
            <div key={link}>
              <NavLink className={activeClassName} to={link}>
                {link === "/app"
                  ? "app"
                  : link === "/sobre"
                  ? "sobre"
                  : link === "/cardapio"
                  ? "cardápio"
                  : "home"}
              </NavLink>
              <span> / </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumb;
