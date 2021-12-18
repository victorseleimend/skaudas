import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import { FC, useEffect, useRef, useState } from "react";
import classes from "./MenuModule.module.css";
import Card from "../../../../UI/Card/Card";

const MenuModule: FC<{ m: any }> = ({ m }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const menuIsVisibleHandler = () => {
    setMenuIsVisible((v) => !v);
  };

  useEffect(() => {
    if (menuIsVisible) {
      console.log(buttonRef.current?.parentElement?.querySelector("button"));
      buttonRef.current?.classList.add("MenuModule_active__2xY0N");
    } else {
      console.log(buttonRef.current?.parentElement?.querySelector("button"));
      buttonRef.current?.classList.remove("MenuModule_active__2xY0N");
    }
  }, [menuIsVisible]);

  return (
    <div>
      <div className={classes.menuModule}>
        <h3>{m.type}</h3>
        <button ref={buttonRef} type="button" onClick={menuIsVisibleHandler}>
          <FontAwesomeIcon icon={faSortDown} />
        </button>
      </div>
      {menuIsVisible &&
        m.menu?.map((mn: any) => (
          <div className={classes.menuItems} key={mn.id}>
            <Card cssClass={classes.menuItem}>
              <h5>{mn.name}</h5>
              <p>{mn.description}</p>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default MenuModule;
