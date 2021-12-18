import { FC } from "react";
import classes from "./Slide.module.css";

import Button from "../../../../../UI/Button/Button";

import { Slides } from "../../../../../Interfaces/Slides";

const Slide: FC<{ slides: Slides }> = ({ slides }) => {
  return (
    <>
      {slides.map((slide) => (
        <div
          role="none"
          data-slide={slide.id}
          key={slide.id}
          className={classes.carouselItem}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div>
            <h3>{slide.title}</h3>
            <p>{slide.paragraph}</p>
            <Button path={slide.btnPath}>{slide.btnMes}</Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Slide;
