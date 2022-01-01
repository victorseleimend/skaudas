import { FC } from "react";
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

  const toTopHandler = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const closeMenuHandler = () => {
    setMobileMenuIsVisible(false);
    toTopHandler();
  };

  return mobileMenu ? (
    createPortal(
      <nav className={`${classes.navbar} ${classes.headerNav}`}>
        {mobileMenuIsVisible && <Overlay onClickHandler={closeMenuHandler} />}
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
        <Navlink closeMenuHandler={toTopHandler} path="/" message="Home" />
        <Navlink
          closeMenuHandler={toTopHandler}
          path="/cardapio"
          message="Cardápio"
        />
        <Navlink closeMenuHandler={toTopHandler} path="/app" message="App" />
        <Navlink
          closeMenuHandler={toTopHandler}
          path="/sobre"
          message="Sobre"
        />
        <Navlink
          closeMenuHandler={toTopHandler}
          path="/contato"
          message="Contato"
        />
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  mobileMenu: false,
};

export default Navbar;
