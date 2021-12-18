import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import { FC } from "react";

import classes from "./ContactInfo.module.css";

import FooterButton from "../../../../UI/FooterButton/FooterButton";

const ContactInfo: FC<{
  icon: FontAwesomeIconProps["icon"];
  message: string;
  onClickHandler: () => void;
}> = ({ icon, message, onClickHandler }) => {
  return (
    <li className={classes.contactInfo}>
      <p>
        <FontAwesomeIcon icon={icon} />
        <FooterButton onClickHandler={onClickHandler}>{message}</FooterButton>
      </p>
    </li>
  );
};

export default ContactInfo;
