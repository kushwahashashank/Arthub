import React, { useState, useEffect } from "react";
import "./Css/nav.css";
import "./Css/Dark.css";

import { FaSun } from "react-icons/fa";
import { BsFillMoonFill, BsCart2 } from "react-icons/bs";
import { Link ,useNavigate} from "react-router-dom";
import {useStateValue} from "./StateProvider"
// import Navbar from 'react-bootstrap/Navbar'
export default function Navbar() {


const history = useNavigate();
  const [{basket}]=useStateValue();
  
  var user = JSON.parse(localStorage.getItem('userInfo'))
  // const curruser = user.fname;

  const [shownav, setNav] = useState(false);
  const [showButton, setShowButton] = useState(false);
const [like, setlike] = useState(false)

  const [logoname, setLogoname] = useState("Images/logo.png");
  const [mystyle, setMystyle]= useState({
    color:"black",
    backgroundColor:"white"
  });


   function togglestyle(){

    if(mystyle.color==='black'){
      setMystyle({
        color:'white',
        backgroundColor:'black'
     })
      setLogoname("Images/image.png")
      setlike(true)
    }
   else {
        setMystyle({
          color:'black',
          backgroundColor:'white',
          onMouseOverColor:'white'
        })
        setLogoname("Images/logo.png")
        setlike(false)
    }
    
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
     top: 0,
      behavior: "smooth"
    });
  };

  <script href="https://cdn.jsdelivr.net/npm/universalsmoothscroll@latest/universalsmoothscroll-ease-functions-min.js" />
  return (
    <>
  
      <div className="dark-mode" style={mystyle}>
        <input  type="checkbox" className="checkbox" id="chk" />
        <label  onClick={togglestyle} className="label" htmlFor="chk">
          <i>
            <FaSun className="color-icon" />
          </i>
          <i>
            <BsFillMoonFill className="color-icon" />
          </i>
      <div  className="ball"></div>
      
        </label>
      </div>
      <nav className="nav" style={mystyle}>
        <div className="logo">
          <Link to="/">
            <img src={logoname} alt="Logo" />
          </Link>
        </div>
        <div className="navigation">
          <ul
            className={shownav ? "active" : "dis"}
            onClick={() => setNav(!shownav)}
          >
            <li>
              <Link  className={like ? "like" : ""} to="/Contact">CONTACT</Link>
            </li>
            <li>
              <Link className={like ? "like" : ""} to="/Store">STORE</Link>
            </li>
            <li>
              <Link className={like ? "like" : ""} to="/About">ABOUT</Link>
            </li>
            <li>
              <Link className={like ? "like" : ""}  to="/">HOME</Link>
            </li>
          </ul>
          <div
            id="nav-icon"
            className={shownav ? "open" : ""}
            onClick={() => setNav(!shownav)}
          >
            <span></span>
            <span></span>
            <span></span>
         </div>
        </div>
      </nav>
      <div className="cart">
      <p style={{paddingLeft: "5px"}}>{basket?.length}</p>
        
        <Link className={like ? "like" : ""} style={{cursor: "pointer",color:"black",fontStyle:"none"}} to="/Cart">{<BsCart2/>}</Link>
        
        {user ? 
        <p className="user" style={{cursor:"pointer"}} onClick={()=>{
          localStorage.removeItem("userInfo");
          history("/" , { replace: true });
        }}>Logout </p>
        : ''
        
        } 
        <p className="user">Hello <Link style={{textDecoration:"none",color:'black'}} to={!user && "/Signup"}>{user ? user.fname : 'Guest (Register)'}</Link></p>



        
      </div>
 
      {showButton && (
        <button onClick={scrollToTop} id="scroll">
          Back to Top
        </button>
      )}
    </>
  );

}
