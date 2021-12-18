import { FC } from "react";

import {
  FontAwesomeIconProps,
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";

import classes from "./SocialMediaInfo.module.css";

const SocialMediaInfo: FC<{ icon: FontAwesomeIconProps["icon"] }> = ({
  icon,
}) => {
  return (
    <li className={classes.smInfo}>
      <button type="button">
        <FontAwesomeIcon icon={icon} />
      </button>
    </li>
  );
};

export default SocialMediaInfo;
