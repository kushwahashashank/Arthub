import React,{useState} from "react";
import "./Css/Contact.css";

export default function Contact() {
  document.title = "Contact";
  const [user, setUser] = useState(
    {
      name:"",
      email:"",
      phone:"",
      message:""
    }
  );
  const [newsletter, setNewsletter] = useState(
    {
      fname:"",
      lname:"",
      nemail:""
    }
  );

let name , value;
let nname,nvalue;
const getUserData = (event)=>{
 name = event.target.name;
 value = event.target.value;
 setUser({...user,[name]:value});
}
const getNewsletter = (event)=>{
  nname = event.target.name;
  nvalue = event.target.value;
  
  setNewsletter({...newsletter,[nname]:nvalue});
 }

const postData= async(e)=>{
  e.preventDefault();
  const {name,email,phone,message}=user;
  if(name && email && phone && message){
  const res= await fetch("https://ecommerce-project-4d77a-default-rtdb.firebaseio.com/Contact.json",{
    method : "POST",
    headers:{
      "Content-Type":"application/json",
    }, 
     body: JSON.stringify({
      name,
      email,
      phone,
      message
     })
     
  });

  if(res){
    alert("Submission successfull")
    setUser({
      name:"",
      email:"",
      phone:"",
      message:"" 
    });
  }
  else{
    alert("Submition unsuccessfull");
  }
  }

    }

    const postnData= async(e)=>{
      e.preventDefault();
      const { fname,lname,nemail}=newsletter;
      if(fname && nemail){
      const rest= await fetch("https://ecommerce-project-4d77a-default-rtdb.firebaseio.com/Newsletter.json",{
        method : "POST",
        headers:{
          "Content-Type":"application/json",
        }, 
         body: JSON.stringify({
          fname,
          lname,
          nemail
         })
         
      });
    
      if(rest){
        alert("Submission successfull")
        setNewsletter({
          fname:"",
          lname:"",
          nemail:""
        });
      }
      else{
        alert("Submition unsuccessfull");
      }
      }
    
        }
  return (
    <>
      <h2>CONTACT</h2>
      <div className="Form">
        <form id="contactForm" method="POST">
          <div className="first">
            <p>
              <label>Full Name</label>
              <input type="text" name="name"  id="name" value={user.name} onChange={getUserData} required />
            </p>
            <p>
              <label>Email Address</label>
              <input type="email" name="email" required id="email" value={user.email} onChange={getUserData}  />
            </p>
          </div>
          <div className="second">
            <p>
              <label>Phone Number</label>
              <input type="text"  name="phone" id="phone" value={user.phone} onChange={getUserData} />
            </p>
            <p className="full">
              <label>Message</label>
              <textarea name="message" required rows="5" id="message" value={user.message} onChange={getUserData}></textarea>
            </p>
          </div>
          <p className="full">
            <button id="f_submit" type="submit" onClick={postData}>
              Submit
            </button>
          </p>
        </form>
        <form className="newsletter">
          <h1 className="head">STAY IN TOUCH</h1>
          <p className="newshead">
            Sign up with your email address to receive news and updates.
          </p>
          <div className="newsform" method="POST">
            <div className="name">
              <input
                type="text"
                name="fname"
                id="firstname"
               value={newsletter.fname}
               onChange={getNewsletter}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lname"
                value={newsletter.lname}
                onChange={getNewsletter}
                id="lastname"
                placeholder="Last Name (optional)"
              />
            </div>
            <input
              type="email"
              name="nemail"
              id="newsemail"
              value={newsletter.nemail}
              onChange={getNewsletter}
              placeholder="Email"
              required
            />
            <button id="newssignup" type="submit" onClick={postnData}>
              SIGN
            </button>
            <p className="pros">I won’t spam you, promise.</p>
          </div>
        </form>
      </div>
    </>
  );
}
