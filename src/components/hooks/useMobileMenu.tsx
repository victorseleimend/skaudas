import { useContext } from "react";
import { mobileMenuCtx } from "../context/MobileMenuProvider";

const useMobileMenu = () => {
  const { mobileMenuIsVisible, setMobileMenuIsVisible } =
    useContext(mobileMenuCtx);
  return {
    mobileMenuIsVisible,
    setMobileMenuIsVisible,
  };
};

export default useMobileMenu;
