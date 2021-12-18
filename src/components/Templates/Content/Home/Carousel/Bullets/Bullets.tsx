import { FC, useEffect, useRef } from "react";
import useCarousel from "../../../../../hooks/useCarousel";
import { Slides } from "../../../../../Interfaces/Slides";

import classes from "./Bullets.module.css";

const Bullets: FC<{ slides: Slides }> = ({ slides }) => {
  const { slideNumber, setSlideNumber, setNextSlide, setAncientSlide } =
    useCarousel();
  const bulletListRef = useRef<HTMLUListElement>(null);

  const setBulletColor = () => {
    const allBullets = bulletListRef.current?.querySelectorAll("li");
    allBullets?.forEach((bullet) => {
      bullet
        .querySelector("button")
        ?.classList.remove("Bullets_activated__2VkKR");
      if (bullet.getAttribute("id") === slideNumber.toString()) {
        bullet
          .querySelector("button")
          ?.classList.add("Bullets_activated__2VkKR");
      }
    });
  };

  useEffect(() => {
    setBulletColor();
  });

  const changeSlideHandler = (id: number) => {
    setAncientSlide(() => {
      if (id === 0) {
        return 2;
      }
      return id - 1;
    });
    setSlideNumber(id);
    setNextSlide(() => {
      if (id === 2) {
        return 0;
      }
      return id + 1;
    });
  };

  return (
    <ul ref={bulletListRef} className={classes.bullets}>
      {slides.map((slide) => (
        <li id={slide.id.toString()} key={slide.id}>
          <button
            onClick={changeSlideHandler.bind(this, slide.id)}
            type="button"
            aria-label={`slide ${slide.title}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default Bullets;
