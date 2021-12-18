import { useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./NotFound.module.css";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className={classes.notFound}>
      <h3>Erro 404</h3>
      <p>
        A página que você tentou acessar não foi encontrada. Retorne a{" "}
        <Link to="/">página inicial</Link>.
      </p>
    </div>
  );
};

export default NotFound;
