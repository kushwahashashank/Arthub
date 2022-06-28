import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import "./Css/Signup.css";
import Load from "./Load";
function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCpassword] = useState("");
  
  // const [message , setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const Submithandler = async (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      setError("Password do not match");
    } else {
      setError(null);

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          "http://localhost:5000/api/users",
          {
            fname,
            lname,
            email,
            password,
          },
          config
        );

        localStorage.setItem("userInfo", JSON.stringify(data));
        if (data) {
          // history("/");
        }
        setLoading(false);
        setEmail("");
        setFname("");
        setCpassword("");
        setPassword("");
        setLname("");
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    const userdata = localStorage.getItem("userInfo")
    if(userdata){
      console.log("here")
      history("/");
    }
  })
 

  return (
    <>
      {" "}
      {loading && <Load style={{ position: "fixed" }} />}
      <div className="signup_container">
        <div className="signup_page">
          {error && <ErrorMessage varient="danger">{error}</ErrorMessage>}
          <input
            className="signup_button"
            type="text"
            name="name"
            id="first_name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            className="signup_button"
            type="text"
            name="name"
            id="last_name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last Name"
          />
          <input
            className="signup_button"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="signup_email"
            placeholder="Email"
            required
          />
          <input
            className="signup_button"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Set your password"
            required
          />
          <input
            className="signup_button"
            type="password"
            name="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            placeholder="confirm password"
            required
          />
          <button className="signup_btn" onClick={Submithandler}>
            Sign Up
          </button>
          <Link
            style={{
              padding: "0.8rem",
              paddingTop: "1.1rem",
              textDecoration: "none",
              color: "black",
            }}
            to="/Signin"
          >
            Already have acoount
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
