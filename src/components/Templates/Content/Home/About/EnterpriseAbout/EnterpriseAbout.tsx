import { FC } from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classes from "./EnterpriseAbout.module.css";

const EnterpriseAbout: FC<{
  title: string;
  icon: FontAwesomeIconProps["icon"];
  message: string;
}> = ({ title, icon, message }) => {
  return (
    <div className={classes.enterpriseAbout}>
      <FontAwesomeIcon icon={icon} />
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default EnterpriseAbout;
