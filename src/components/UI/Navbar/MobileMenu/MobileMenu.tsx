import { FC, useEffect, useState } from "react";

import classes from "./MobileMenu.module.css";

const MobileMenu: FC<{
  getShowMobileMenu: (showMobileMenu: boolean) => void;
  mobileMenuIsVisible: boolean;
}> = ({ getShowMobileMenu, mobileMenuIsVisible }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMobileMenuHandler = () => {
    setShowMobileMenu((mobileMenuIsShowing) => !mobileMenuIsShowing);
    getShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    if (mobileMenuIsVisible) {
      setShowMobileMenu(true);
    } else {
      setShowMobileMenu(false);
    }
  }, [mobileMenuIsVisible]);

  return (
    <button
      onClick={showMobileMenuHandler}
      type="button"
      className={`${classes.hamburgerMenu} ${
        showMobileMenu ? classes.hamburgerMenuActive : ""
      }`}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default MobileMenu;
