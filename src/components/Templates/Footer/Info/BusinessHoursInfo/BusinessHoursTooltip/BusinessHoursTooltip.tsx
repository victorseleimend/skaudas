import { FC } from "react";
import Card from "../../../../../UI/Card/Card";

import classes from "./BusinessHoursTooltip.module.css";

const BusinessHoursTooltip: FC<{ inOpeningHour: boolean }> = ({
  inOpeningHour,
}) => {
  return (
    <Card cssClass={classes.businessHoursTooltip}>
      <span className={inOpeningHour ? classes.opened : classes.closed} />
      <p>{inOpeningHour ? "Aberto" : "Fechado"}</p>
    </Card>
  );
};

export default BusinessHoursTooltip;
