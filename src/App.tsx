import { Routes, Route } from "react-router-dom";

import Header from "./components/Templates/Header/Header";

import Organizer from "./components/UI/Organizer/Organizer";
import NotFound from "./components/Templates/Content/NotFound/NotFound";
import Home from "./components/Templates/Content/Home/Home";
import Contact from "./components/Templates/Content/Contact/Contact";
import About from "./components/Templates/Content/About/About";
import Application from "./components/Templates/Content/Application/Application";
import Menu from "./components/Templates/Content/Menu/Menu";
import Footer from "./components/Templates/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Organizer>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<Menu />} />
            <Route path="/app" element={<Application />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Organizer>
    </>
  );
};

export default App;
