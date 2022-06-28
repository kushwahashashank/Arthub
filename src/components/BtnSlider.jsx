import React from "react";
import "./Css/slider.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
        <MdArrowForwardIos className="fontsize" />
      ) : (
        <MdArrowBackIosNew className="fontsize" />
      )}
    </button>
  );
}
