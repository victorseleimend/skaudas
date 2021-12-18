import { FC } from "react";

import classes from "./Organizer.module.css";

const Organizer: FC = ({ children }) => {
  return <div className={classes.organizer}>{children}</div>;
};

export default Organizer;
