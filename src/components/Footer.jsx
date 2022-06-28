import React from "react";
import "./Css/Footer.css";
import { FaFacebookF, FaInstagram,FaYoutube } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { BsTwitter, BsGithub} from "react-icons/bs";
function Footer() {
  const fb = () => {
    window.open("https://www.facebook.com/kushwaha0shashank");
  };
  const insta = () => {
    window.open("https://www.instagram.com/_kushwaha_shashank_");
  };
  const mail = () => {
    window.open("mailto:kushwahaabhi101@gmail.com");
  };
  const tweet = () => {
    window.open("https://twitter.com/Abhishe98110899");
  };
  const linkdin = () => {
    window.open("https://linkedin.com/in/abhishek-kushwaha-a766a3201");
  };
  return (
    <>
      <footer id="footer">
        <BsTwitter className="fa" onClick={tweet} />
        <FaFacebookF className="fa" onClick={fb} />
        <FaInstagram className="fa" onClick={insta} />
        <SiGmail className="fa" onClick={mail} />
        <GrLinkedinOption className="fa" onClick={linkdin} />
        <BsGithub className="fa" />
        <FaYoutube className="fa"/>
      </footer>
    </>
  );
}

export default Footer;
