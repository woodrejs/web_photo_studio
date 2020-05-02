import React from "react";

const SliderImg = ({ src, classes, animationEnd, animation }) => {
  return (
    <img
      className="slider__image"
      src={src}
      style={{
        animation: `${animation ? classes[0] : classes[1]} 1s forwards`,
      }}
      alt="sliderImg"
      onAnimationEnd={animationEnd}
    />
  );
};

export default SliderImg;
