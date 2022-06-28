import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Css/Signup.css";
import Load from "./Load";
import ErrorMessage from "./ErrorMessage";
import { useStateValue } from "./StateProvider";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useNavigate();

  const [{},dispatch]=useStateValue();

  //   useEffect(() => {

  // const userInfo = localStorage.getItem("userInfo");
  // if(userInfo){
  //   history.push("/Data");
  // }
  //   }, [history])

  const submithandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        },
        config
      );
      
      // console.log(data);
      
      localStorage.setItem("userInfo", JSON.stringify(data));
      // const userInfo = localStorage.getItem("userInfo");
      setEmail("");
      setPassword("");
      if (data) {
        dispatch ({
          type:'SET_USER',
          user:data,
       })
        // console.log("yes")

    
      }
      else{
        dispatch ({
          type:'SET_USER',
          user:null
        })
      }
      setLoading(false);
    } 
    catch (error) {
      setError("Invalid email or password");
    }
  };
  useEffect(() => {
    const userdata = localStorage.getItem("userInfo")
    if(userdata){
      history("/")
    }
  })

  return (
    <>
      {loading && <Load style={{ position: "fixed" }} />}

      <div className="signup_container">
        <div className="signup_page">
          {error && <ErrorMessage varient="danger">{error}</ErrorMessage>}
          <input
            className="signup_button"
            type="email"
            name="email"
            id="signup_email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="signup_button"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className=" signup_btn" onClick={submithandler}>
            Sign In
          </button>
          <Link
            style={{
              padding: "0.8rem",
              paddingTop: "1.1rem",
              textDecoration: "none",
              color: "black",
            }}
            to="/Signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signin;
