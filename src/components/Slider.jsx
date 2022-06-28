import React, { useState } from "react";
import "./Css/slider.css";
import BtnSlider from "./BtnSlider.jsx";
import projects from "./Data.jsx";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== projects.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === projects.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(projects.length);
    }
  };

  return (
      <>
      <div className="view-image">
    <div className="container-slider">
      {projects.map((obj, index) => {
        return (
            <>
          <div
            key={obj.distinct}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.photo} alt="" />
            <div className="values">
          <p className="name">{obj.text}</p>
          <p className="year">{obj.year}</p>
          <p className="size">{obj.height} &times; {obj.width}</p>
          <p className="description">{obj.desc}</p>
          </div>
          </div>
         
          </>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
    
    </div>
    </>
  );
}
