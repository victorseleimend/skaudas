import { useEffect, useRef, useState } from "react";
import classes from "./Carousel.module.css";

import Slide from "./Slide/Slide";
import Bullets from "./Bullets/Bullets";

import SlideOne from "../../../../../images/pizza-slide-one.jpg";
import SlideTwo from "../../../../../images/pizza-slide-two.jpg";
import SlideThree from "../../../../../images/pizza-slide-three.jpg";
import { Slides } from "../../../../Interfaces/Slides";
import useCarousel from "../../../../hooks/useCarousel";

const slides: Slides = [
  {
    id: 0,
    image: SlideOne,
    title: "Baixe o nosso app!",
    paragraph: "Baixe o app oficial da Skaudas e comece a pedir por lá.",
    btnMes: "Baixe nosso app",
    btnPath: "/app",
  },
  {
    id: 1,
    image: SlideTwo,
    title: "Onde estamos?",
    paragraph:
      "Estamos em todas as principais plataformas de delivery e ainda temos o nosso próprio app.",
    btnMes: "Entre em contato",
    btnPath: "/contato",
  },
  {
    id: 2,
    image: SlideThree,
    title: "Nosso Objetivo",
    paragraph:
      "A Skaudas vem com o objetivo de trazer pizzas que despertem todos os sabores do seu paladar.",
    btnMes: "Sobre nós",
    btnPath: "/sobre",
  },
];

const Carousel = () => {
  const {
    slideNumber,
    ancientSlide,
    nextSlide,
    setSlideNumber,
    setNextSlide,
    setAncientSlide,
  } = useCarousel();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [posX, setPosX] = useState(0);
  const [curPos, setCurPos] = useState(0);
  const [translate, setCurTranslate] = useState(0);

  const updateSlidePos = () => {
    const allSlides = carouselRef.current?.querySelectorAll("div[data-slide]");

    allSlides?.forEach((slide) => {
      slide.classList.remove("Slide_prevSlide__2TC3V");
      slide.classList.remove("Slide_currentSlide__3EZQD");
      slide.classList.remove("Slide_nextSlide__2IRXw");
    });

    allSlides![ancientSlide].classList.add("Slide_prevSlide__2TC3V");
    allSlides![slideNumber].classList.add("Slide_currentSlide__3EZQD");
    allSlides![nextSlide].classList.add("Slide_nextSlide__2IRXw");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setNextSlide((slideNum: number) => {
          if (slideNum === 2) {
            return 0;
          }
          return slideNum + 1;
        });
        setAncientSlide((slideNum: number) => {
          if (slideNum === 2) {
            return 0;
          }
          return slideNum + 1;
        });
        setSlideNumber((slideNum: number) => {
          if (slideNum === 2) {
            return 0;
          }
          return slideNum + 1;
        });
      }
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    updateSlidePos();
    setCurTranslate(0);
  }, [ancientSlide, slideNumber, nextSlide]);

  const getPosX = (event: any) => {
    setPosX(
      event.type.includes("mouse") ? event.pageX : event.touches[0].clientX
    );
    return posX;
  };

  const onStartHandler = () => {
    setIsDragging(true);
  };

  const onMoveHandler = (event: any) => {
    if (isDragging) {
      setCurPos(getPosX(event));
      setCurTranslate(Math.ceil((curPos * 100) / window.innerWidth));
    }
  };

  const onEndHandler = () => {
    setIsDragging(false);
    if (translate < 50 && translate !== 0) {
      setNextSlide(slideNumber);
      setSlideNumber((slideNum: number) => {
        if (slideNum === 0) {
          return 2;
        }
        return slideNum - 1;
      });
      setAncientSlide((slideNum: number) => {
        if (slideNum === 0) {
          return 2;
        }
        return slideNum - 1;
      });
    } else if (translate > 50) {
      setAncientSlide(slideNumber);
      setSlideNumber((slideNum: number) => {
        if (slideNum === slides.length - 1) {
          return 0;
        }
        return slideNum + 1;
      });
      setNextSlide((slideNum: number) => {
        if (slideNum === slides.length - 1) {
          return 0;
        }
        return slideNum + 1;
      });
    }
  };

  return (
    <div
      ref={carouselRef}
      role="none"
      onTouchStart={onStartHandler}
      onMouseDown={onStartHandler}
      onTouchMove={onMoveHandler}
      onMouseMove={onMoveHandler}
      onTouchEnd={onEndHandler}
      onMouseUp={onEndHandler}
      onMouseLeave={onEndHandler}
      className={classes.carousel}
    >
      <Slide slides={slides} />
      <Bullets slides={slides} />
    </div>
  );
};

export default Carousel;
