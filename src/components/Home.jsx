import React, { useRef } from "react";
import "./Css/Home.css";
import projects from "./Data.jsx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


function Home() {
  


  document.title = "Shashank Art";

  const titleRef = useRef();
  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="homepage">
        <div className="firstpart">
          <div className="firstsection">
            <img id="homelogo" src="Images/rrr.png" alt="" />
          </div>
          <div className="secondsection">
            <h1>
              Hey! <br />
              I'm Shashank, an artist and a web developer.
            </h1>
         <p>Work</p>
            <div onClick={handleBackClick} className="arrow">
              <MdOutlineKeyboardArrowDown className="work bounce" />
            </div>
          </div>
        </div>
        <div className="qoute">
          " The aim of art is not to represent the outward appearance of things,
          but their inward significance "
        </div>
        <div ref={titleRef} className="gallery">
          {projects.map((e) => (
            <div key={e.distinct} className="image">
              <div className="photo">
              <div className="store_image">
                <img src={e.photo} alt="" />
                </div>
              </div>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
