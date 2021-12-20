import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import { FC, useEffect, useRef, useState } from "react";
import classes from "./MenuModule.module.css";
import Card from "../../../../UI/Card/Card";

const MenuModule: FC<{ m: any }> = ({ m }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [menuOpts, setMenuOpts] = useState<string[]>([]);
  // eslint-disable-next-line prettier/prettier
  const [filteredOptions, setFilteredOptions] = useState<string>();
  const [filter, setFilter] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const menuIsVisibleHandler = () => {
    setMenuIsVisible((v) => !v);
  };

  useEffect(() => {
    if (menuIsVisible) {
      buttonRef.current?.classList.add("MenuModule_active__2xY0N");
    } else {
      buttonRef.current?.classList.remove("MenuModule_active__2xY0N");
      setFilter(false);
    }
  }, [menuIsVisible]);

  useEffect(() => {
    if (m.type === "Pizzas") {
      setMenuOpts(["Brasileira", "Italiana", "Doce", "Integral", "Vegana"]);
    } else if (m.type === "Calzones") {
      setMenuOpts(["Brasileira", "Doce", "Integral", "Vegana"]);
    } else if (m.type === "Bordas") {
      setMenuOpts(["Brasileira", "Doce"]);
    } else if (m.type === "Bebidas") {
      setMenuOpts(["Refrigerante", "Cerveja"]);
    } else if (m.type === "Esfihas") {
      setMenuOpts(["Brasileira"]);
    }
  }, []);

  const onChangeHandler = (opts: string) => {
    setFilter(false);
    setFilteredOptions(opts);
  };

  const filterClickHandler = () => {
    setFilter(true);
  };

  return (
    <div>
      <div className={classes.menuModule}>
        <div>
          <h3>{m.type}</h3>
          {m.sizes && m.length && (
            <div>
              <p>Tamanhos: {m.sizes}</p>
              <span>/</span>
              <p>
                {m.type === "Esfihas" ? "Espessura:" : "Espessuras:"} {m.length}
              </p>
            </div>
          )}
        </div>
        <button ref={buttonRef} type="button" onClick={menuIsVisibleHandler}>
          <FontAwesomeIcon icon={faSortDown} />
        </button>
      </div>
      {menuIsVisible &&
        m.type === "Promoções" &&
        m.menu.map((mn: any) => (
          <div className={classes.menuItems} key={mn.id}>
            <Card cssClass={classes.menuItem}>
              <h5>{mn.name}</h5>
              <p style={{ textAlign: "justify" }}>{mn.description}</p>
            </Card>
          </div>
        ))}
      {menuIsVisible && m.type !== "Promoções" && (
        <div className={classes.filter}>
          <div>
            <h5>Escolha a Massa</h5>
            <div>
              {menuOpts.map((opts) => (
                <label htmlFor={`${m.type + opts}`} key={opts}>
                  <input
                    type="radio"
                    name="filter"
                    id={`${m.type + opts}`}
                    onChange={onChangeHandler.bind(this, opts)}
                  />
                  {opts}
                </label>
              ))}
            </div>
          </div>
          <div>
            <button type="button" onClick={filterClickHandler}>
              Filtrar
            </button>
          </div>
        </div>
      )}
      {filter &&
        filteredOptions &&
        m.menu?.map(
          (mn: any) =>
            mn.pasta.includes(filteredOptions) && (
              <div className={classes.menuItems} key={mn.id}>
                <Card cssClass={classes.menuItem}>
                  <h5>{mn.name}</h5>
                  <p>{mn.description}</p>
                </Card>
              </div>
            )
        )}
    </div>
  );
};

export default MenuModule;
