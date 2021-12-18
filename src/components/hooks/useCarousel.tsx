import { useContext } from "react";
import { carouselCtx } from "../context/CarouselProvider";

const useCarousel = () => {
  const {
    slideNumber,
    setSlideNumber,
    setNextSlide,
    nextSlide,
    setAncientSlide,
    ancientSlide,
  } = useContext(carouselCtx);
  return {
    slideNumber,
    setSlideNumber,
    setNextSlide,
    nextSlide,
    setAncientSlide,
    ancientSlide,
  };
};

export default useCarousel;
