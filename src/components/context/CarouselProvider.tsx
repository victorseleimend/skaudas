import { createContext, FC, useMemo, useState } from "react";

export const carouselCtx = createContext<{
  slideNumber: number;
  setSlideNumber: (slideNum: number | ((slideN: number) => number)) => void;
  ancientSlide: number;
  setAncientSlide: (slideNum: number | ((slideN: number) => number)) => void;
  nextSlide: number;
  setNextSlide: (slideNum: number | ((slideN: number) => number)) => void;
}>({
  slideNumber: 0,
  setSlideNumber: (slideNum) => slideNum,
  ancientSlide: 2,
  setAncientSlide: (slideNum) => slideNum,
  nextSlide: 1,
  setNextSlide: (slideNum) => slideNum,
});

const CarouselProvider: FC = ({ children }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [ancientSlide, setAncientSlide] = useState(2);
  const [nextSlide, setNextSlide] = useState(1);

  return (
    <carouselCtx.Provider
      value={useMemo(
        () => ({
          slideNumber,
          setSlideNumber,
          ancientSlide,
          setAncientSlide,
          nextSlide,
          setNextSlide,
        }),
        [slideNumber, setSlideNumber]
      )}
    >
      {children}
    </carouselCtx.Provider>
  );
};

export default CarouselProvider;
