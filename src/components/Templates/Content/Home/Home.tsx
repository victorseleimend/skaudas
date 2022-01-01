import { useEffect } from "react";
import Carousel from "./Carousel/Carousel";

import About from "./About/About";
import Application from "./Application/Application";
import Menu from "./Menu/Menu";
import Contact from "./Contact/Contact";
import InitModal from "../../../UI/InitModal/InitModal";

const Home = () => {
  return (
    <>
      <InitModal />
      <Carousel />
      <Application />
      <Menu />
      <About />
      <Contact />
    </>
  );
};

export default Home;
