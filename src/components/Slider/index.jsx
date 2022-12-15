import React from "react";
import { useState } from "react";

import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  
  return (
    <div className="slider">
      {/* slides = toutes les images récupérer via l'API */}
      {slides.map((picture, index) => {
        // picture = lien de l'image | index = N° de l'image
        return (
          <div key={index} className={ 
            index === current ? "slide active" : "slide inactive" }>
            
            {index === current && (
              <>
                <img src={picture} alt="" className="slider__picture" />
                <p className="slider__count">{current + 1}/{length}</p>
              </>
              
            )}
          </div>
        );
      })}
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="slider__previous__icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="slider__next__icon" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;