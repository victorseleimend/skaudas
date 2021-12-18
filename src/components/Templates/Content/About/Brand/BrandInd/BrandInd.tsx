import { FC } from "react";

import classes from "./BrandInd.module.css";

const BrandInd: FC<{ srcImage: string; altText: string; text: string }> = ({
  altText,
  text,
  srcImage,
}) => {
  return (
    <div className={classes.brandInd}>
      <img src={srcImage} alt={altText} />
      {text.split("").map((txt) => (
        <p key={txt + Math.random()}>{txt}</p>
      ))}
    </div>
  );
};

export default BrandInd;
