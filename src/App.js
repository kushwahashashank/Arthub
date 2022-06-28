import React ,{useEffect} from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Store from "./components/Store.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx"
import Signin from "./components/Signin.jsx";
// import Slider from "./components/Slider.jsx";
import Signup from "./components/Signup.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const user = localStorage.getItem("token");


function App() {

  useEffect(()=>{

  },[])


  return (
    <>

     <Router>
      <Navbar />

      <Routes>
      {user && <Route path="/" exact element={<Home />} />}
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        
      </Routes>
      <Footer />
      {/* <Slider /> */}
    </Router> 
    
    </>
  )
}

export default App;
