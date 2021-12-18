import React, { FC, useEffect, useState } from "react";

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import BusinessHoursTooltip from "./BusinessHoursTooltip/BusinessHoursTooltip";
import FooterButton from "../../../../UI/FooterButton/FooterButton";

import classes from "./BusinessHoursInfo.module.css";

const BusinessHoursInfo: FC<{
  icon: FontAwesomeIconProps["icon"];
  message: string;
  inOpeningHourTooltip: (
    inOpeningHourHandler: (minHour: number, maxHour: number) => boolean
  ) => void;
  inOpeningHour: boolean;
}> = ({ icon, message, inOpeningHourTooltip, inOpeningHour }) => {
  const [showBusinessTooltip, setShowBusinessTooltip] = useState(false);

  const inOpeningHourHandler = (minHour: number, maxHour: number) => {
    const actualDate = new Date();
    const actualDay = actualDate.getDay();
    const actualHour = actualDate.getHours();
    if (actualHour >= minHour && actualHour < maxHour && actualDay !== 1) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    inOpeningHourTooltip(inOpeningHourHandler);
  }, []);

  return (
    <div className={classes.businessHoursInfo}>
      <div>
        <FontAwesomeIcon icon={icon} />
        <FooterButton
          onClickHandler={() =>
            setShowBusinessTooltip((isShowing) => !isShowing)
          }
        >
          {message}
        </FooterButton>
      </div>
      {showBusinessTooltip && (
        <BusinessHoursTooltip inOpeningHour={inOpeningHour} />
      )}
    </div>
  );
};

export default BusinessHoursInfo;
