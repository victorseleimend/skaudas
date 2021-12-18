import { FC, useState } from "react";
import { createPortal } from "react-dom";
import classes from "./Navbar.module.css";

import Navlink from "./Navlink/Navlink";
import MobileMenu from "./MobileMenu/MobileMenu";
import Overlay from "../Overlay/Overlay";
import useMobileMenu from "../../hooks/useMobileMenu";

const Navbar: FC<{ mobileMenu?: boolean }> = ({ mobileMenu }) => {
  const { mobileMenuIsVisible, setMobileMenuIsVisible } = useMobileMenu();

  const getShowMobileMenu = (mobileMenuIsShowing: boolean) => {
    setMobileMenuIsVisible(mobileMenuIsShowing);
  };

  const closeMenuHandler = () => {
    setMobileMenuIsVisible(false);
  };

  return mobileMenu ? (
    createPortal(
      <nav className={`${classes.navbar} ${classes.headerNav}`}>
        {mobileMenuIsVisible && <Overlay />}
        <MobileMenu
          mobileMenuIsVisible={mobileMenuIsVisible}
          getShowMobileMenu={getShowMobileMenu}
        />
        <ul
          className={`${classes.mobileMenu} ${
            mobileMenuIsVisible ? classes.mobileMenuIsVisible : ""
          }`}
        >
          <Navlink
            closeMenuHandler={closeMenuHandler}
            path="/"
            message="Home"
          />
          <Navlink
            closeMenuHandler={closeMenuHandler}
            path="/cardapio"
            message="Cardápio"
          />
          <Navlink
            closeMenuHandler={closeMenuHandler}
            path="/app"
            message="App"
          />
          <Navlink
            closeMenuHandler={closeMenuHandler}
            path="/sobre"
            message="Sobre"
          />
          <Navlink
            closeMenuHandler={closeMenuHandler}
            path="/contato"
            message="Contato"
          />
        </ul>
      </nav>,
      document.getElementById("content")!
    )
  ) : (
    <nav className={classes.navbar}>
      <ul>
        <Navlink path="/" message="Home" />
        <Navlink path="/cardapio" message="Cardápio" />
        <Navlink path="/app" message="App" />
        <Navlink path="/sobre" message="Sobre" />
        <Navlink path="/contato" message="Contato" />
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  mobileMenu: false,
};

export default Navbar;
