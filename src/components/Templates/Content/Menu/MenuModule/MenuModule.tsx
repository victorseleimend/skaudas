import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import { FC, useEffect, useRef, useState } from "react";
import classes from "./MenuModule.module.css";
import Card from "../../../../UI/Card/Card";

const MenuModule: FC<{ m: any }> = ({ m }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [seeAll, setSeeAll] = useState(true);
  const [menuOpts, setMenuOpts] = useState<string[]>([]);
  // eslint-disable-next-line prettier/prettier
  const [filteredOptions, setFilteredOptions] = useState<string>();
  const [filter, setFilter] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const menuIsVisibleHandler = () => {
    setMenuIsVisible((v) => !v);
  };

  const seeAllHandler = (isVisible: string) => {
    if (isVisible === "seeAll") {
      setSeeAll(true);
      setMenuIsVisible(true);
      setFilter(false);
    } else {
      setSeeAll(false);
      setMenuIsVisible(true);
    }
  };

  useEffect(() => {
    if (menuIsVisible) {
      buttonRef.current?.classList.add("MenuModule_active__2xY0N");
    } else {
      buttonRef.current?.classList.remove("MenuModule_active__2xY0N");
    }
  }, [menuIsVisible]);

  useEffect(() => {
    if (m.type === "Pizzas") {
      setMenuOpts(["Brasileira", "Italiana", "Doce", "Integral", "Vegana"]);
    } else if (m.type === "Calzones") {
      setMenuOpts(["Brasileira", "Doce", "Integral", "Vegana"]);
    } else if (m.type === "Bordas") {
      setMenuOpts(["Brasileira", "Doce"]);
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
        <h3>{m.type}</h3>
        {m.type !== "Promoções" &&
          m.type !== "Esfihas" &&
          m.type !== "Bebidas" && (
            <div>
              <button
                type="button"
                className={`${seeAll && classes.activated}`}
                onClick={seeAllHandler.bind(null, "seeAll")}
              >
                Ver tudo
              </button>{" "}
              ou{" "}
              <button
                type="button"
                className={`${!seeAll && classes.activated}`}
                onClick={seeAllHandler.bind(null, "filter")}
              >
                Filtrar
              </button>
            </div>
          )}
        <button ref={buttonRef} type="button" onClick={menuIsVisibleHandler}>
          <FontAwesomeIcon icon={faSortDown} />
        </button>
      </div>
      {!seeAll && menuIsVisible && (
        <div className={classes.filter}>
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
          <div>
            <button type="button" onClick={filterClickHandler}>
              Filtrar
            </button>
          </div>
        </div>
      )}
      {seeAll &&
        menuIsVisible &&
        m.menu?.map((mn: any) => (
          <div className={classes.menuItems} key={mn.id}>
            <Card cssClass={classes.menuItem}>
              <h5>{mn.name}</h5>
              <p>{mn.description}</p>
            </Card>
          </div>
        ))}
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
