import { FC } from "react";
import classes from "./Title.module.css";

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={classes.title}>
      <h2>{title}</h2>
      <div />
    </div>
  );
};

export default Title;
